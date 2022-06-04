import 'tw-elements';
import CountUp from 'react-countup';
import YearlyRevenuesChart from './YearlyRevenuesChart'

function PortFolio(props) {
    const revenues = props.revenues_monthly.filter(function (value) {
      return !Number.isNaN(value);
    });
    const revenue_monthly = revenues[0].toFixed(2);
    const revenue_yearly = revenues.reduce((a, b) => a + b, 0).toFixed(2);
    const portfolio = props.portfolio[0];
    // console.log(props.title, portfolio);

    const reg = /[\{\}\[\]\/\s?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    const regReplace = (str) => {
      return str.replace(reg, ``);
    }
    const title = regReplace(props.title);

    return (
      <div className="grid grid-cols-1 bg-white rounded-md border-2 border-gray-200 shadow-md p-2 md:p-4">
        
        <div className="grid grid-cols-2">
          <div>
            <div className='font-bold pb-4 md:text-lg'>{props.title}</div>
            <div className='text-xs text-gray-400 italic'>{props.description}</div>
          </div>
          <div className='text-right'>
            <div className={"md:text-lg font-semibold pb-3 " + (revenue_yearly >= 0 ? "text-red-600" : "text-blue-600")}>              
              <div className='flex justify-end'>
                <div className='text-black'>
                  올해&nbsp;
                </div>
                {
                  (revenue_yearly >= 0 ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-2 bi bi-caret-up-fill" viewBox="0 0 16 16">
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                  )
                }
                <CountUp start={0} end={revenue_yearly} delay={0} duration={randomInRange(1, 3)} decimals={2} decimal="." suffix="%">
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}</CountUp>
              </div>
            </div>
            <div className={"md:text-base font-bold pb-3 " + (revenue_monthly >= 0 ? "text-red-600" : "text-blue-600")}>
              <div className='flex justify-end'>
                  <div className='text-black'>
                    이번 달&nbsp;
                  </div>
                  {
                    (revenue_monthly >= 0 ? 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                      </svg> : 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                      </svg>
                    )
                  }
                  <CountUp start={-3} end={revenue_monthly} delay={0} duration={randomInRange(2, 3)} decimals={2} decimal="." suffix="%">
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}</CountUp>
              </div>
            </div>
          </div>
        </div>

        <div className='grid mt-2 mb-2'>
          <YearlyRevenuesChart revenues={revenues} />
        </div>

        <p>  
          <button className="flex justify-center mt-4 w-full py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + title} aria-expanded="false" aria-controls={"collapseExample" + title}>
            <div className='font-bold'>이번달 보유 종목</div>
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
          <div className='text-center bg-white rounded-md shadow-md'>
            <div className='text-lg font-semibold'>{arr[0] + ' ' + arr[2] + '%'}</div>
            <div className='text-sm text-gray-600'>{arr[1]}</div>
          </div>
        )
      }
    </div>
  );
}

function randomInRange(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

export default PortFolio;