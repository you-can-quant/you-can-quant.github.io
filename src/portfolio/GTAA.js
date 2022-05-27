import date from "../utils/Dates";
import {revenue_monthly} from "../utils/Revenues";
import PortFolio from "./PortFolio";

function GTAA(props) {
    const stock = props.stock
    const title = 'GTAA 5';
    const description = '연 복리 수익률 9.6%, MDD -11.4%';
    const today = new Date();

    const spy_price = stock['SPY']['price'];
    const efa_price = stock['EFA']['price'];
    const ief_price = stock['IEF']['price'];
    const dbc_price = stock['DBC']['price'];
    const vnq_price = stock['VNQ']['price'];

    const revenues_monthly = []
    const portfolio = [];

    const spy_monthly_prices = [];
    const efa_monthly_prices = [];
    const ief_monthly_prices = [];
    const dbc_monthly_prices = [];
    const vnq_monthly_prices = [];

    for (let i = 1; i < 30; i++) {
        const [target_year, target_month, next_year, next_month, prev_year, prev_month] = date(i);
        spy_monthly_prices.push(spy_price[target_year][target_month]);
        efa_monthly_prices.push(efa_price[target_year][target_month]);
        ief_monthly_prices.push(ief_price[target_year][target_month]);
        dbc_monthly_prices.push(dbc_price[target_year][target_month]);
        vnq_monthly_prices.push(vnq_price[target_year][target_month]);
    }

    for (let i = 0; i <= 12; i++) {
      if (today.getMonth() - i < 0) {
        break;
      }

      const spy_10_month_moving_average = spy_monthly_prices.slice(i, i + 10).reduce((a, b) => a + b) / 10;
      const efa_10_month_moving_average = efa_monthly_prices.slice(i, i + 10).reduce((a, b) => a + b) / 10;
      const ief_10_month_moving_average = ief_monthly_prices.slice(i, i + 10).reduce((a, b) => a + b) / 10;
      const dbc_10_month_moving_average = dbc_monthly_prices.slice(i, i + 10).reduce((a, b) => a + b) / 10;
      const vnq_10_month_moving_average = vnq_monthly_prices.slice(i, i + 10).reduce((a, b) => a + b) / 10;

      const revenue_montly_total = 
        revenue_monthly(spy_price, i) * (spy_monthly_prices[i] > spy_10_month_moving_average ? 20 : 0) +
        revenue_monthly(efa_price, i) * (efa_monthly_prices[i] > efa_10_month_moving_average ? 20 : 0) +
        revenue_monthly(ief_price, i) * (ief_monthly_prices[i] > ief_10_month_moving_average ? 20 : 0) +
        revenue_monthly(dbc_price, i) * (dbc_monthly_prices[i] > dbc_10_month_moving_average ? 20 : 0) +
        revenue_monthly(vnq_price, i) * (vnq_monthly_prices[i] > vnq_10_month_moving_average ? 20 : 0);  
   
      revenues_monthly.push(revenue_montly_total);
      portfolio.push([
        ["SPY", stock["SPY"]['description'], (spy_monthly_prices[i] > spy_10_month_moving_average ? 20 : 0)],
        ["EFA", stock["EFA"]['description'], (efa_monthly_prices[i] > efa_10_month_moving_average ? 20 : 0)],
        ["IEF", stock["IEF"]['description'], (ief_monthly_prices[i] > ief_10_month_moving_average ? 20 : 0)],
        ["DBC", stock["DBC"]['description'], (dbc_monthly_prices[i] > dbc_10_month_moving_average ? 20 : 0)],
        ["VNQ", stock["VNQ"]['description'], (vnq_monthly_prices[i] > vnq_10_month_moving_average ? 20 : 0)],
      ]);
    }

    console.log(title, revenues_monthly);
      
    return <PortFolio title={title} description={description} revenues_monthly={revenues_monthly} portfolio={portfolio} />
}

export default GTAA;