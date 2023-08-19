import axios from 'axios'

const AdviceApi = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice',{

    });   
    return response.data.slip;
};

export default AdviceApi;