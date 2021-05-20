let inputSearch = document.getElementById("userInput");
let spinner = document.getElementById("spinner");
let factText = document.getElementById("fact");


getFactNumber = (event) => {
    if (event.key == "Enter") {
        let userinputValue = inputSearch.value
        if (userinputValue === "") {
            alert("Enter a number");
            return;
        }

        let url = "https://apis.ccbp.in/numbers-fact?number=" + userinputValue
        let options = {
            method: "GET",
        };
        spinner.classList.remove("d-none");
        factText.classList.add("d-none")
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                console.log(jsonData)
                spinner.classList.add("d-none");
                factText.classList.remove("d-none");
                factText.textContent = jsonData.fact
            })
    }

}
inputSearch.addEventListener("keydown", getFactNumber)
