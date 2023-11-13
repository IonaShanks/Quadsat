import Plot from 'react-plotly.js';
import Dataset from '../datasets/dataset.json'

const FlightPath2D = () => {

    var x = [];
    var y = [];

    for (let i = 0; i < Dataset.measurements.length; i++) {
        x.push(Dataset.measurements[i].azimuth)
    }
    for (let i = 0; i < Dataset.measurements.length; i++) {
        y.push(Dataset.measurements[i].elevation)
    }

    var data = {
        x: x,
        y: y,
        type: 'scatter'
    };

    return (
        <div class="">
            <Plot
                data={[data]}
                layout={{ width: 320, height: 400, title: "Flight Path 2D" }}
            />
        </div>
    )
}

export default FlightPath2D;