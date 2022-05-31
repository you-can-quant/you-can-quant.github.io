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
import Footer from './Footer';

function App() {
  return (
    <>
    <Header />
    
    <div className="container mx-auto max-w-4xl">
      <h1 className='flex ml-5 mt-6 font-semibold text-base'>
        {new Date().toLocaleDateString() + " 기준, "}
        <a className='ml-4 mt-1' href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fyou-can-quant.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EC%98%A4%EB%8A%98+%2F+%EC%A0%84%EC%B2%B4+%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=false"/></a>
      </h1>
      <h1 className='border-l-4 border-blue-700 pl-2 ml-5 mt-6 text-2xl font-bold'>정적 자산 배분</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
        <SixtyForty stock={stock} />
        <Permanent stock={stock} />
        <AllSeason stock={stock} />
        <AllWeather stock={stock} />
        </div>

      <h1 className='border-l-4 border-blue-700 pl-2 ml-5 mt-4 text-2xl font-bold'>동적 자산 배분</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
        <DualMomentum stock={stock} />
        <CompositeDualMomentum stock={stock} />
        <VAAAggressive stock={stock} />
        <GTAA stock={stock} />
      </div>
    </div>

    <div class="flex space-x-2 justify-center">
      <button type="button" class="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-bold text-md rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        <a href="https://forms.gle/TrKycSS655i3DdmA6">3초 안에 베타테스트 신청하기 클릭!</a>
      </button>
    </div>

    <Footer />
    </>
  );
}

export default App;
