import { useState } from "react";
import SongAdder from "./SongAdder";
import HymnList from "./HymnList";
const Home = () => {
    const [hymns,setHymns]= useState(['Joy to the World','Silent Night','Shepereds Saw Light','Amazing Grace']);
    const handelDelete = (hymnToDelete) =>{
        setHymns(hymns.filter((hymn)=>hymn !==hymnToDelete));
    }
    const handelAdder =(newHymn)=>{
        setHymns([...hymns,newHymn]);
    }
    return ( 
        <div className="home">
            <h1>Gospel Hymn Play List</h1>
            <SongAdder handelAdder={handelAdder}/>
            <HymnList hymns={hymns} handelDelete={handelDelete}/>

        </div>
        
     );
}
 
export default Home;