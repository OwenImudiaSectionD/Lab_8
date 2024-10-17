
// //This API was selected as i took inspiration from a youtube 
// video i watched to further educate myself in the world of API, 
// my exact approach is completely different from the youtuber to make mine
// more unique


const fetchData =()=> {
    const searchBar = document.getElementById("searchBar").value.toLowerCase();
    const spriteBar = document.getElementById("spriteBar").value.toLowerCase(); 
    const result = document.getElementById("result");

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchBar}`)
    .then(response=> response.json())

    .then(data => {
        
        // This prints the result  to the HTML
        result.textContent = data[spriteBar];//This takes the data from the API and sends to the HTML

    })
    .catch(error => {
        console.error(error);
        result.textContent = `Error: ${error.message}`; // Display error in the area if there was any incorrect input
    });
};

console.log(fetchData());


