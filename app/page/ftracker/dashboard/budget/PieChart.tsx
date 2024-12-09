import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

interface PieChartProps {
  categories: string[];
  amounts: number[];
}

const PieChart: React.FC<PieChartProps> = ({ categories, amounts }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const totalAmount = amounts.reduce((acc, amount) => acc + amount, 0);

      const chartInstance = new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: categories,
          datasets: [
            {
              label: 'Budget Amount',
              data: amounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Budget Data - Pie Chart',
              padding: {
                top: 10,
                bottom: 20,
              },
              font: {
                size: 18,
                weight: 'bold',
              },
            },
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 14,
                  weight: 'bold',
                },
                boxWidth: 15,
              },
            },
            datalabels: {
              color: 'white',
              font: {
                size: 14,
                weight: 'bold',
              },
              formatter: (value, context) => {
                const percentage = ((value / totalAmount) * 100).toFixed(2);
                return `${percentage}%`;
              },
            },
          },
          animation: {
            duration: 1500,
            easing: 'easeInOutQuad',
          },
        },
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [categories, amounts]);

  return (
    <div
      style={{
        marginTop: '15px',
        width: '100%', 
        height: 'auto',
        maxWidth: '600px', 
        margin: '0 auto', 
      }}
    >
      <canvas
        ref={chartRef}
        aria-label="Budget Pie Chart"
        role="img"
        style={{ width: '100%', height: 'auto' }} 
      />
    </div>
  );
};

export default PieChart;
