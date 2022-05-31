import {revenue_monthly} from "../utils/Revenues";
import PortFolio from "./PortFolio";

function Permanent(props) {
    const stock = props.stock
    const title = '영구 포트폴리오';
    const description = '연 복리 수익률 8.8%, MDD -12.7%';
    const today = new Date();

    const spy_price = stock['SPY']['price'];
    const tlt_price = stock['TLT']['price'];
    const gld_price = stock['GLD']['price'];
    const bil_price = stock['BIL']['price'];

    const revenues_monthly = []
    const portfolio = [];

    for (let i = 0; i <= 12; i++) {
      if (today.getMonth() - i < 0) {
        break;
      }

      const spy_monthly_revenue = revenue_monthly(spy_price, i);
      const tlt_monthly_revenue = revenue_monthly(tlt_price, i);
      const gld_monthly_revenue = revenue_monthly(gld_price, i);
      const bil_monthly_revenue = revenue_monthly(bil_price, i);
      
      const revenue_montly_total = 
        spy_monthly_revenue * 25 +
        tlt_monthly_revenue * 25 + 
        gld_monthly_revenue * 25 + 
        bil_monthly_revenue * 25;
  
      revenues_monthly.push(revenue_montly_total);
    }

    portfolio.push([
      ["SPY", stock["SPY"]['description'], 25], 
      ["TLT", stock["TLT"]['description'], 25], 
      ["GLD", stock["GLD"]['description'], 25], 
      ["BIL", stock["BIL"]['description'], 25]
    ]);
      
    return <PortFolio title={title} description={description} revenues_monthly={revenues_monthly} portfolio={portfolio} />
}

export default Permanent;