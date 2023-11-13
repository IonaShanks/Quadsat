import './App.css';
import SidePanel from './components/SidePanel';
import MissionInfoCard from './components/MissionInfoCard';
import RationaleTextBox from './components/RationaleTextBox';
import MissionTable from './components/MissionTable';
import MeasurementMenu from './components/MeaurementMenu';
import LineGraph from './components/LineGraph';
import FlightPath3D from './components/FlightPath3D';
import FlightPath2D from './components/FlightPath2D';

function App() {
  return (
    <div>
      <SidePanel />
      <div className="App">

        <div className="flex flex-row flex-wrap">
          <div>
            <MissionInfoCard />
          </div>
          <div>
            <LineGraph />
          </div>
          <div>
            <FlightPath3D />
          </div>
          <div>
            <FlightPath2D />
          </div>
        </div>

        <div className="flex flex-row flex-wrap">
          <div>
            <MeasurementMenu />
          </div>
          <div>
            <RationaleTextBox />
          </div>
          <div>
            <MissionTable />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
