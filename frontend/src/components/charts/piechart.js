import { useEffect, useState } from 'react';
// import './App.css';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';
import getApiHandler from '../apihandler';
ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);


// const data = {
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor: [
//             'red',
//             'blue',
//             'yellow'
//         ]
//     },
//     ],
//     // These labels appear in the legend and in the tooltips when hovering different arcs
//     labels: [
//         'Red',
//         'Yellow',
//         'Blue'
//     ],
// };
function Chart() {
    const [data, setData] = useState({
        datasets: [{
            data: [10, 10, 10],
            backgroundColor: [
                'skyblue',
                'black',
                'yellow'
            ]
        },
        ],
        labels: [
            'pink',
            'Yellow',
            'black'
        ],

    });
    const getData = async () => {
        const data = await getApiHandler('/getpie')
        console.log('data---------', data);
        const count1 = data.count;
        console.log('count1----', count1)
        const label = [];
        const data1 = []
        for (var i of data.data) {

            label.push(i.Mobile);
            data1.push(i.value)
        }

        setData(
            {
                datasets: [{
                    data: data1,
                    backgroundColor: [
                        'red',
                        'blue',
                        'yellow',
                        'green'
                    ]
                },
                ],
                labels: label,

            }
        )
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="App" style={{ width: '40%', height: '40%' }}>
            <Pie data={data} />
            <Doughnut data={data} />
            {/* <Bar data={data} /> */}
        </div>
    );
}

export default Chart;