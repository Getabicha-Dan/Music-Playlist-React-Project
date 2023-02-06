import { useState } from "react";
const Navbar = ({handelSearch}) => {
    const[hymnToFind,setHymnToFind]=useState('');
    const handleChange = (event)=>{
        setHymnToFind(event.target.value);
    }
    return (
        <div className="content">
            <h1>Gospel Hymn Store</h1>
            <div className="search">
                <input type="text" placeholder="Search Hymn by name" onChange={handleChange}/>
                <button onClick={()=>handelSearch(hymnToFind)}>Find Hymn</button>
            </div>
        </div>
        
      );
}
 
export default Navbar;