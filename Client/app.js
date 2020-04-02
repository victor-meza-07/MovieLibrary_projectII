var temporaryImage = "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
var apiUrl = "https://localhost:44325/api/movie";

(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this ["Genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }
    //On Document ready, wer are going to call Navigate to Home View;
    $(NavigateToHomeView());
    $('#my-form').submit( processForm );
})(jQuery);


async function NavigateToHomeView()
{
    let homeView_html = await GenerateHomeViewHtml();
    DisplayView(homeView_html);
}
function NavigateToSearchView()
{
    let searchView_html = GenerateSearchViewHtml();
    DisplayView(searchView_html);

}
async function NavigateToLibraryView()
{
    let libraryView_html = await GenerateLibraryViewHTML();
    DisplayView(libraryView_html);
}
async function NavigateToDetailsView(MovieId)
{
    let details_html = await GenerateDetailsViewHTML(MovieId);
    DisplayView(details_html);
}
/*
TODO:
Add: NavigateTo Search/Library View and supporting generate methods
Add: .Get//Retrieve .Post//Add .Put//Edit and .remove//Delete methods
*/


function GenerateSearchViewHtml()
{
    let form_html = GenerateSearch_FormHtml();
    let table_html = GenerateSearch_tableHTML();
    let div1_html = `<div class="search-container">${form_html}</div>`;
    let div2_html = ` <div class="custom-table-container">${table_html}</div>`;


    let html = ``;
    return html;
}
async function GenerateLibraryViewHTML()
{
    let navigation_html = GenerateNavigationHTML();
    let movieCollection = await jQuery.get(apiUrl); // get the collection
    let table_html = await GenerateSearch_tableHTML(movieCollection);//generate the table html
    let container_html = `<div class="contentContainerStyle"><div class="homeContainer"><div class="custom-table-container">`+
    table_html+
    `</div></div></div>`+navigation_html;
    
    return container_html;
}
async function GenerateDetailsViewHTML(id)
{
    let movie = await GetMovieObjectById(id);
    let card_img_html = `<div class="customCard-image">`+
                        `<img id="MovieImage" class="card-top" alt="An Image" src="${movie.images[1].imageUrl}">`+
                        `</div>`;
    let card_body_html = `<div class="card-body">`+
                        `<div class="card-title">`+
                        `<h5 id="MovieTitle">${movie.movie.title}</h5>`+
                        `</div>`+
                        `<h5 id="MovieDirector">${movie.movie.director}</h3>`+
                        `<h5 id="MovieGenre">${movie.movie.genre}</h3>`+
                        `<p>Truncated Synopsis?</p>`+
                        `</div>`;
    let card_footer_html = `<div class="card-footer">`+
    `<button type="button" class="btn btn-danger customCard-button" onclick="THEFUNCTIONGOESHERE()">Delete</button>`+
    `</div>`;
    let navigation_html = GenerateNavigationHTML();

    let card_html = `<div class="row">`+
    `<div class="contentContainerStyle DiplsayMovieCard-container">`+
    `<div class="card customCard">`+
    card_img_html+
    card_body_html+
    card_footer_html+
    `</div>`+
    navigation_html+
    `</div>`+
    `</div>`;

    return card_html;
}
async function GenerateHomeViewHtml()
{
    let homeViewHtml = ``;
    //start from the inside and work your way out.
    //in order:
        //Random Picker
        let randomPicker_html = await GenerateRandomPcikerHTML();
        //Add Featured Conetent
        let featuredFilm_html = await GenerateFeaturedFilmHTML();
        //Add Navigation
        let navigation_html = GenerateNavigationHTML();
    
    homeViewHtml = `<div class="contentContainerStyle"><div class="homeContainer">${randomPicker_html}${featuredFilm_html}${navigation_html}</div></div>`;
    return homeViewHtml;
}


