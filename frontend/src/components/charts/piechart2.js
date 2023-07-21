import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import getApiHandler from "../apihandler";
function Piechart1() {
    const [stdudentSubject, setStudentsubject] = useState([]);
    const [studentMarks, setStudentMarks] = useState([]);


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
        setStudentsubject(label)
        setStudentMarks(data1)


    }
    useEffect(() => {
        // const sSubject = [];
        // const sMarks = [];
        // const getStudentdata = async () => {
        //     const reqData = await fetch("http://localhost/reactgraphtutorial/marks");
        //     const resData = await reqData.json();
        //     for (let i = 0; i < resData.length; i++) {
        //         sSubject.push(resData[i].subject);
        //         sMarks.push(parseInt(resData[i].marks));
        //     }
        //     setStudentsubject(sSubject);
        //     setStudentMarks(sMarks);
        //     //console.log(resData); 
        // }

        // getStudentdata();
        getData();

    }, []);

    return (
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3">Welcome to Piechart </h3>
                <Chart
                    type="pie"
                    width={1349}
                    height={550}

                    series={studentMarks}
                    // series={[10, 20, 30, 40, 60, 30]}


                    options={{
                        title: {
                            text: "Student PieChart"
                        },
                        noData: { text: "Empty Data" },
                        // colors:["#f90000","#f0f"],
                        // labels: stdudentSubject
                        // labels: ['hindi', 'maths', 'science', 'english', 'gk', 'tecchnical']
                        labels: stdudentSubject

                    }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart1;