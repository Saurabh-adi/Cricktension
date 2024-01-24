async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=34feb5b1-233f-475f-bc28-1fadd83d33d9&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      const match = data;
      const MatchesList = data.data;
      console.log(match);
      console.log(MatchesList);
      MatchesList.map((i) => {
        const { teamInfo, status } = i;
        const notificationMessage = `${teamInfo[0].name} vs ${teamInfo[1].name} ${status}`;

        const button = document.querySelector("Button");
        button.addEventListener("click", () => {
          Notification.requestPermission().then((perm) => {
            if (perm === "granted") {
              const notification = new Notification("Cricket Live Scores", {
                body: notificationMessage,
                data: { matchesList: "store" },
                icon: "icon.png",
              });
              notification.addEventListener("error", (e) => {
                alert("error");
              });
              setTimeout(()=>{
                notification.close();
              },5000)
            }
          });
        });
      });
    });
}
getMatchData();
