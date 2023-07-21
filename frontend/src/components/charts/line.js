import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import getApiHandler from '../apihandler';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)
const options = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Bar Chart',
        },
    },
};

function LineChart() {
    const [male, setMale] = useState('male');
    const [female, setFemale] = useState('female');
    const [data, setData] = useState({
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "First Dataset",
                data: [],
                backgroundColor: 'yellow',
                borderColor: 'green',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true
            }
        ]
    })
    const getData = async () => {
        const data = await getApiHandler('/getbar')
        console.log("data===========", data.data);
        const maleData = [];
        const femaleData = [];
        const labels = [];
        data.data.flat().map((user, index) => {
            maleData.push(user.male.length)
            // femaleData.push(user.female.length)
            // labels.push(user.day)
        });
        setData({
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: male,
                    data: maleData,
                    backgroundColor: 'yellow',
                    borderColor: 'green',
                    tension: 0.4,
                    fill: true,
                    pointStyle: 'rect',
                    pointBorderColor: 'blue',
                    pointBackgroundColor: '#fff',
                    showLine: true
                }
            ]
            // {
            //     label: female,
            //     data: femaleData,
            //     borderColor: 'rgb(53, 162, 235)',
            //     backgroundColor: 'rgba(53, 235, 0.5)',
            // },
            // {
            //     label: 'Dataset ID2',
            //     data: [10, 20, 30],
            //     borderColor: 'rgb(53, 162, 235)',
            //     backgroundColor: 'rgba(53, 235, 0.5)',
            // },

        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="App" style={{ width: '800px', height: '800px' }}>
            <Line data={data} ></Line>
        </div>
    );
}

export default LineChart;