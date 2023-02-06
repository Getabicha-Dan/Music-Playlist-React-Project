import { useState } from "react";
import SongAdder from "./SongAdder";
import HymnList from "./HymnList";
import Navbar from "./Navbar";
const Home = () => {
    const [hymns,setHymns]= useState(['Joy to the World','Silent Night','Shepereds Saw Light','Amazing Grace']);
    const handelDelete = (hymnToDelete) =>{
        setHymns(hymns.filter((hymn)=>hymn !==hymnToDelete));
    }
    const handelAdder =(newHymn)=>{
        setHymns([...hymns,newHymn]);
    }
    const handelSearch = (hymntoFind) =>{
        setHymns(hymns.filter((hymn)=> hymn.includes(hymntoFind) ));
    }
    
    return ( 
        <div className="home">
            <Navbar handelSearch={handelSearch}/>
            <SongAdder handelAdder={handelAdder}/>
            <HymnList hymns={hymns} handelDelete={handelDelete}/>

        </div>
        
     );
}
 
export default Home;