import searchImages from './Api';
import Searbar from './component/SearchBar';
import ImageList from './component/ImageList';
import { useState } from 'react';



export default function App(){
    const [images, setImages]=useState([]);

    const handleSumbmit= async(term)=>{
      const result=  await searchImages(term);
     setImages(result);
    }
    return(
        <div>
            <Searbar  onSubmit={handleSumbmit} />
            <ImageList Images={images}/>
        </div>
    );
}