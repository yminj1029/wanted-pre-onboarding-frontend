import axios from 'axios';

const restApiUtil = () =>{
    const defaultOptions = {
        baseURL :'https://www.pre-onboarding-selection-task.shop/',
        headers:{
            'Content-Type' :'application/json'
        }
    }

    let instance = axios.create(defaultOptions)
    instance.interceptors.request.use(function(config){
        const token = localStorage.getItem('token');
        config.headers.Authorization = token?  `Bearer ${token}` : '';
        return config 
    })

    return instance;
}

export default restApiUtil();

