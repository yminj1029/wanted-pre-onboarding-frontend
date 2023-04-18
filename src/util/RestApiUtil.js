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

    //auth 가 아닐경우 token 없으면 에러 던져야할텐뎅
    return instance;
}

export default restApiUtil();

