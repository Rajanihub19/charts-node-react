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
            text: 'Bar Chart2',
        },
    },
};

const data1 = [{
    month: "january",
    date: "1",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi", "rajjo"]
},
{
    month: "january",
    date: "2",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi"]
},
{
    month: "january",
    date: "3",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi"]
},
{
    month: "january",
    date: "4",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi"]
},
{
    month: "january",
    date: "5",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi"]
},
{
    month: "january",
    date: "6",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi"]
},
{
    month: "january",
    date: "7",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi"]
},
{
    month: "january",
    date: "8",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi"]
},
{
    month: "january",
    date: "9",
    male: ["sajal", "chanchal"],
    female: ["aaru", "mahi"]
},
]
var getDaysInMonth = function (month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
    // return new Date(year, month+1, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2023));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
const Barchart1 = () => {

    const [male, setMale] = useState('male');
    const [female, setFemale] = useState('female');
    const [data, setData] = useState({
        labels: ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'octomber', 'november', 'december'],
        datasets: [
            {
                label: '',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
            },
            {
                label: '',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });

    const getData = async () => {
        // const data = await getApiHandler('/getbar')
        // console.log("data===========", data.data);
        const maleData = [];
        const femaleData = [];
        const labels = [];
        const month = [];
        data1.flat().map((user, index) => {
            maleData.push(user.male.length)
            femaleData.push(user.female.length)
            labels.push(user.date)
            month.push(user.day)
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
        getDaysInMonth()

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
export default Barchart1;