import axios from "axios";
export const Backend_Endpoint="https://qtify-backend-labs.crio.do";
export const fetchTopAlbums=async()=>{
    try{
        const response=await axios.get(`${Backend_Endpoint}/albums/top`)
            return response.data;
        
    }catch(e){
            console.log(e);
    }
}