﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPISample.Data;

namespace WebAPISample.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20200401182850_SeededMovieImagesModel")]
    partial class SeededMovieImagesModel
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPISample.Models.Movie", b =>
                {
                    b.Property<int>("MovieId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Director")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Genre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MovieId");

                    b.ToTable("Movies");

                    b.HasData(
                        new
                        {
                            MovieId = 1,
                            Director = "Martin Scorsese",
                            Genre = "Drama",
                            Title = "The Departed"
                        },
                        new
                        {
                            MovieId = 2,
                            Director = "Christopher Nolan",
                            Genre = "Drama",
                            Title = "The Dark Knight"
                        },
                        new
                        {
                            MovieId = 3,
                            Director = "Christopher Nolan",
                            Genre = "Drama",
                            Title = "Inception"
                        },
                        new
                        {
                            MovieId = 4,
                            Director = "David Gordon Green",
                            Genre = "Comedy",
                            Title = "Pineapple Express"
                        },
                        new
                        {
                            MovieId = 5,
                            Director = "John McTiernan",
                            Genre = "Action",
                            Title = "Die Hard"
                        });
                });

            modelBuilder.Entity("WebAPISample.Models.MovieImagesModel", b =>
                {
                    b.Property<int>("PrimaryKey")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MovieId")
                        .HasColumnType("int");

                    b.HasKey("PrimaryKey");

                    b.ToTable("MovieImages");

                    b.HasData(
                        new
                        {
                            PrimaryKey = 1,
                            ImageUrl = "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
                            MovieId = 1
                        },
                        new
                        {
                            PrimaryKey = 2,
                            ImageUrl = "https://img.discogs.com/fgcDIFCQnPwA5sR57Wfs3f0GdGw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2478818-1454046693-9270.jpeg.jpg",
                            MovieId = 1
                        },
                        new
                        {
                            PrimaryKey = 3,
                            ImageUrl = "https://i.ebayimg.com/00/s/MTYwMFgxMDAw/z/cagAAOSwZK1eMRhf/$_57.JPG?set_id=8800005007",
                            MovieId = 2
                        },
                        new
                        {
                            PrimaryKey = 4,
                            ImageUrl = "https://i.pinimg.com/originals/cc/47/a5/cc47a507854dfe4ea145ebb4c9ae51c4.jpg",
                            MovieId = 2
                        },
                        new
                        {
                            PrimaryKey = 5,
                            ImageUrl = "https://www.impawards.com/2010/posters/inception_xlg.jpg",
                            MovieId = 3
                        },
                        new
                        {
                            PrimaryKey = 6,
                            ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/81JRPAalYUL._AC_SL1481_.jpg",
                            MovieId = 3
                        },
                        new
                        {
                            PrimaryKey = 7,
                            ImageUrl = "https://posterspy.com/wp-content/uploads/2018/11/CHRISDASHROB_PINEAPPLEEXPRESS-800x1125.jpg",
                            MovieId = 4
                        },
                        new
                        {
                            PrimaryKey = 8,
                            ImageUrl = "https://www.joblo.com/assets/images/oldsite/posters/images/full/2008-pineapple_express-4.jpg",
                            MovieId = 4
                        },
                        new
                        {
                            PrimaryKey = 9,
                            ImageUrl = "https://i0.wp.com/stallonezone.com/zone/2019/z122619stella_diehard.png",
                            MovieId = 5
                        },
                        new
                        {
                            PrimaryKey = 10,
                            ImageUrl = "https://i.etsystatic.com/12573617/r/il/540a7d/1568659380/il_794xN.1568659380_oioz.jpg",
                            MovieId = 5
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
