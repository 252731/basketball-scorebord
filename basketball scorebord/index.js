
 let homeScoreBtn=document.getElementById("home-score-btn")
 let guestScoreBtn=document.getElementById("guest-score-btn")


 let count=0
function increaseHomeScoreOne() {
    count+=1
    homeScoreBtn.innerText=count
    console.log(count)
}
function increaseHomeScoreTwo() {
    count+=2
    homeScoreBtn.innerText=count
    console.log(count)
}
function increaseHomeScoreThree() {
    count+=3
    homeScoreBtn.innerText=count
    console.log(count)
}


let count2=0
function increaseHomeScoreOneR() {
    count2+=1
    guestScoreBtn.innerText=count2
    console.log(count2)
}

function increaseHomeScoreTwoR() {
    count2+=2
    guestScoreBtn.innerText=count2
    console.log(count2)
}
function increaseHomeScoreThreeR() {
    count2+=3
    guestScoreBtn.innerText=count2
    console.log(count2)
}
function reset (){
    guestScoreBtn.innerHTML=0
    homeScoreBtn.innerHTML=0
    localStorage.clear
    count=0

}