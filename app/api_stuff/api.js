import axios from "axios";
const API_BASE_URL = "https://672a42e6976a834dd022c1d5.mockapi.io/";
const api = axios.create({
    baseURL:API_BASE_URL,
});
export const getPosts = async()=>{
    try{
        // const response = await api.get(`/tasks`);
        // return response.data;
        // return await api.get('/tasks').data;
        return (await api.get(`/tasks`)).data;

    }catch(error){
        throw id +": "+error;
    }
};
export const deletePostApi = async()=>{
    try{
        return await (api.delete('/tasks')).data;
    }catch(error){
        throw error
    }
};