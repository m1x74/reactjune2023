import {axiosService} from "./axios.service";

const episodeService ={
    getAll:axiosService.get()
}

export {episodeService}