import Plot from 'react-plotly.js';

const LineGraph = () => {
    let xdata = [];
    for (let i = -20; i <= 20; i++) {
        xdata.push(i);
    }
    let ydata = [];
    for (let i = 0; i < 41; i++) {
        ydata.push(Math.round((Math.random() * 21) - 10));
    }
    var data = {
        x: xdata,
        y: ydata,
        type: 'scatter'
    };

    return (
        <div>
            <Plot
                data={[data]}
                layout={{ width: 320, height: 400 }}
            />
        </div>
    )
}

export default LineGraph;