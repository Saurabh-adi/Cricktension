// alert("Hello Popup!")

async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=34feb5b1-233f-475f-bc28-1fadd83d33d9&offset=0"
  )
    // .then(console.log);
    .then((data) => data.json())
    .then((data) => {
      //matches.src = data.primaryImage()//
      if (data.status != "success") return; //agar data success na ho to hum return kar jaayenge
      const matches = data;
      const matchesList = data.data;
      console.log(matches);
      console.log(matchesList);
      let deev = document.getElementById("real");
      deev.innerHTML = "";

      matchesList.map((i) => {
        const { matchType, dateTimeGMT, venue, teamInfo, status, score, date } =
          i;
        const El = document.createElement("div");
        El.classList.add("Match");
        El.innerHTML += `<div id="Heading">${matchType} </div>
        <div class="date-time"> ${dateTimeGMT} </div>
        <hr>
        
        <div class="sub-heading">At <b>${venue}</b></div>
        
        <hr>
        
        <div class="dot-all" >
        <span class="dot"><img src="${
          teamInfo[0].img === "https://h.cricapi.com/img/icon512.png"
            ? "icon.png"
            : teamInfo[0].img
        }" alt="team1 logo"></span>
        
          <span id="dot1">V</span>

          <span class="dot"><img src="${
            teamInfo[0].img === "https://h.cricapi.com/img/icon512.png"
              ? "icon.png"
              : teamInfo[1].img
          }" alt="team2 logo"></span>
        </div>

        <h2 class="h2">${status}</h2>
        <hr>
        <div class="teams1">
        <div>${teamInfo[0].name} : ${score[0].r}/${score[0].w} &nbsp o: ${
          score[0].o
        }- ${score[0].inning} </div>
        </div>

        <hr>
        
        <div class="teams2">
        <div>${teamInfo[1].name} : ${score[1].r}/${score[1].w} &nbsp o: ${
          score[1].o
        }- ${score[1].inning}</div>
        </div> 
        <hr>
        <div class="button" style="width: -webkit-fill-available;">
          
        <button class="full-scorecard" onclick="location.href='https://cricketdata.org/widgets-for-your-website-blog/'" target="_blank">Full Scorecard</button>
          
        </div>
        <div>
          ${date}: ${teamInfo[0].name} vs ${teamInfo[1].name}
          <button id="btn">Set Notification</button>
        </div>`;
        deev.appendChild(El);
      });
    });
}
getMatchData();
