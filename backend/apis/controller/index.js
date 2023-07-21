const { getPieModel, postPieModel } = require("../model")

const getPieController = async (req, res) => {
    const data = await getPieModel()
    res.send(data)

}
const postPieController = async (req, res) => {
    console.log('body-----', req.body)
    const data = await postPieModel(req.body)
    res.send(data);

}

module.exports = { getPieController, postPieController }