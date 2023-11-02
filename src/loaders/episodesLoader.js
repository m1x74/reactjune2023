import {episodeService} from "../services";

const episodesLoader=async ()=>{
    return await episodeService.getAll()
}
export {episodesLoader}