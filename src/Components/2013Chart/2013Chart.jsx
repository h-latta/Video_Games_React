import Chart from "react-google-charts";
import React, { useState, useEffect } from 'react';

const OldChart = (props) => {
    const [ChartData, SetChartData] = useState([])
    const games = props.games
    useEffect(() => {
        let tempChartData = games && games.map((game) => {
            return [game.Platform, game.GlobalSales]
        });
        SetChartData(tempChartData)
    }, [games])
    return ( 
        <div>
            <Chart
            chartType="Table"
            data={[["Platform", "Global Sales"], ...ChartData]}
            width="100%"
            height="400px"
            legendToggle
            options={{legend: {position: 'bottom'}}}
            />
        </div>
     );
}
 
export default OldChart;