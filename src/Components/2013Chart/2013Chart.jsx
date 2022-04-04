import Chart from "react-google-charts";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const OldChart = (props) => {

    const [Games, SetGames] = useState([])
    const [ChartData, SetChartData] = useState([])

    async function getAllGames(){
      const search = await axios.get(`https://localhost:7260/api/games`)
      SetGames(search.VideoGames)
    }
    
    let tempChartData = Games && Games.map((game) => {
        return [game.Platform, game.GlobalSales]
    });
    SetChartData(tempChartData)

    useEffect(() => {
        getAllGames()
    }, [Games])


    return ( 
        <div>
            <Chart
            chartType="Table"
            data={[["Platform", "Global Sales"], [ChartData.Platform, ChartData.GlobalSales]]}
            width="100%"
            height="400px"
            legendToggle
            options={{legend: {position: 'bottom'}}}
            />
        </div>
     );
}
 
export default OldChart;