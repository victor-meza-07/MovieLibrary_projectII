using Microsoft.EntityFrameworkCore;
using WebAPISample.Models;

namespace WebAPISample.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Seed data - needs migration
            modelBuilder.Entity<Movie>()
         .HasData(
            new Movie { MovieId = 1, Title = "The Departed", Genre = "Drama", Director = "Martin Scorsese" },
            new Movie { MovieId = 2, Title = "The Dark Knight", Genre = "Drama", Director = "Christopher Nolan" },
            new Movie { MovieId = 3, Title = "Inception", Genre = "Drama", Director = "Christopher Nolan" },
            new Movie { MovieId = 4, Title = "Pineapple Express", Genre = "Comedy", Director = "David Gordon Green" },
            new Movie { MovieId = 5, Title = "Die Hard", Genre = "Action", Director = "John McTiernan" }
         );
            modelBuilder.Entity<MovieImagesModel>()
         .HasData(
            new MovieImagesModel { PrimaryKey = 1, MovieId = 1, ImageUrl = "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg" },
            new MovieImagesModel { PrimaryKey = 2, MovieId = 1, ImageUrl = "https://img.discogs.com/fgcDIFCQnPwA5sR57Wfs3f0GdGw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2478818-1454046693-9270.jpeg.jpg" },

            new MovieImagesModel { PrimaryKey = 3, MovieId = 2, ImageUrl = "https://i.ebayimg.com/00/s/MTYwMFgxMDAw/z/cagAAOSwZK1eMRhf/$_57.JPG?set_id=8800005007" },
            new MovieImagesModel { PrimaryKey = 4, MovieId = 2, ImageUrl = "https://i.pinimg.com/originals/cc/47/a5/cc47a507854dfe4ea145ebb4c9ae51c4.jpg" },

            new MovieImagesModel { PrimaryKey = 5, MovieId = 3, ImageUrl = "https://www.impawards.com/2010/posters/inception_xlg.jpg" },
            new MovieImagesModel { PrimaryKey = 6, MovieId = 3, ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/81JRPAalYUL._AC_SL1481_.jpg" },

            new MovieImagesModel { PrimaryKey = 7, MovieId = 4, ImageUrl = "https://posterspy.com/wp-content/uploads/2018/11/CHRISDASHROB_PINEAPPLEEXPRESS-800x1125.jpg" },
            new MovieImagesModel { PrimaryKey = 8, MovieId = 4, ImageUrl = "https://www.joblo.com/assets/images/oldsite/posters/images/full/2008-pineapple_express-4.jpg" },

            new MovieImagesModel { PrimaryKey = 9, MovieId = 5, ImageUrl = "https://i0.wp.com/stallonezone.com/zone/2019/z122619stella_diehard.png" },
            new MovieImagesModel { PrimaryKey = 10, MovieId = 5, ImageUrl = "https://i.etsystatic.com/12573617/r/il/540a7d/1568659380/il_794xN.1568659380_oioz.jpg" }
         );
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<MovieImagesModel> MovieImages { get; set; }
    }
}
