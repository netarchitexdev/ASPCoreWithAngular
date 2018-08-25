using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ASPCoreWithAngular.Models
{
    public interface IRoleDataAccessLayer
    {
        Task<bool> AddRole(Role role);
        Task<bool> DeleteRole(Guid id);
        Task<bool> UpdateRole(Role role);
        Task<IEnumerable<Role>> GetAllRoles();
        Task<Role> GetRole(Guid id);
        Task<bool> RoleExists(Guid id);
    }
}