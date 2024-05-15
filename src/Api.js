import axios from 'axios';


const searchImages= async (term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID ZG6Kw_Zg_pNmMQpmtPRwybOnS-wWYbfAmZZTSlP-Evs'
        },
        params:{
            query: term,
        },
    });

 
    return response.data.results;
   
   

}

export default searchImages;