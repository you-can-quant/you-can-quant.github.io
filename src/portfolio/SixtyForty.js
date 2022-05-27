import {revenue_monthly} from "../utils/Revenues";
import PortFolio from './PortFolio';

function SixtyForty(props) {
    const stock = props.stock
    const title = '60/40 포트폴리오';
    const description = '연 복리 수익률 9.8%, MDD -29.5%';
    const today = new Date();

    const spy_price = stock['SPY']['price'];
    const ief_price = stock['IEF']['price'];
  
    const revenues_monthly = [];
    const portfolio = [];

    for (let i = 0; i <= 12; i++) {
      if (today.getMonth() - i < 0) {
        break;
      }

      const spy_monthly_revenue = revenue_monthly(spy_price, i);
      const ief_monthly_revenue = revenue_monthly(ief_price, i);
      
      const revenue_monthly_total = spy_monthly_revenue * 60 + ief_monthly_revenue * 40;
  
      revenues_monthly.push(revenue_monthly_total);
    }

    portfolio.push([["SPY", stock["SPY"]['description'], 60], ["IEF", stock["IEF"]['description'], 40]]);

    console.log(title, revenues_monthly);
  
    return <PortFolio title={title} description={description} revenues_monthly={revenues_monthly} portfolio={portfolio} />
}
  
export default SixtyForty;