const teamList = []
/*let i = 0*/
/*const totalTeams = teamList.length*/ // Why does this variable not work unless it is called in the function?

const submitBtn = document.querySelector("#submit")
const form = document.querySelector(".team-form")
const messageContainer = document.querySelector(".team-list")

submitBtn.addEventListener("click", addTeam)

function addTeam() {
    userInput = document.getElementById("team").value
    totalTeams = teamList.push(userInput) // .push() method can return the array length
    /*form.reset()*/
    /*teamList[i] = document.getElementById("team").value
    i++
    form.reset()*/
    /*const totalTeams = teamList.length*/
    if (totalTeams >= 10) {
        submitBtn.removeEventListener("click", addTeam)
        displayTeams()
    }
    console.log(userInput)
    console.log(teamList)
    /*console.log(totalTeams)*/
}

function displayTeams() {
    teamList.forEach((item) => {
        let li = document.createElement("li")
        li.innerText = item
        messageContainer.appendChild(li)
    })
}

// When the list reaches 5(4) we want the the remaining to be split into a column beside it