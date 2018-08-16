using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ASPCoreWithAngular.Models
{
    public interface IRoleDataAccessLayer
    {
        //int AddRole(Role role);
        //int DeleteRole(int id);
        Task<IEnumerable<Role>> GetAllRoles();
        //Task<Role> GetRoleData(Guid id);
        //int UpdateRole(Role role);
    }
}