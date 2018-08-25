using System;
using System.ComponentModel.DataAnnotations;

namespace ASPCoreWithAngular.Models
{
    public partial class Role
    {
        [Required]
        public Guid RoleId { get; set; }
        [Required]
        public string RoleName { get; set; }
    }
}
