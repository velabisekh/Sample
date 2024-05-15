export default function ImageShow({Image}){
    return(
        <div>\
            <img src={Image.urls.small_s3} alt={Image.alt_description}/>
        </div>
    );
}