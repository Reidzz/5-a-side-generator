const teamList = []
const submitBtn = document.querySelector("#submit")
const formInput = document.querySelector("#team")
const form = document.querySelector(".team-form")
const teamContainerLeft = document.querySelector(".left")
const teamContainerRight = document.querySelector(".right")

submitBtn.addEventListener("click", addTeam)

function addTeam() {
    if (formInput.value === "") {
        /*formMessage.innerHTML = warning
        setTimeout(clearMessage, 3000)*/
        return false
    }
    userInput = document.getElementById("team").value
    totalTeams = teamList.push(userInput) // .push() method can return the array length
    /*form.reset()*/
    if (totalTeams >= 10) {
        submitBtn.removeEventListener("click", addTeam)
        displayTeams()
    }
    console.log(userInput)
    /*console.log(teamList)*/
    /*console.log(totalTeams)*/
}

function displayTeams() {
    for (i = 0; i < teamList.length; i++) {
        let li = document.createElement("li")
        li.innerText = `${teamList[i]}versus`
        teamContainerLeft.appendChild(li)
        if (i === 4) {
            for (i = 5; i < teamList.length; i++) {
                let li = document.createElement("li")
                li.innerText = `${teamList[i]}`
                teamContainerRight.appendChild(li)
            }
            break
        }
        console.log(teamList)
    }
}

// When the list reaches 5(4) we want the the remaining to be split into a column beside it