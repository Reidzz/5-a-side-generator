const playerList = []
const submitBtn = document.querySelector("#submit")
const formInput = document.querySelector("#player")
const form = document.querySelector(".player-form")
const teamForm = document.querySelector(".team")
const teamContainerLeft = document.querySelector(".left")
const teamContainerRight = document.querySelector(".right")
const formMessage = document.querySelector(".form-message")
const warning = `<p class="warning">Invalid Input</p>`
const reshuffleBtn = document.querySelector(".btn-container")

submitBtn.addEventListener("click", addPlayer) // Event listener that calls the addPlayer function

function addPlayer() {
    if (formInput.value === "") {
        formMessage.innerHTML = warning
        setTimeout(clearMessage, 3000) // The clearMessage function will run after 3 seconds pass
        return false
    }
    userInput = document.getElementById("player").value
    totalPlayers = playerList.push(userInput) // .push() method stores user input in the array and can return the array length
    form.reset()
    if (totalPlayers >= 10) {
        submitBtn.removeEventListener("click", addPlayer) // Event listener removed to stop more players being added
        teamForm.classList.remove("hidden")
        reshuffleBtn.classList.remove("hidden")
        let newPlayerList = arrayShuffle(playerList) // The arrayShuffle function is called and stored in a variable
        displayTeams() // The displayTeams function is called
        reshuffleBtn.addEventListener("click", function() { // Event listener that calls the previous functions
            arrayShuffle(newPlayerList)
            clearTeams()
            displayTeams(newPlayerList) // The newPlayerList variable is passed into these functions so they can run again
        })
    }
}

function arrayShuffle(arr) { // Function that shuffles the array order
    let newPos
    let temp
    for (i = playerList.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1))
        temp = playerList[i]
        playerList[i] = playerList[newPos]
        playerList[newPos] = temp
    }
    return arr
}

function displayTeams() { // Function that splits the players into 2 teams of 5 players then displays the teams
    for (i = 0; i < playerList.length; i++) {
        let li = document.createElement("li")
        li.classList.add("player-name")
        li.innerText = `${playerList[i]}`
        teamContainerLeft.appendChild(li)
        if (i === 4) {
            for (i = 5; i < playerList.length; i++) {
                let li = document.createElement("li")
                li.classList.add("player-name")
                li.innerText = `${playerList[i]}`
                teamContainerRight.appendChild(li)
            }
        }
    }
}

function clearMessage() { // Clears form warning message
    formMessage.innerHTML = ""
}

function clearTeams() { // Clears the teams
    teamContainerLeft.innerHTML = ""
    teamContainerRight.innerHTML = ""
}