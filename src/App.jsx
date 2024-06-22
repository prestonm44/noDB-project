import './App.css'


function App() {

  return (
    <section>
      <header
      className="App-Header">
        <article>
          <h1>Kansas City Chiefs</h1>
          <p>Here is a list of all the players on the Kansas City football team. As the owner of the franchise, you are responsible for adding or removing any players on the team. You can also edit player information, but we don't recommend that you do that...</p>
        </article>
        <img src='https://kscj.com/wp-content/uploads/2023/06/kansas-city-chiefs-logo-transparent.png'/>
      </header>
      {/* <body>
      function displayTeamInfo() {
        axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/KC?key=53ac94d7422e4a65b18e03b16aeb7418')
            .then( (response) => {
                let playerList = " ";
                for (const player of response.data) {
                    playerList += `<li>${player.Name},  ${player.Number}, ${player.Position}, ${player.College} </li>`;
                } 
                document.querySelector('#apiText').innerHTML = playerList          
            })
          }
      </body> */}
    </section>
  )
}

export default App
