using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPCoreWithAngular.Models
{
    public class RoleDataAccessLayer : IRoleDataAccessLayer
    {
        CrspPortalDataSandboxContext db = new CrspPortalDataSandboxContext();

        //public IEnumerable<Role> GetAllRoles()
        //{
        //    try
        //    {
        //        return db.Role.ToList();
        //    }
        //    catch
        //    {
        //        throw;
        //    }
        //}
        public async Task<IEnumerable<Role>> GetAllRoles()
        {
            try
            {
                var roles = await db.Role.ToListAsync();
                return roles;
            }
            catch
            {
                throw;
            }
        }

        //To Add new role record   
        public int AddRole(Role role)
        {
            try
            {
                db.Role.Add(role);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar role  
        public int UpdateRole(Role role)
        {
            try
            {
                db.Entry(role).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular role  
        public async Task<Role> GetRoleData(Guid id)
        {
            try
            {
                Role role = db.Role.Find(id);
                return role;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular role  
        public int DeleteRole(int id)
        {
            try
            {
                Role emp = db.Role.Find(id);
                db.Role.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
