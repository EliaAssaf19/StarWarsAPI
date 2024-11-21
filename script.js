const characters = document.querySelector(".character-list");

fetch('https://swapi.dev/api/people/?page=1')
.then((response) => {
if (!response.ok) {
    throw new Error(`HTTP-fel Status: ${response.status}`);
} else {
return response.json();
}
})
.then((data) => {
    console.log("data ", data)

    for (let i = 0; i < data.results.length; i++) {

        const characterList = document.createElement("li")
        characterList.innerText = data.results[0].name;
        characters.appendChild(characterList)
    }
})

.catch((error) => {
    console.error("error: ", error);
})
