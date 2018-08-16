using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPCoreWithAngular.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASPCoreWithAngular.Controllers
{
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
        [HttpGet("[action]")]
        public async Task<IActionResult> GetRoles()
        {
            var roles = await _db.GetAllRoles();

            return Ok(roles);
        }

        //// GET: api/Roles/5
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetRole([FromRoute] Guid id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var role = await _context.Role.FindAsync(id);

        //    if (role == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(role);
        //}

        //// PUT: api/Roles/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutRole([FromRoute] Guid id, [FromBody] Role role)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != role.RoleId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(role).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!RoleExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Roles
        //[HttpPost]
        //public async Task<IActionResult> PostRole([FromBody] Role role)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _context.Role.Add(role);
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (RoleExists(role.RoleId))
        //        {
        //            return new StatusCodeResult(StatusCodes.Status409Conflict);
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetRole", new { id = role.RoleId }, role);
        //}

        //// DELETE: api/Roles/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteRole([FromRoute] Guid id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var role = await _context.Role.FindAsync(id);
        //    if (role == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Role.Remove(role);
        //    await _context.SaveChangesAsync();

        //    return Ok(role);
        //}

        //private bool RoleExists(Guid id)
        //{
        //    return _context.Role.Any(e => e.RoleId == id);
        //}
    }
}