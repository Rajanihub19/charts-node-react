import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';
import getApiHandler from '../apihandler';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    indexAxis: 'y',
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

const Barchart = () => {
    const [male, setMale] = useState('male');
    const [female, setFemale] = useState('female');
    const [data, setData] = useState({
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });

    const getData = async () => {
        const data = await getApiHandler('/getbar')
        console.log("data===========", data.data);
        const maleData = [];
        const femaleData = [];
        const labels = [];
        data.data.flat().map((user, index) => {
            maleData.push(user.male.length)
            femaleData.push(user.female.length)
            labels.push(user.day)
        });
        setData({
            labels: labels,
            datasets: [
                {
                    label: male,
                    data: maleData,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(99, 132, 0.5)',
                },
                {
                    label: female,
                    data: femaleData,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 235, 0.5)',
                },
                // {
                //     label: 'Dataset ID2',
                //     data: [10, 20, 30],
                //     borderColor: 'rgb(53, 162, 235)',
                //     backgroundColor: 'rgba(53, 235, 0.5)',
                // },
            ],
        })
    }

    useEffect(() => {

        getData();

    }, [])

    return (
        <div style={{ width: '80%', height: '50%' }}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Bar data={data} options={options} />
            {/* <Line data={data} /> */}
        </div>)
}
export default Barchart;