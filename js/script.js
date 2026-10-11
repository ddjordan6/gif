const apiKey = "jLXbQcabJPs9HEIqTydDBqO4QKT8q5rt";

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif");
const searchInput = document.querySelector("#search-input");

fetchButton.addEventListener("click", async function () {
    const searchTerm = searchInput.value || "funny";

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=8&rating=g`;

    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        const images = data.data.map(function (gif) {
            return gif.images.original.url;
        });

        console.log(images);

        gifContainer.innerHTML = "";

        images.forEach(function (imageUrl) {
            gifContainer.innerHTML += `
                <img src="${imageUrl}" class="col-3 mb-3" alt="Giphy GIF">
            `;
        });
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        gifContainer.innerHTML = "<p>Sorry, there was an error loading the GIFs.</p>";
    }
});
