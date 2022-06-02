import {revenue_yearly, revenue_monthly} from "../utils/Revenues";
import PortFolio from "./PortFolio";

function CompositeDualMomentum(props) {
    const stock = props.stock
    const title = '종합 듀얼 모멘텀';
    const description = '연 복리 수익률 11.9%, MDD -10.9%';
    const today = new Date();
  
    const spy_price = stock['SPY']['price'];
    const efa_price = stock['EFA']['price'];
    const lqd_price = stock['LQD']['price'];
    const hyg_price = stock['HYG']['price'];
    const vnq_price = stock['VNQ']['price'];
    const rem_price = stock['REM']['price'];
    const tlt_price = stock['TLT']['price'];
    const gld_price = stock['GLD']['price'];
    const bil_price = stock['BIL']['price'];
  
    const revenues_monthly = []
    const portfolio = [];

    for (let i = 0; i <= 12; i++) {
      if (today.getMonth() - i < 0) {
        break;
      }

      const spy_yearly_revenue = revenue_yearly(spy_price, i);
      const efa_yearly_revenue = revenue_yearly(efa_price, i);
      const lqd_yearly_revenue = revenue_yearly(lqd_price, i);
      const hyg_yearly_revenue = revenue_yearly(hyg_price, i);
      const vnq_yearly_revenue = revenue_yearly(vnq_price, i);
      const rem_yearly_revenue = revenue_yearly(rem_price, i);
      const tlt_yearly_revenue = revenue_yearly(tlt_price, i);
      const gld_yearly_revenue = revenue_yearly(gld_price, i);
      const bil_yearly_revenue = revenue_yearly(bil_price, i);

      let revenue_monthly_total = 0;
      const cur_portfolio = []
      
      if (spy_yearly_revenue > bil_yearly_revenue || efa_yearly_revenue > bil_yearly_revenue) {
        const monthly_revenue = (
            spy_yearly_revenue > efa_yearly_revenue ?
            revenue_monthly(spy_price, i) : revenue_monthly(efa_price, i)
        );
        revenue_monthly_total += monthly_revenue * 25;
        const ticker = spy_yearly_revenue > efa_yearly_revenue ? "SPY" : "EFA";
        cur_portfolio.push([ticker, stock[ticker]['description'], 25]);
      }
            
      if (lqd_yearly_revenue > bil_yearly_revenue || hyg_yearly_revenue > bil_yearly_revenue) {
        const monthly_revenue = (
            lqd_yearly_revenue > hyg_yearly_revenue ?
            revenue_monthly(lqd_price, i) : revenue_monthly(hyg_price, i)
        );
        revenue_monthly_total += monthly_revenue * 25;
        const ticker = lqd_yearly_revenue > hyg_yearly_revenue ? "LQD" : "HYG";
        cur_portfolio.push([ticker, stock[ticker]['description'], 25]);
      }

      if (vnq_yearly_revenue > bil_yearly_revenue || rem_yearly_revenue > bil_yearly_revenue) {
        const monthly_revenue = (
            vnq_yearly_revenue > rem_yearly_revenue ?
            revenue_monthly(vnq_price, i) : revenue_monthly(rem_price, i)
        );
        revenue_monthly_total += monthly_revenue * 25;
        const ticker = vnq_yearly_revenue > rem_yearly_revenue ? "VNQ" : "REM";
        cur_portfolio.push([ticker, stock[ticker]['description'], 25]);
      }
            
      if (tlt_yearly_revenue > bil_yearly_revenue || gld_yearly_revenue > bil_yearly_revenue) {
        const monthly_revenue = (
            tlt_yearly_revenue > gld_yearly_revenue ?
            revenue_monthly(tlt_price, i) : revenue_monthly(bil_price, i)
        );
        revenue_monthly_total += monthly_revenue * 25;
        const ticker = tlt_yearly_revenue > gld_yearly_revenue ? "TLT" : "GLD";
        cur_portfolio.push([ticker, stock[ticker]['description'], 25]);
      }

      revenues_monthly.push(revenue_monthly_total);
      if (cur_portfolio.length < 4) {
        cur_portfolio.push(["현금", "현금", 25 * (4 - cur_portfolio.length)]);
      }
      portfolio.push(cur_portfolio);
    }
  
    return <PortFolio title={title} description={description} revenues_monthly={revenues_monthly} portfolio={portfolio} />
}

export default CompositeDualMomentum;