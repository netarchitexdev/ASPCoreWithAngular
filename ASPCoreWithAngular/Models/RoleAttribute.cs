using System;
using System.Collections.Generic;

namespace ASPCoreWithAngular.Models
{
    public partial class RoleAttribute
    {
        public int RoleAttributeId { get; set; }
        public Guid RoleId { get; set; }
        public int AttributeId { get; set; }
    }
}
