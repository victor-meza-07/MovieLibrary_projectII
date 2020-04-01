var temporaryImage = "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";


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
function NavigateToLibraryView()
{
    let libraryView_html = GenerateLibraryViewHTML();
    DisplayView(libraryView_html);
}
function NavigateToDetailsView()
{
    let details_html = GenerateDetailsViewHTML();
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
function GenerateLibraryViewHTML()
{

}
function GenerateDetailsViewHTML()
{

}
async function GenerateHomeViewHtml()
{
    let homeViewHtml = ``;
    //start from the inside and work your way out.
    //in order:
        //Random Picker
        let randomPicker_html = GenerateRandomPcikerHTML();
        //Add Featured Conetent
        let featuredFilm_html = await GenerateFeaturedFilmHTML();
        //Add Navigation
        let navigation_html = GenerateNavigationHTML();
    
    homeViewHtml = `<div class="contentContainerStyle"><div class="homeContainer">${randomPicker_html}${featuredFilm_html}${navigation_html}</div></div>`;
    return homeViewHtml;
}


function GenerateTable_html(CollectionOfMovies, CollectionOfTableHead)
{
    let table_head = `<thead><tr>`;
    for(let i =0; i < CollectionOfTableHead.length; i++)
    {
        tablehead += `<th>${CollectionOfTableHead[i]}</th>`;
    }
    tablehead += `</tr></thead>`;


    let table_body = `<tbody>`;
    let rows = CollectionOfMovies.length;
    let columns = CollectionOfTableHead.length;
    for(let i = 0; i < rows; i++)
    {
        table_body += `<tr>`;
        for(let j = 0; j < columns; j++)
        {
            let property = CollectionOfTableHead[j]; // will probably need something to parse out those properties exactly.
            table_body += `<td>${CollectionOfMovies[i][property]}</td>`; // this line of code should access the specific property at n line. 
        }
        table_body += `</tr>`;
    }
    table_body += `</tbody>`;

    let full_html = `${table_head, table_body}`;
    return full_html;
}
function GenerateSearch_tableHTML(CollectionOfMovies)
{
    let tablehead = ["Title","Details"];

    let table_html = GenerateTable_html(CollectionOfMovies,tablehead);
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
async function GenerateFeaturedFilmHTML()
{
    let html = ``;
    let movie_obj = await GetMovieObject();
    let title = `<div class="featured-title-container"><h1 class="featured-title">${movie_obj.movie.title}</h1></div>`;
    html = `<div class="featured-container">`+
            `${title}`+
            `<img id="featured-img" class="featured-img" src="${movie_obj.ImageURL}">`+
            `<button id="featured-btn" type="button" class="btn btn-primary feautred-btn">See Featured Film Details</button></div>`;
    return html;
}
async function GetMovieObject()
{
    //TESTING//
    let sample_obj = await jQuery.get(`https://localhost:44325/api/movie`);
    let number = RandomInteger(0,2);
    console.log("Outside the function", sample_obj);
    let movieObject = {movie: sample_obj[number], ImageURL: temporaryImage}
    console.log(movieObject);
    
    return movieObject;
}
function CreateCollectionOfMovies()
{
    let MovieCollection = {Movies: [], Images: []};
    let movie_obj = GetMovieObject(id);
    MovieCollection.Movies.push(movie_obj);
    //Getting IDs
}
function GenerateRandomPcikerHTML()
{
    let randomCollection = [];
    randomCollection = GenerateRandomCollection(4);
    let title_html = `<div class="row"><div class="col-12"><div class="randompickHeader-container"><h1 class="randompickHeader">Random Picks</h1></div></div></div>`;
    let radnom1_html = `<div class="row"><div class="col-6"><div class="randomtitle-container"><p class="randomPickTitle">${randomCollection[0]}</p></div></div><div class="col-6"><div class="randomtitle-container"><p class="randomPickTitle">${randomCollection[1]}</p></div></div></div>`;
    let random2_html = `<div class="row"><div class="col-6"><div class="randomtitle-container"><p class="randomPickTitle">${randomCollection[2]}</p></div></div><div class="col-6"><div class="randomtitle-container"><p class="randomPickTitle">${randomCollection[3]}</p></div></div></div>`;
    let html = `<div class="randomPickContainer">${title_html}${radnom1_html}${random2_html}</div>`;
    return html;
}
function GenerateRandomCollection(NumberOfrandomPicks)
{
    //this is where we call an ajax get function;
    let randomCollection = [];
    for(let i = 0; i < NumberOfrandomPicks; i++)
    {
        //TODO:

        //this is where we pull the collection from Ajax. 
        //for testing
        randomCollection[i] = i;
    }

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