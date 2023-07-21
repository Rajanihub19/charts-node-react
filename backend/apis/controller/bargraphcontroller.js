const { postBarModel, getBarModel } = require("../model/bargraphmodel");

const postBarController = async (req, res) => {
    console.log('barbody----', req.body)
    const data = await postBarModel(req.body)
    res.send(data);
}
const getBarController = async (req, res) => {
    const data = await getBarModel()
    res.send(data)
}
module.exports = { postBarController, getBarController }