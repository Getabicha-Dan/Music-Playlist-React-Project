import { useState } from "react";
const SongAdder = ({handleAdder}) => {
    const[newHymn,setHymn]=useState('');
    const handleChange = (event)=>{
        setHymn(event.target.value);
    }
    
return (  
    <div className="adderPreview">
        <input type="text" placeholder="Song Titel" onChange={handleChange}/>
        <button onClick={()=>handleAdder(newHymn)}> Add Hymn</button>
    </div>
        
    );
}
 
export default SongAdder;