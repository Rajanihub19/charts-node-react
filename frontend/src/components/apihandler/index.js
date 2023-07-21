import axios from "axios";
// export const ServerUrl = 'http://134.209.229.112:8080';
export const ServerUrl = 'http://localhost:8005/chart'

const getApiHandler = async (endPoint) => {
    try {
        const getResponse = await axios.get(ServerUrl + endPoint)
        console.log("getResponse==", getResponse)
        return getResponse.data

    }
    catch (error) {
        return { message: error.message, status: 400 }
    }
}
export default getApiHandler;