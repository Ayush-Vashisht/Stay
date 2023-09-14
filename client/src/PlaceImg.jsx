export default function PLaceImg({place,index=0,className=null}){
    if(!place.photos?.length){
        return "";
    }
    if(!className){
        className="object-cover rounded-2xl ";
    }
    return(
        <div>
            <img className={className} src={"http://localhost:5000/uploads/"+place.photos[index]} alt=""/>
        </div>
    );
}