import 'tw-elements';
import CountUp from 'react-countup';

function PortFolio(props) {
    const revenue_monthly = props.revenues_monthly[0].toFixed(1);
    const revenue_yearly = props.revenues_monthly.reduce((a, b) => a + b, 0).toFixed(1);
    const portfolio = props.portfolio[0];
    console.log(props.title, portfolio);

    const reg = /[\{\}\[\]\/\s?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    const regReplace = (str) => {
      return str.replace(reg, ``);
    }
    const title = regReplace(props.title);
    console.log(title);
    

    return (
      <div className="grid grid-cols-1 bg-white rounded-md border-2 border-gray-200 shadow-md p-4">
        
        <div className="grid grid-cols-2">
          <div>
            <div className='font-bold pb-4 md:text-lg'>{props.title}</div>
            <div className='text-xs text-gray-400 italic'>{props.description}</div>
          </div>
          <div className='text-right'>
            <div className={"flex md:text-lg justify-end font-semibold pb-3 " + (revenue_monthly >= 0 ? "text-red-600" : "text-blue-600")}>
              이번 달&nbsp;
              {
                (revenue_monthly >= 0 ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-2 bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                  </svg> : 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                )
              }
              <CountUp start={3} end={revenue_monthly} delay={0} duration={randomInRange(1, 2)} decimals={2} decimal="." suffix="%">
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}</CountUp>
            </div>
            <div className='text-gray-600 font-semibold'>
              올해 {revenue_yearly}%
            </div>
          </div>
        </div>

        <p>  
          <button className="flex justify-center mt-4 w-full py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + title} aria-expanded="false" aria-controls={"collapseExample" + title}>
            이번달 보유 종목 보기
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </p>
        <div className="collapse" id={"collapseExample" + title}>
          <Details portfolio={portfolio}/>
        </div>

      </div>
      );
}

function Details(props) {
  const portfolio = props.portfolio;
  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      {
        portfolio.map(arr => 
          <div className='text-center bg-white rounded-md border-2 border-gray-200 shadow-md'>
            <div className='text-lg font-semibold'>{arr[0] + ' ' + arr[2] + '%'}</div>
            <div className='text-sm text-gray-600'>{arr[1]}</div>
          </div>
        )
      }
    </div>
  );
}

function randomInRange(min, max) {
  return (Math.random() * (max - min) + min).toFixed(3);
}

export default PortFolio;