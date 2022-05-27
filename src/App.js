import './App.css';
import stock from './stock_price.json'

import SixtyForty from './portfolio/SixtyForty';
import DualMomentum from './portfolio/DualMomentum';
import Permanent from './portfolio/Permanent';
import AllSeason from './portfolio/AllSeason';
import AllWeather from './portfolio/AllWeather';
import GTAA from './portfolio/GTAA';
import CompositeDualMomentum from './portfolio/CompositeDualMomentum';
import VAAAggressive from './portfolio/VAAAggressive';

import Header from './Header';

function App() {
  return (
    <>
    <Header />
    
    <div className="container mx-auto max-w-4xl">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <SixtyForty stock={stock} />
        <DualMomentum stock={stock} />
        <Permanent stock={stock} />
        <AllSeason stock={stock} />
        <AllWeather stock={stock} />
        <GTAA stock={stock} />
        <CompositeDualMomentum stock={stock} />
        <VAAAggressive stock={stock} />
      </div>
    </div>
    </>
  );
}

export default App;
