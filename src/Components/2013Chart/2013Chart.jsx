import Chart from "react-google-charts";
import React, { useState } from 'react';


const OldChart = (props) => {
    function generateChartData(){
    console.log(props.games)

    let filteredGames = props.games.filter(game => game.year > 2013)
    console.log(filteredGames)

    let platforms = filteredGames.map(game => game.platform)
    console.log(platforms)

    let distinctPlatforms = [...new Set(platforms)]
    console.log(distinctPlatforms)

    let platformArrays = distinctPlatforms.map(platform => {

        let allGamesForPlatform = filteredGames.filter(game => game.platform == platform)
        let salesForPlatform = allGamesForPlatform.reduce((prev, next) => prev + next.globalSales, 0)

        return [platform, salesForPlatform, "silver"]
    })

    const data = [
        ["Platform", "Sales in Millions", { role: "style" }],
        ...platformArrays
      ];
      return data;
    }

    return ( 
        <div>
            <h3>Global Sales in Millions per Platform since 2013</h3>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />
        </div>
     );
}
 
export default OldChart;