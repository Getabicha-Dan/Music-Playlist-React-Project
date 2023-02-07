import { useState } from "react";
const Navbar = ({handleSearch, handleClear}) => {
    const[hymntoFind,setHymnToFind]=useState('');
    const handleChange = (event)=>{
        setHymnToFind(event.target.value);
    }
    return (
        <div className="content">
            <h1>Gospel Hymn Store</h1>
            <div className="search">
                <input type="text" placeholder="Search Hymn by name" onChange={handleChange}/>
                <button onClick={()=>handleSearch(hymntoFind)}>Find Hymn</button>

               <button onClick={()=>handleClear()}>Clear All</button>
             
            </div>
        </div>
        
      );
}
 
export default Navbar;