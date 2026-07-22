import React from 'react';
import { players, ListofPlayers, Scorebelow70 } from './ListofPlayers';
import { IndianTeam, OddPlayers, EvenPlayers, IndianPlayersMerged, ListofIndianPlayers } from './IndianPlayers';

function App() {
    var flag = true; 

    if (flag === true) {
        return (
            <div>
                <h1>List of Players</h1>
                <ListofPlayers players={players} />
                <hr />
                <h1>List of Players having Scores Less than 70</h1>
                <Scorebelow70 players={players} />
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <h1>Indian Team</h1>
                    
                    <h2>Odd Players</h2>
                    {}
                    {OddPlayers(IndianTeam)}
                    <hr />
                    
                    <h2>Even Players</h2>
                    {EvenPlayers(IndianTeam)}
                </div>
                <hr />
                <div>
                    <h2>List of Indian Players Merged:</h2>
                    <ListofIndianPlayers IndianPlayers={IndianPlayersMerged} />
                </div>
            </div>
        );
    }
}

export default App;