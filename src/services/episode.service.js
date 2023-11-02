import {axiosService} from "./axios.service";
import {baseURL} from "../constants";

const episodeService ={
    getAll:(page='1')=>axiosService.get(`${baseURL}/episode`,{params:{page}}),
    getById:(id)=>axiosService.get(`${baseURL}/episode/${id}`)
}

export {episodeService}