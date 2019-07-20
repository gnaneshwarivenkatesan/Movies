var url_string = window.location.href;
var url = new URL(url_string);
let title = url.searchParams.get('title');
let boxOffice = url.searchParams.get('boxOffice');
let active = url.searchParams.get('active');
if(active=="yes")
    document.getElementById('activeyes').checked = true;
else
    document.getElementById('activeno').checked = true;

let dateOfLaunch = url.searchParams.get('dateOfLaunch');
let genre = url.searchParams.get('genre');
let hasTeaser = url.searchParams.get('hasTeaser');
if (hasTeaser==="yes")
    document.getElementById("hasTeaser").checked = true;
else
    document.getElementById("hasTeaser").checked = false;

let titleText = document.querySelector("#title");
let boxOfficeText = document.querySelector("#boxOffice");
let activeText1 = document.querySelector("#activeyes");
let activeText2 = document.querySelector("#activeno");
let dateOfLaunchText = document.querySelector("#dateOfLaunch");
let genreText = document.querySelector("#genre");
let hasTeaserText = document.querySelector("#hasTeaser");
titleText.setAttribute('value', title);
boxOfficeText.setAttribute('value', boxOffice);
dateOfLaunchText.setAttribute('value', dateOfLaunch);
genreText.setAttribute('value', genre);
hasTeaserText.setAttribute('value', hasTeaser);
document.querySelector('#update').addEventListener('click', function () {
    var title = titleText.value;
    var boxOffice = boxOfficeText.value;
    //var active = activeText.value;
    var dateOfLaunch = dateOfLaunchText.value;
    var genre = genreText.value;
    var hasTeaser = hasTeaserText.value;
    var free;
    if(hasTeaserText.checked){
        free='yes';
    }
    else{
        free='no';
    }
    var active;
    if(activeText1.checked)
    {
        active=activeText1.value;
    }
    if(activeText2.checked)
    {
        active=activeText2.value;
    }
    let movieString=localStorage.getItem('movies');
    let movies=JSON.parse(movieString);
    let movie = movies.find(function (movie) {
        return movie.title === title;
    })

    movie.boxOffice = boxOffice;
    movie.active = active;
    movie.dateOfLaunch = dateOfLaunch;
    movie.genre= genre;
   movie.hasTeaser = hasTeaser;
    localStorage.removeItem('movies');
    localStorage.setItem('movies',JSON.stringify(movies));
    window.location="file://D:/final-check/WebContent/edit-movie-status.html";
    
    menuMovies(movies);
})








