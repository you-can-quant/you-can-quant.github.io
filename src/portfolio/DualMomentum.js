import {revenue_yearly, revenue_monthly} from "../utils/Revenues";
import PortFolio from "./PortFolio";

function DualMomentum(props) {
    const stock = props.stock
    const title = '듀얼 모멘텀';
    const description = '연 복리 수익률 15.1%, MDD -19.6%';
    const today = new Date();
  
    const spy_price = stock['SPY']['price'];
    const efa_price = stock['EFA']['price'];
    const bil_price = stock['BIL']['price'];
    const agg_price = stock['AGG']['price'];
  
    const revenues_monthly = []
    const portfolio = [];

    for (let i = 0; i <= 12; i++) {
      if (today.getMonth() - i < 0) {
        break;
      }

      const cur_portfolio = []

      const spy_yearly_revenue = revenue_yearly(spy_price, i);
      const efa_yearly_revenue = revenue_yearly(efa_price, i);
      const bil_yearly_revenue = revenue_yearly(bil_price, i);

      let revenue_monthly_total = 0;
      
      if (spy_yearly_revenue > bil_yearly_revenue) {
        if (spy_yearly_revenue > efa_yearly_revenue) {
            const spy_monthly_revenue = revenue_monthly(spy_price, i);
            revenue_monthly_total = spy_monthly_revenue * 100;
            cur_portfolio.push(["SPY", stock["SPY"]['description'], 100]);
        } else { 
            const efa_monthly_revenue = revenue_monthly(efa_price, i);
            revenue_monthly_total = efa_monthly_revenue * 100;
            cur_portfolio.push(["EFA", stock["EFA"]['description'], 100]);
        }
      } else {
          const agg_monthly_revenue = revenue_monthly(agg_price, i);
          revenue_monthly_total = agg_monthly_revenue * 100;
          cur_portfolio.push(["AGG", stock["AGG"]['description'], 100]);
      }

      revenues_monthly.push(revenue_monthly_total);
      portfolio.push(cur_portfolio);
    }

    console.log(title, revenues_monthly);
  
    return <PortFolio title={title} description={description} revenues_monthly={revenues_monthly} portfolio={portfolio} />
}

export default DualMomentum;