let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseHomeScore(hechemome) {
    homeScore += hechemome
    homeScoreEl.textContent = homeScore 
}

function increaseGuestScore(gesteome) {
    guestScore += gesteome
    guestScoreEl.textContent = guestScore
}

function resetScore() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
} 

