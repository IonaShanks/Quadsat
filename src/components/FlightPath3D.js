import Plot from 'react-plotly.js';
import Dataset from '../datasets/dataset.json'

const FlightPath3D = () => {
    var x = [];
    var y = [];
    var z = [];
    var c = [];

    for (let i = 0; i < Dataset.measurements.length; i++) {
        x.push(Dataset.measurements[i].longitude)
    }
    for (let i = 0; i < Dataset.measurements.length; i++) {
        y.push(Dataset.measurements[i].latitude)
    }
    for (let i = 0; i < Dataset.measurements.length; i++) {
        z.push(Dataset.measurements[i].altitude)
    }

    for (let i = 0; i < Dataset.measurements.length; i++) {
        c.push(i)
    }

    return (
        <div>
            {<Plot
                data={[{
                    type: 'scatter3d',
                    mode: 'lines+markers',
                    x: x,
                    y: y,
                    z: z,
                    line: {
                        width: 6,
                        color: c,
                        colorscale: "Viridis"
                    },
                    marker: {
                        size: 3.5,
                        color: c,
                        colorscale: "Greens",
                        cmin: -20,
                        cmax: 50
                    }
                },
                ]}
                layout={{ width: 400, height: 400, title: 'Flight Path' }}
            />}
        </div>

    )
}

export default FlightPath3D;