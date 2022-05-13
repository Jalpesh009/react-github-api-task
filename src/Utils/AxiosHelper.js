import axios from 'axios';
import { notification } from 'antd';

const BASE_URL ='https://api.github.com'

const checkError = (error) => {
    if (error.response && error.response.data) {
        let { data } = error.response;
        if (data.message) {
            notification['error']({
                message: data.message
            });
        }
    } else {
        notification['error']({
            message: error.message
        });
    }
};


/**
 * Get call from Axios
 */
const axiosGet = async (url) => {
    try {
        return await axios.get(`${BASE_URL}/${url}`);
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};

export { axiosGet };
