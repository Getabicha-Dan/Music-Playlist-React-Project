import { useState } from "react";
import SongAdder from "./SongAdder";
import HymnList from "./HymnList";
const Home = () => {
    const [hymns,setHymns]= useState(['Joy to the World','Silent Night','Shepereds Saw Light','Amazing Grace']);
    const handelDelete = () =>{
        setHymns(hymns.filter(hymn) => ==!hymn)
    }
    return ( 
        <div className="home">
            <h1>Gospel Hymn Play List</h1>
            <SongAdder/>
            <HymnList hymns={hymns}/>

        </div>
        
     );
}
 
export default Home;