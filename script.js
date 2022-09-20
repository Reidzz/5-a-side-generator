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

submitBtn.addEventListener("click", addPlayer)

function addPlayer() {
    if (formInput.value === "") {
        formMessage.innerHTML = warning
        setTimeout(clearMessage, 3000)
        return false
    }
    userInput = document.getElementById("player").value
    totalPlayers = playerList.push(userInput)
    form.reset()
    if (totalPlayers >= 10) {
        submitBtn.removeEventListener("click", addPlayer)
        teamForm.classList.remove("hidden")
        reshuffleBtn.classList.remove("hidden")
        let newPlayerList = arrayShuffle(playerList)
        displayTeams()
        reshuffleBtn.addEventListener("click", function() {
            arrayShuffle(newPlayerList)
            clearTeams()
            displayTeams(newPlayerList)
        })
    }
}

function arrayShuffle(arr) {
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

function displayTeams() {
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

function clearMessage() {
    formMessage.innerHTML = ""
}

function clearTeams() {
    teamContainerLeft.innerHTML = ""
    teamContainerRight.innerHTML = ""
}