function GenerateTable_html(CollectionOfMovies)
{
    let table_head = `<thead><tr>`+
    `<th>Title</th>`+
    `<th>Genre</th>`+
    `<th style="visibility: hidden;">Details</th>`+
    `</tr></thead>`;


    let table_body = `<tbody>`;
    let rows = CollectionOfMovies.length;
    let columns = 3;
    for(let i = 0; i < rows; i++)
    {
        table_body += `<tr>`;
        for(let j = 0; j < columns; j++)
        {
            switch(j)
            {
                case 0:
                    table_body += `<td>${CollectionOfMovies[i].title}</td>`;
                    break;
                case 1:
                    table_body += `<td>${CollectionOfMovies[i].genre}</td>`;
                    break;
                case 2:
                    table_body += `<td>${Generate_library_button_html(CollectionOfMovies[i].movieId)}</td>`;
                    break;
            } 
        }
        table_body += `</tr>`;
    }
    table_body += `</tbody>`;

    let full_html = table_head + table_body;
    return full_html;
}
async function GenerateSearch_tableHTML(CollectionOfMovies)
{
    let table_html = GenerateTable_html(CollectionOfMovies);
    let custom_table_html = `<table class="table-dark table-hover custom-table-style">${table_html}</div>`;
    let final_html = `<div class="row justify-content-center">${custom_table_html}</div>`;
    return final_html;
}
function GenerateSearch_FormHtml()
{
    let div1_html = `<div class="row justify-content-center"><label class="search-title">Search For A Movie</label></div>`;
    let div2_html = `<div class="search-box-group">`+
    `<input type="search" class="search-box-style" placeholder="Search By Title" id="MovieTitleSearch">`+
    `<br>`+
    `<input type="search" class="search-box-style" placeholder="Search By Genre" id="MovieTitleGenre">`+
    `<br>`+
    `<input type="search" class="search-box-style" placeholder="Search By Director" id="MovieTitleDirector">`+
    `<br>`+
    `<button type="button" class="btn btn-danger search-group-btn" onclick="ADDFUNCTIONHERE()"><i class="fa fa-search" aria-hidden="true"></i> Search</button></div>`;
    let html = `<form>${div1_html, div2_html}</form>`;
    return html;
}
function GenerateNavigationHTML()
{
    let html = `<div class="navigation-container">`+
                `<div class="row justify-content-center">`+
                `<div class="btn-group navigation-btn-group">`+
                `<div class="col-4">`+
                `<button class="navigation-btn" onclick="NavigateToHomeView()"><i class="fa">&#xf015;</i></button>`+
                `</div>`+
                `<div class="col-4">`+
                `<button class="navigation-btn" onclick="NavigateToSearchView()"><i class="fa fa-search" aria-hidden="true"></i></button>`+
                `</div>`+
                `<div class="col-4">`+
                `<button class="navigation-btn" onclick="NavigateToLibraryView()"><i class="fa fa-list" aria-hidden="true"></i></button>`+
                `</div></div></div></div>`;
    return html;
}
function Generate_library_button_html(id)
{
    let html = `<div class="dropdown">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
    </button>
    <div class="dropdown-menu">
      <button class="dropdown-item btn btn-warning" onclick="EDITFNGOESHERE(${id})" type="button">Edit</button>
      <button class="dropdown-item btn btn-warning" onclick="NavigateToDetailsView(${id})" type="button">Details</button>
      <button class="dropdown-item btn btn-danger" onclick="DELETEFNGOESHERE(${id})" type="button">Delete</button>
    </div>
  </div>`;
    return html; 
} 
async function GenerateFeaturedFilmHTML()
{
    let html = ``;
    let movie_obj = await GetMovieObject();
    let title = `<div class="featured-title-container"><h1 class="featured-title">${movie_obj.movie.title}</h1></div>`;
    html = `<div class="featured-container">`+
            `${title}`+
            `<img id="featured-img" class="featured-img" src="${movie_obj.Images[0].imageUrl}">`+
            `<button id="featured-btn" type="button" class="btn btn-primary feautred-btn" onclick="NavigateToDetailsView(${movie_obj.movie.movieId})">See Featured Film Details</button></div>`;
    return html;
}
async function GetMovieObject()
{
    //TESTING//
    let movies_obj = await jQuery.get(`https://localhost:44325/api/movie`);
    
    let movieIndex = RandomInteger(1,movies_obj.length);
    
    let images_obj = await jQuery.get(`https://localhost:44325/api/movie/movieid/${movieIndex}`);
    
    console.log("movies_obj", movies_obj);
    console.log("images_obj", images_obj);
    
    let movie_obj = {movie: movies_obj[movieIndex - 1], Images: images_obj}
    console.log(movie_obj);
    
    return movie_obj;
}
async function GetMovieObjectById(id)
{
    let fullUrl = apiUrl+"/"+id;
    let imagesUrl = apiUrl+`/movieid/${id}`;
    let movies_obj = await jQuery.get(fullUrl);
    let images_obj = await jQuery.get(imagesUrl);

    let movie_obj = {movie: movies_obj, images: images_obj}
    console.log(movie_obj);
    return movie_obj;
}


function CreateCollectionOfMovies()
{
    let MovieCollection = {Movies: [], Images: []};
    let movie_obj = GetMovieObject(id);
    MovieCollection.Movies.push(movie_obj);
    //Getting IDs
}
async function GenerateRandomPcikerHTML()
{
    let randomCollection = [];
    randomCollection = await GenerateRandomCollection();
    let title_html = `<div class="row"><div class="col-12"><div class="randompickHeader-container"><h1 class="randompickHeader">Daily Picks</h1></div></div></div>`;
    let radnom1_html = `<div class="row"><div class="col-6"><button type="button" class="random-pick-button" onclick="NavigateToDetailsView(${randomCollection[0].movieId})">${randomCollection[0].title}</button></div><div class="col-6"><button type="button" class="random-pick-button" onclick="NavigateToDetailsView(${randomCollection[1].movieId})">${randomCollection[1].title}</button></div></div>`;
    let random2_html = `<div class="row"><div class="col-6"><button type="button" class="random-pick-button" onclick="NavigateToDetailsView(${randomCollection[2].movieId})">${randomCollection[2].title}</button></div><div class="col-6"><button type="button" class="random-pick-button" onclick="NavigateToDetailsView(${randomCollection[3].movieId})">${randomCollection[3].title}</button></div></div>`;
    let html = `<div class="randomPickContainer">${title_html}${radnom1_html}${random2_html}</div>`;
    return html;
}
async function GenerateRandomCollection()
{
    //this is where we call an ajax get function;
    let randomCollection = await jQuery.get(apiUrl);

    return randomCollection;
}

function DisplayView(html)
{
    document.getElementById("dynamicContent").innerHTML=html;
}

/**
 * @param {Number} min 
 * @param {Number} max
 * @returns {Number} Returns a random number between min (inclusive) and max (exclusive) 
 */
function RandomInteger(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DeleteMethod(){
    movieId = $("#Movieid").val();
    $.ajax({
        url: "https://localhost:44325/api/movie/" + movieId,
        method: "DELETE"
    })
}
function GetMovieFromTitle(){
    title=$("#title").val();
    $.ajax({
        url:"https://localhost:44325/api/movie/"+ title,
        method:"GetMovieFromTitle"

    })

}





