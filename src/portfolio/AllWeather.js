import {revenue_monthly} from "../utils/Revenues";
import PortFolio from "./PortFolio";

function AllWeather(props) {
    const stock = props.stock
    const title = '올웨더 포트폴리오';
    const description = '연 복리 수익률 9.2%, MDD -12%';
    const today = new Date();

    const spy_price = stock['SPY']['price'];
    const efa_price = stock['EFA']['price'];
    const eem_price = stock['EEM']['price'];
    const dbc_price = stock['DBC']['price'];
    const gld_price = stock['GLD']['price'];
    const edv_price = stock['EDV']['price'];
    const ltpz_price = stock['LTPZ']['price'];
    const lqd_price = stock['LQD']['price'];
    const emlc_price = stock['EMLC']['price'];

    const revenues_monthly = []
    const portfolio = [];

    for (let i = 0; i <= 12; i++) {
      if (today.getMonth() - i < 0) {
        break;
      }

      const spy_monthly_revenue = revenue_monthly(spy_price, i);
      const efa__monthly_revenue = revenue_monthly(efa_price, i);
      const eem__monthly_revenue = revenue_monthly(eem_price, i);
      const dbc__monthly_revenue = revenue_monthly(dbc_price, i);
      const gld__monthly_revenue = revenue_monthly(gld_price, i);
      const edv__monthly_revenue = revenue_monthly(edv_price, i);
      const ltpz_monthly_revenue = revenue_monthly(ltpz_price, i);
      const lqd__monthly_revenue = revenue_monthly(lqd_price, i);
      const emlc_monthly_revenue = revenue_monthly(emlc_price, i);
      
      const revenue_montly_total = 
        spy_monthly_revenue * 12 +
        efa__monthly_revenue * 12 + 
        eem__monthly_revenue * 12 + 
        dbc__monthly_revenue * 7 + 
        gld__monthly_revenue * 7 + 
        edv__monthly_revenue * 18 +
        ltpz_monthly_revenue * 18 +
        lqd__monthly_revenue * 7 + 
        emlc_monthly_revenue * 7;
   
      revenues_monthly.push(revenue_montly_total);
    }

    
    portfolio.push([
      ["SPY", stock["SPY"]['description'], 12], 
      ["EFA", stock["EFA"]['description'], 12], 
      ["EEM", stock["EEM"]['description'], 12], 
      ["DBC", stock["DBC"]['description'], 7],
      ["GLD", stock["GLD"]['description'], 7],
      ["EDV", stock["EDV"]['description'], 18],
      ["LTPZ", stock["LTPZ"]['description'], 18],
      ["LQD", stock["LQD"]['description'], 7],
      ["EMLC", stock["EMLC"]['description'], 7],
    ]);

    return <PortFolio title={title} description={description} revenues_monthly={revenues_monthly} portfolio={portfolio} />
}

export default AllWeather;