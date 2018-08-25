using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ASPCoreWithAngular.Models
{
    public class RoleDataAccessLayer : IRoleDataAccessLayer
    {
        CrspPortalDataSandboxContext db = new CrspPortalDataSandboxContext();

        // Gets all roles
        public async Task<IEnumerable<Role>> GetAllRoles()
        {
            var roles = await db.Role.ToListAsync();
            return roles;
        }

        // Adds a new role   
        public async Task<bool> AddRole(Role role)
        {
            db.Role.Add(role);
            return await db.SaveChangesAsync() == 1 ? true : false;
        }

        // Updates a particluar role  
        public async Task<bool> UpdateRole(Role role)
        {
            db.Entry(role).State = EntityState.Modified;
            return await db.SaveChangesAsync() == 1 ? true : false;
        }

        // Gets the details of a particular role  
        public async Task<Role> GetRole(Guid id)
        {
            return await db.Role.FindAsync(id);
        }

        // Deletes a particular role  
        public async Task<bool> DeleteRole(Guid id)
        {
            Role role = await db.Role.FindAsync(id);
            if (role == null) return false;
            db.Role.Remove(role);
            return await db.SaveChangesAsync() == 1 ? true : false;
        }

        // Checks if role exists
        public async Task<bool> RoleExists(Guid id)
        {
            return await db.Role.AnyAsync(e => e.RoleId == id);
        }
    }
}
