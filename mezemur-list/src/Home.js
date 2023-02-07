import { useState } from "react";
import SongAdder from "./SongAdder";
import HymnList from "./HymnList";
import Navbar from "./Navbar";
const Home = () => {
    const [hymns,setHymns]= useState(['Joy to the World','Silent Night','Shepereds Saw Light','Amazing Grace']);
    const [resultArray, setResultArray]=useState(hymns);

    const handleDelete = (hymnToDelete) =>{
        setHymns(hymns.filter((hymn)=>hymn !==hymnToDelete));
        setResultArray(hymns);
    }

    const handleAdder =(newHymn)=>{
        setHymns([...hymns,newHymn]);
        setResultArray(hymns);
    }

    const handleSearch = (hymntoFind) =>{
        //let resultArray = hymns.filter((hymn)=> hymn.includes(hymntoFind) );
        setResultArray(hymns.filter((hymn)=> hymn.includes(hymntoFind) ));
        //setResultArray(hymns);
    }

    const handleClear = () =>{
        setResultArray(hymns);
    }
  

    return ( 
        <div className="home">
            <Navbar handleSearch={handleSearch} handleClear={handleClear} />
            <SongAdder handleAdder={handleAdder}/>
            <HymnList hymns={resultArray} handleDelete={handleDelete}/>

        </div>
        
     );
}
 
export default Home;