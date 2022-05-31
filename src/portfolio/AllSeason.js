import {revenue_monthly} from "../utils/Revenues";
import PortFolio from "./PortFolio";

function AllSeason(props) {
    const stock = props.stock
    const title = '사계절 포트폴리오';
    const description = '연 복리 수익률 9.6%, MDD -13.1%';
    const today = new Date();

    const spy_price = stock['SPY']['price'];
    const tlt_price = stock['TLT']['price'];
    const ief_price = stock['IEF']['price'];
    const gld_price = stock['GLD']['price'];
    const dbc_price = stock['DBC']['price'];

    const revenues_monthly = []
    const portfolio = [];

    for (let i = 0; i <= 12; i++) {
      if (today.getMonth() - i < 0) {
        break;
      }

      const spy_monthly_revenue = revenue_monthly(spy_price, i);
      const tlt_monthly_revenue = revenue_monthly(tlt_price, i);
      const ief_monthly_revenue = revenue_monthly(ief_price, i);
      const gld_monthly_revenue = revenue_monthly(gld_price, i);
      const dbc_monthly_revenue = revenue_monthly(dbc_price, i);
      
      const revenue_montly_total = 
        spy_monthly_revenue * 30 +
        ief_monthly_revenue * 15 + 
        tlt_monthly_revenue * 40 + 
        gld_monthly_revenue * 7.5 + 
        dbc_monthly_revenue * 7.5;
  
      revenues_monthly.push(revenue_montly_total);
    }

    portfolio.push([
      ["SPY", stock["SPY"]['description'], 30], 
      ["TLT", stock["TLT"]['description'], 15], 
      ["IEF", stock["IEF"]['description'], 40],
      ["GLD", stock["GLD"]['description'], 7.5],
      ["DBC", stock["DBC"]['description'], 7.5],
    ]);
      
    return <PortFolio title={title} description={description} revenues_monthly={revenues_monthly} portfolio={portfolio} />
}

export default AllSeason;