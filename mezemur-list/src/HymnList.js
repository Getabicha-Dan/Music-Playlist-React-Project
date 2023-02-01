const HymnList = () => {
    return ( 
        <div className="listPreview">
            {hymns.map((hymn)=>(
                <div className="listedHymn">
                    <h2>hymn</h2>
                    <button>Delete Hymn</button>
                </div>

            ))}
        </div>
     );
}
 
export default HymnList;