function date(delta_months=0) {
    const today = new Date();

    const target_date = new Date(
        today.getFullYear(),
        today.getMonth() - delta_months,
        today.getDate()
      )
    
      const target_year = String(target_date.getFullYear());
      const target_month = String('00' + (target_date.getMonth() + 1)).slice(-2);
  
      const target_date_minus_one_year = new Date(
        target_date.getFullYear() - 1,
        target_date.getMonth(),
        target_date.getDate()
      )
  
      const prev_year = String(target_date_minus_one_year.getFullYear());
      const prev_month = String('00' + (target_date_minus_one_year.getMonth() + 1)).slice(-2);
  
      const target_date_plus_one_month = new Date(
        target_date.getFullYear(),
        target_date.getMonth() + 1,
        target_date.getDate()
      )
  
      const next_year = String(target_date_plus_one_month.getFullYear());
      const next_month = String('00' + (target_date_plus_one_month.getMonth() + 1)).slice(-2);

      return [target_year, target_month, next_year, next_month, prev_year, prev_month];
}

export default date;