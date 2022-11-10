let film='';
const LoadFilms = async () => {
    try {
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ea1ad1777db9765f23918ba9264987e2&language=es-MX");
        console.log("hola");
        if (respuesta.status === 401 || respuesta.status === 404) {
            console.log("Error to load data");
        }
        else if (respuesta.status === 200) {
            let npelicula = 0;
            const datos = await respuesta.json();
            let peliculas = '';
            datos.results.forEach(pelicula => {
                npelicula++;
                let string = JSON.stringify(pelicula.title);
                peliculas += `
                <div class="col-xl-3 col-lg-4 col-md-6 py-2" id="colCard">
            <div class="card border-light">
                <img class="d-flex justify-content-center mx-auto" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="Spiderman prueba" width="270">
                <div class="card-body text-center">
                    <h4 class="card-title text-center">${pelicula.title}</h4>
                    
                    <button type="button" onclick="addFav(${pelicula.id})" id="btnAnadir${npelicula}" class="btn btn-warning">Añadir a favoritos</button>
                    </div>
            </div>
        </div>
                `;
            });
            document.getElementById('row').innerHTML = peliculas;
        }
    } catch (error) {
        console.log(error);
    }
}

async function addFav(idpelicula) {
    const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ea1ad1777db9765f23918ba9264987e2&language=es-MX");

    const datos = await respuesta.json();



    datos.results.forEach(pelicula => {
        if (pelicula.id === idpelicula) {

            film += `
                <div class="col-xl-4 col-lg-6 col-md-12 py-2" id="colCard">
                    <div class="card border-light">
                        <img class="d-flex justify-content-center mx-auto" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="Spiderman prueba" width="270">
                        <div class="card-body text-center">
                            <h4 class="card-title text-center">${pelicula.title}</h4>
                            
                        </div>
                    </div>
                </div>
            `;
        }
    })

    document.getElementById('rowCard').innerHTML = film;
}
LoadFilms();
