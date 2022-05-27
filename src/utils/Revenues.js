import date from "../utils/Dates";

function revenue_monthly(price, delta_months=0) {
    const [target_year, target_month, next_year, next_month, prev_year, prev_month] = date(delta_months);
    const open_price = price[target_year][target_month];
    const close_price = price[next_year][next_month];

    return revenue(open_price, close_price);
}

function revenue_yearly(price, delta_months=0) {
    const [target_year, target_month, next_year, next_month, prev_year, prev_month] = date(delta_months);
    const open_price = price[prev_year][prev_month];
    const close_price = price[target_year][target_month];

    return revenue(open_price, close_price);
}

function revenue(open_price, close_price) {
    return (close_price - open_price) / open_price;
}

export {revenue_monthly, revenue_yearly, revenue};