﻿using ASPCoreWithAngular.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace ASPCoreWithAngular.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class RoleController : Controller
    {
        private readonly IRoleDataAccessLayer _db;

        public RoleController(IRoleDataAccessLayer db)
        {
            _db = db;
        }

        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetRoles()
        {
            try
            {
                var roles = await _db.GetAllRoles();
                //throw new Exception(); // TODO: test code only!
                return Ok(roles);
            }
            catch(Exception ex)
            {
                return HandleUnexpectedError(ex);
            }            
        }

        /// <summary>
        /// Get a role by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRole([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var role = await _db.GetRole(id);

            if (role == null)
            {
                return NotFound();
            }

            return Ok(role);
        }

        /// <summary>
        /// Updates a role.
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPut()]
        public async Task<IActionResult> PutRole([FromBody] Role role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                await _db.UpdateRole(role);
            }
            catch (Exception ex)
            {
                if (await RoleExists(role.RoleName))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    return HandleUnexpectedError(ex);
                }
            }

            return NoContent();
        }

        /// <summary>
        /// Adds a role.
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> PostRole([FromBody] Role role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            try
            {
                await Task.Run(() => _db.AddRole(role));
            }
            catch (Exception ex)
            {
                if (await RoleExists(role.RoleName))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    return HandleUnexpectedError(ex);
                }
            }

            //return CreatedAtAction("GetRole", "Role", new { id = role.RoleId }, role); // TODO: Try to get this to work!
            return new StatusCodeResult(StatusCodes.Status201Created);
        }

        /// <summary>
        /// Delete role by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var role = await _db.GetRole(id);
            if (role == null)
            {
                return NotFound();
            }

            await _db.DeleteRole(id);

            return Ok(role);
        }

        /// <summary>
        /// Checks if task exists.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        private async Task<bool> RoleExists(string name)
        {
            return await _db.RoleExists(name);
        }

        /// <summary>
        /// Handles unexpected error and return error status code 500
        /// </summary>
        /// <param name="ex"></param>
        /// <returns></returns>
        private ObjectResult HandleUnexpectedError(Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex);
        }
    }
}