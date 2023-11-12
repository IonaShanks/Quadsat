import logo from './logo.svg';
import './App.css';
import SidePanel from './components/SidePanel';
import MissionInfoCard from './components/MissionInfoCard';
import RationaleTextBox from './components/RationaleTextBox';
import MissionTable from './components/MissionTable'

function App() {
  return (
    <div>
      <SidePanel />
      <div className="App">

        <div className="flex flex-row">
          <div className="">
            <MissionInfoCard />
          </div>


          
        </div>

        <div className="flex flex-row">
        <div className="">
        <MissionInfoCard />
          </div>
          <div className="">
            <RationaleTextBox />
          </div>
          <div className="">
            <MissionTable />
          </div>
        </div>




      </div>

    </div>
  );
}

export default App;
