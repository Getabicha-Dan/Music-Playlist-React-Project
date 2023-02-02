import { useState } from "react";
const SongAdder = ({handelAdder}) => {
    const[newHymn,setHymn]=useState('');
    const handelChange = (event)=>{
        setHymn(event.target.value);
    }
    
return (  
    <div className="adderPreview">
        <input type="text" placeholder="Song Titel" onChange={handelChange}/>
        <button onClick={()=>handelAdder(newHymn)}> Add Hymn</button>
    </div>
        
    );
}
 
export default SongAdder;
