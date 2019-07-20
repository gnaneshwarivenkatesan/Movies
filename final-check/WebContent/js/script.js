const movies = [

    {
        title: 'Avatar', boxOffice:
            '$2,345,655,456', active: 'Yes', dateOfLaunch: '15/07/2019', genre: 'Science Fiction', hasTeaser: 'Yes'
    },

    {
        title: 'The Avengers', boxOffice:
            '$1,654,765,234', active: 'Yes', dateOfLaunch: '16/08/2019', genre: 'Superhero', hasTeaser: 'No'
    },
    {
        title: 'Titanic', boxOffice:
            '$2,877,543,234', active: 'Yes', dateOfLaunch: '18/07/2019', genre: 'Romance', hasTeaser: 'No'
    },
    {
        title: 'Jurassic World', boxOffice:
            '$1,567,345,675', active: 'No', dateOfLaunch: '17/07/2019', genre: 'Science Fiction', hasTeaser: 'Yes'
    },
    {
        title: 'Avengers: End Game', boxOffice:
            '$2,750,456,789', active: 'Yes', dateOfLaunch: '15/07/2019', genre: 'Superhero', hasTeaser: 'Yes'
    }
];
let moviesFromStorage=localStorage.getItem('movies');
if(moviesFromStorage===null)
{
    localStorage.setItem("movies",JSON.stringify(movies));
}
moviesFromStorage = JSON.parse(moviesFromStorage);
const menuMovies = function (moviesFromStorage) {
    moviesFromStorage.forEach(function (movie) {
        let table = document.querySelector("#tab");
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = movie.title;
        let td2 = document.createElement('td');
        td2.textContent = movie.boxOffice;
        let td3 = document.createElement('td');
        td3.textContent = movie.active;
        let td4 = document.createElement('td');
        td4.textContent = movie.dateOfLaunch;
        let td5 = document.createElement('td');
        td5.textContent = movie.genre;
        let td6 = document.createElement('td');
        td6.textContent = movie.hasTeaser;
        let td7 = document.createElement('td');
        let a = document.createElement('a');
        a.href = "edit-movie.html?title=" + movie.title + "&boxOffice=" + movie.boxOffice + "&active=" + movie.active
            + "&dateOfLaunch=" + movie.dateOfLaunch + "&genre=" + movie.genre+ "&hasTeaser=" + movie.hasTeaser;
        a.textContent = "Edit";
        td7.appendChild(a);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        table.appendChild(tr);
    })
}
menuMovies(moviesFromStorage);
