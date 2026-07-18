const inputmov = document.getElementById("search");
const searchBtn = document.getElementById("btn");
// querySelector use kiya taaki seedhe element mil jaye (array ka jhanjhat khatam)
const cardsContainer = document.querySelector(".cards"); 

const apiKey = "97aee52a";

searchBtn.addEventListener("click", () => {
  const moviename = inputmov.value.trim(); // Sahi variable use kiya

  if (moviename === "") {
    alert("Please enter a movie name");
    return;
  }

  getMovie(moviename);
});

// API Call karne wala function
async function getMovie(title) {
  try {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    const response = await fetch(url);
    const data = await response.json(); // Await lagaya

    console.log(data);

    // OMDb mein Response ka 'R' capital hota hai aur wo string "False" deta hai
    if (data.Response === "False") {
      cardsContainer.innerHTML = `<p>Movie not found with this name</p>`;
      return;
    }

    // displayMovies ko try block ke andar hi call kiya (taaki data ka access mile)
    // Aur Search ka 'S' capital kiya
    displayMovies(data.Search);

  } catch (error) {
    console.log("API Fetch Error:", error);
  }
}

// Cards screen par dikhane wala function (isme async ki zaroorat nahi hai)
function displayMovies(movilist) {
  try {
    cardsContainer.innerHTML = ""; // innerHTML capital kiya

    movilist.forEach(movie => {
      const moviCard = `
        <div class="movie-card"> <img src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
          <p>Year: ${movie.Year}</p>
          <button class="watchlist-btn">Add to Watchlist ❤️</button>
        </div>
      `;

      cardsContainer.innerHTML += moviCard; // innerHTML capital kiya
    });
  } catch (error) {
    console.log("its a movicard error", error); // Comma lagaya (Syntax error fixed!)
  }
}


