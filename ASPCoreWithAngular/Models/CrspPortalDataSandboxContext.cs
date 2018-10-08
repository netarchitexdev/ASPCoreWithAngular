using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ASPCoreWithAngular.Models
{
    public partial class CrspPortalDataSandboxContext : DbContext
    {
        public CrspPortalDataSandboxContext()
        {
        }

        public CrspPortalDataSandboxContext(DbContextOptions<CrspPortalDataSandboxContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Attribute> Attribute { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<RoleAttribute> RoleAttribute { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:crsp-portal-data-poc.database.windows.net,1433;Initial Catalog=CrspPortalDataSandbox;Persist Security Info=False;User ID=crspportaluser;Password=WelcomeToCrspPortalPocDB$;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Attribute>(entity =>
            {
                entity.HasIndex(e => e.AttributeName)
                    .HasName("UX_Attribute_AttributeName")
                    .IsUnique();

                entity.Property(e => e.AttributeName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasIndex(e => e.RoleName)
                    .HasName("UX_Role_RoleName")
                    .IsUnique();

                entity.Property(e => e.RoleId).ValueGeneratedNever();

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
