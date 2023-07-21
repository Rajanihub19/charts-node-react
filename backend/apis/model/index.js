const mongoose = require("mongoose");
const ChartSchema = mongoose.Schema({
    Mobile: String,
    value: Number,
});
const Chart = mongoose.model("charts", ChartSchema)
const getPieModel = async () => {
    try {
        const data = await Chart.find()
        const count = await Chart.count()
        console.log("TEMP1111----", count)
        console.log("mailfind----", data)

        return { data: data, count, message: "SUCCESS", status: 200 }
    }
    catch (error) {
        return { message: error.message, status: 400 }
    }

}
const postPieModel = async (body) => {
    const { Mobile, value } = body
    try {
        const temp = await Chart.findOne({ Mobile })
        if (!temp) {
            const data = await Chart.create(body)

            console.log("TEMP----", data)

            return { data: data, message: "success", status: 200 }
        }
        else {
            const data = await Chart.findOneAndUpdate({ Mobile: temp.Mobile }, { value: temp.value + 1 })

            return { data: data, message: "updated success", status: 200 }
        }
    }
    catch (error) {
        console.log('kuchbhiiiiiii', error.message)
        return { message: error.message, status: 400 }
    }
}



module.exports = { getPieModel, postPieModel };