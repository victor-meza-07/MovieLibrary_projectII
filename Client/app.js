var temporaryImage = "https://www.istockphoto.com/resources/images/PhotoFTLP/Essential-images-we-love-1055891344.jpg";


(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value
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


function NavigateToHomeView()
{
    let homeView_html = GenerateHomeViewHtml();
    DisplayView(homeView_html);
}
function NavigateToSearchView()
{

}
function NavigateToLibraryView()
{

}
/*
TODO:
Add: NavigateTo Search/Library View and supporting generate methods
Add: .Get//Retrieve .Post//Add .Put//Edit and .remove//Delete methods
*/



function GenerateHomeViewHtml()
{
    let homeViewHtml = ``;
    //start from the inside and work your way out.
    //in order:
        //Random Picker
        let randomPicker_html = GenerateRandomPcikerHTML();
        //Add Featured Conetent
        let featuredFilm_html = GenerateFeaturedFilmHTML();
        //Add Navigation
        let navigation_html = GenerateNavigationHTML();
    
    homeViewHtml = `<div class="contentContainerStyle"><div class="homeContainer">${randomPicker_html}${featuredFilm_html}${navigation_html}</div></div>`;
    return homeViewHtml;
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
function GenerateFeaturedFilmHTML()
{
    let html = ``;
    let title = `<div class="featured-title-container"><h1 class="featured-title">Featured Film</h1></div>`;
    let movie_obj = GetMovieObject();
    html = `<div class="featured-container">`+
            `${title}`+
            `<img id="featured-img" class="featured-img" src="${movie_obj.ImageURL}">`+
            `<button id="featured-btn" type="button" class="btn btn-primary feautred-btn">See Featured Film Details</button></div>`;
    return html;
}
function GetMovieObject()
{
    let movieObject = {ImageURL: temporaryImage};
    //TODO:
    //.get jquery function to be exact.
    //this is where we write some more ajax request functions;
    return movieObject;
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