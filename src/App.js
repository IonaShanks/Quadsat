import logo from './logo.svg';
import './App.css';
import SidePanel from './components/SidePanel';
import InfoCard from './components/InfoCard';

function App() {
  return (
    <div>
      <SidePanel />
      <div className="App">
        <InfoCard />     
      </div>
       
    </div>
  );
}

export default App;
