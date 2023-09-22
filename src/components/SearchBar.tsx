import "./SearchBar.css";

const SeachBar:React.FC=()=> {

  return (
    <div className="searchInputContainer p-1">
      <div className="inputContainer m-1">
        <input
          type="text"
          placeholder="Search"
        />
        {/* <div className="categoryDropdown">
        </div> */}
      </div>
      <button className="btn-search m-1" >
       Search
        </button>
        {/* <div className="search-icon"></div> */}
    </div>
  );
}

export default SeachBar;
