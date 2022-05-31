import date from "../utils/Dates";
import {revenue_monthly, revenue} from "../utils/Revenues";
import PortFolio from "./PortFolio";

function VAAAggressive(props) {
    const stock = props.stock
    const title = 'VAA Aggressive';
    const description = '연 복리 수익률 17.7%, MDD -16.1%';
    const today = new Date();

    const spy_price = stock['SPY']['price'];
    const efa_price = stock['EFA']['price'];
    const eem_price = stock['EEM']['price'];
    const agg_price = stock['AGG']['price'];
    const lqd_price = stock['LQD']['price'];
    const ief_price = stock['IEF']['price'];
    const shy_price = stock['SHY']['price'];

    const revenues_monthly = []
    const portfolio = [];

    const spy_monthly_prices = [];
    const efa_monthly_prices = [];
    const eem_monthly_prices = [];
    const agg_monthly_prices = [];
    const lqd_monthly_prices = [];
    const ief_monthly_prices = [];
    const shy_monthly_prices = [];

    for (let i = 0; i < 30; i++) {
        const [target_year, target_month, next_year, next_month, prev_year, prev_month] = date(i);
        spy_monthly_prices.push(spy_price[target_year][target_month]);
        efa_monthly_prices.push(efa_price[target_year][target_month]);
        eem_monthly_prices.push(eem_price[target_year][target_month]);
        agg_monthly_prices.push(agg_price[target_year][target_month]);
        lqd_monthly_prices.push(lqd_price[target_year][target_month]);
        ief_monthly_prices.push(ief_price[target_year][target_month]);
        shy_monthly_prices.push(shy_price[target_year][target_month]);
    }

    for (let i = 0; i <= 12; i++) {
      if (today.getMonth() - i < 0) {
        break;
      }

      const spy_momentum_score = momentum_score(spy_monthly_prices, i);
      const efa_momentum_score = momentum_score(efa_monthly_prices, i);
      const eem_momentum_score = momentum_score(eem_monthly_prices, i);
      const agg_momentum_score = momentum_score(agg_monthly_prices, i);
      const lqd_momentum_score = momentum_score(lqd_monthly_prices, i);
      const ief_momentum_score = momentum_score(ief_monthly_prices, i);
      const shy_momentum_score = momentum_score(shy_monthly_prices, i);

      let revenue_monthly_total = 0;
      const cur_portfolio = []

      if (spy_momentum_score > 0 && 
          efa_momentum_score > 0 &&
          eem_momentum_score > 0 && 
          agg_momentum_score > 0) {
        const revenues = [
          [spy_momentum_score, revenue_monthly(spy_price, i), 'SPY'],
          [efa_momentum_score, revenue_monthly(efa_price, i), 'EFA'],
          [eem_momentum_score, revenue_monthly(eem_price, i), 'EEM'],
          [agg_momentum_score, revenue_monthly(agg_price, i), 'AGG']
        ];

        revenues.sort(function(a, b) {
          return b[0] - a[0]; // desc
        })

        revenue_monthly_total = revenues[0][1] * 100;
        cur_portfolio.push([revenues[0][2], stock[revenues[0][2]]['description'], 100]);
      } else {
        const revenues = [
          [lqd_momentum_score, revenue_monthly(lqd_price, i), "LQD"],
          [ief_momentum_score, revenue_monthly(ief_price, i), "IEF"],
          [shy_momentum_score, revenue_monthly(shy_price, i), 'SHY']
        ];
        
        revenues.sort(function(a, b) {
          return b[0] - a[0]; // desc
        })

        revenue_monthly_total = revenues[0][1] * 100;
        cur_portfolio.push([revenues[0][2], stock[revenues[0][2]]['description'], 100]);
      }
   
      revenues_monthly.push(revenue_monthly_total);
      portfolio.push(cur_portfolio);
    }
      
    return <PortFolio title={title} description={description} revenues_monthly={revenues_monthly} portfolio={portfolio} />
}

function momentum_score(monthly_prices, i) {
  const current_month_price = monthly_prices[i];
  return revenue(monthly_prices[i + 1], current_month_price) * 12 + 
         revenue(monthly_prices[i + 3], current_month_price) * 4 + 
         revenue(monthly_prices[i + 6], current_month_price) * 2 + 
         revenue(monthly_prices[i + 12], current_month_price) * 1
}

export default VAAAggressive;