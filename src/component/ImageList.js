import ImageShow from './ImageShow';
import './ImageList.css';

export default function ImageList({Images}){
    const renderedImages=Images.map((image)=>{
        return <ImageShow Image={image}/>
    });


    return(
        <div className="image-list" >
            {renderedImages}
            </div>
    );
}