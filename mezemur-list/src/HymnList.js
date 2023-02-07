const HymnList = ({hymns,handleDelete}) => {
    return ( 
        <div className="listPreview">
            {hymns.map((hymn)=>(
                <div className="listedHymn" key={hymn}>
                    <h2>{hymn}</h2>
                    <button onClick={()=>handleDelete(hymn)}>Delete Hymn</button>
                </div>

            ))}
        </div>
     );
}
 
export default HymnList;