let characters = document.getElementById("character-list");

fetch('https://swapi.dev/api/people/?page=1')
.then((response) => {
if (!response.ok) {
    throw new Error(`HTTP-fel Status: ${response.status}`);
} else {
return response.json();
}
})
.then((data) => {
    allResults = data.results;
    displayCharacter(allResults);
    console.log(allResults)
    
})
.catch((error) => {
    console.error("error: ", error);
})
    
function displayCharacter(arr) {
    characters.innerHTML = "";

arr.forEach((charInfo) => {


    
    const charName = document.createElement('h3');
     charName.setAttribute("class","characterName");
    const charHeight = document.createElement('p');
    charHeight.setAttribute("class","characterHeight");
    const charMass = document.createElement('p');
    charMass.setAttribute("class","characterMass")

    charName.innerText = `Name: ${charInfo.name}`;

    characters.appendChild(charName);
    
    
});    
}


