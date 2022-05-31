import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Chart } from 'react-chartjs-2';

const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

const YearlyRevenuesChart = (props) => {
    const revenues = props.revenues;
    const accum = [];
    revenues.reduce((acc, current)=>{
      accum.push((acc+current).toFixed(2));
      return acc+current;
    }, 0)

    const labels = months.slice(0, revenues.length);

    const options = {
      plugins: {
        legend: {
            display: true
        }
      },
      scales: {
        y: {
          title: {
            display: false,
            text: '올해 누적 수익률%'
          },
          // min: -15,
          // max:5,
          ticks: {
            // forces step size to be 50 units
            // stepSize: 2
          }
        }
      },
    }
    
    const data = {
      // 각 막대별 라벨
      labels: labels,
      datasets: [
        {
          label: "올해 누적 수익률 %",
          borderWidth: 1,
          backgroundColor: "hsl(252, 82.9%, 67.8%)",
          borderColor: "hsl(252, 82.9%, 67.8%)",
          data: accum,
        }
      ]
    };
    return (
        <Line
            data={data}
            options={options}
            height={130}
            className="shadow-md rounded-md"
        />
    );

};

export default YearlyRevenuesChart;