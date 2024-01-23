// alert("Hello Popup!")
async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=2885ce09-b5da-4dcd-b03b-7927a0e2b96e&offset=0"
  )
    // .then(console.log);
    .then((data) => data.json())
    .then((data) => {
      //matches.src = data.primaryImage()//
      // if (data.status !="success")return; //agar data success na ho to hum return kar jaayenge
      const matches = data;
      const matchesList = data.data;
      console.log(matches);
      console.log(matchesList);
      let deev = document.getElementById("real");
      deev.innerHTML=("");
      
      matchesList.map((i) => {
        const { matchType, dateTimeGMT, venue, teamInfo, status, score } = i;
        const El = document.createElement("div")
        El.classList.add('Match');
        El.innerHTML += `<div id="Heading">${matchType} </div>
        <div> ${dateTimeGMT} </div>
        <hr>
        
        <div class="sub-heading">At <b>${venue}</b></div>
        <hr>
        
        <div class="dot-all">
        <span class="dot"><img src="${
          teamInfo[0].img === "https://h.cricapi.com/img/icon512.png"
            ? "icon.png"
            : teamInfo[0].img
        }" alt="team1 logo"></span>
          <span class="dot1">V</span>
          <span class="dot"><img src="${
            teamInfo[0].img === "https://h.cricapi.com/img/icon512.png"
              ? "icon.png"
              : teamInfo[1].img
          }" alt="team2 logo"></span>
        </div>

        <h2 class="h2">${status}</h2>
        <hr>
        <div class="teams1">
        <div>${teamInfo[0].name} : ${score[0].inning} </div>
        </div>

        <hr>
        
        <div class="teams2">
        <div>${teamInfo[1].name} ${score[1].inning ==="second innings" ? score[1].inning :"innings yet to start" }</div>
        </div> 
        <hr>;`;
        deev.appendChild(El);
      });
    });
}
getMatchData();
