const movies = [
  {
    title: "Game of Thrones S02 (2011)",
    description:
      "The war for the Iron Throne intensifies as five kings claim their right to rule the land. The Night's Watch discovers something deadly beyond the Wall...",
    image: "https://i.imgur.com/nvZ1B2n.jpeg",
    links: [
      "4K UHD GOT S02E01 MUL",
      "4K UHD GOT S02E02 MUL",
      "4K UHD GOT S02E03 MUL",
      "4K UHD GOT S02E04 MUL",
      "4K UHD GOT S02E05 MUL",
      "4K UHD GOT S02E06 MUL",
      "4K UHD GOT S02E07 MUL",
      "4K UHD GOT S02E08 MUL",
      "4K UHD GOT S02E09 MUL",
      "4K UHD GOT S02E10 MUL",
    ],
  },
  {
    title: "Unknown Movie",
    description: "", // Empty on purpose
    image: "https://via.placeholder.com/180x260.png?text=No+Image",
    links: ["Download Link 1", "Download Link 2"],
  },
];

const moviesContainer = document.getElementById("moviesContainer");
const searchInput = document.getElementById("searchInput");
const movieModal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const downloadLinks = document.getElementById("downloadLinks");

function renderMovies(filteredMovies) {
  moviesContainer.innerHTML = "";

  filteredMovies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title ?? "Movie"}" />
      <h3>${movie.title ?? "Untitled Movie"}</h3>
      <p>${movie.description || "No description available."}</p>
    `;

    card.addEventListener("click", () => openModal(movie));
    moviesContainer.appendChild(card);
  });
}

function openModal(movie) {
  modalTitle.textContent = movie.title ?? "Untitled Movie";
  modalDescription.textContent = movie.description || "No description available.";
  downloadLinks.innerHTML = "";

  movie.links.forEach((link) => {
    const button = document.createElement("button");
    button.textContent = link;
    downloadLinks.appendChild(button);
  });

  movieModal.style.display = "block";
}

function closeModal() {
  movieModal.style.display = "none";
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = movies.filter((movie) =>
    (movie.title || "").toLowerCase().includes(value)
  );
  renderMovies(filtered);
});

renderMovies(movies);
