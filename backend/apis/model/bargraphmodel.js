const mongoose = require("mongoose");
const Chart1Schema = mongoose.Schema({
    day: String,
    male: [],
    female: []
});
const BarChart = mongoose.model("bargraph", Chart1Schema)
const postBarModel = async (body) => {
    console.log('bodyyy--------', body)
    const { day, female, male } = body

    try {
        // const temp = await BarChart.findOne({ day })

        // console.log("tempdta---------", temp);
        // if (!temp) {
        const data = await BarChart.create(body)
        console.log("TEMP----", data)
        return { data: data, message: "success", status: 200 }
        // }
        // else {
        //     const data = await BarChart.updateOne({ day: temp.day }, { $set: {} })
        //     console.log('dataaaaaaa=========', data)
        //     return { data: data, message: "updated successfully", status: 200 }
        // }
    }
    catch (error) {
        return { message: error.message, status: 400 }
    }
}
const getBarModel = async () => {
    try {
        const data = await BarChart.find()
        console.log("TEMP----", data)
        return { data: data, message: "success", status: 200 }

    }
    catch (error) {
        return { message: error.message, status: 400 }
    }

}
module.exports = { postBarModel, getBarModel }