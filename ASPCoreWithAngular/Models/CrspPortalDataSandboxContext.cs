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

        public virtual DbSet<Role> Role { get; set; }

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
            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasIndex(e => e.RoleName)
                    .HasName("UQ__Role__8A2B6160FE5FCB2D");

                entity.Property(e => e.RoleId).ValueGeneratedNever();

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
