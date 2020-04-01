using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPISample.Migrations
{
    public partial class SeededMovieImagesModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "MovieImages",
                columns: new[] { "PrimaryKey", "ImageUrl", "MovieId" },
                values: new object[,]
                {
                    { 1, "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg", 1 },
                    { 2, "https://img.discogs.com/fgcDIFCQnPwA5sR57Wfs3f0GdGw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2478818-1454046693-9270.jpeg.jpg", 1 },
                    { 3, "https://i.ebayimg.com/00/s/MTYwMFgxMDAw/z/cagAAOSwZK1eMRhf/$_57.JPG?set_id=8800005007", 2 },
                    { 4, "https://i.pinimg.com/originals/cc/47/a5/cc47a507854dfe4ea145ebb4c9ae51c4.jpg", 2 },
                    { 5, "https://www.impawards.com/2010/posters/inception_xlg.jpg", 3 },
                    { 6, "https://images-na.ssl-images-amazon.com/images/I/81JRPAalYUL._AC_SL1481_.jpg", 3 },
                    { 7, "https://posterspy.com/wp-content/uploads/2018/11/CHRISDASHROB_PINEAPPLEEXPRESS-800x1125.jpg", 4 },
                    { 8, "https://www.joblo.com/assets/images/oldsite/posters/images/full/2008-pineapple_express-4.jpg", 4 },
                    { 9, "https://i0.wp.com/stallonezone.com/zone/2019/z122619stella_diehard.png", 5 },
                    { 10, "https://i.etsystatic.com/12573617/r/il/540a7d/1568659380/il_794xN.1568659380_oioz.jpg", 5 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "MovieImages",
                keyColumn: "PrimaryKey",
                keyValue: 10);
        }
    }
}
