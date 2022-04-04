import SearchBar from "../SearchBar/SearchBar";
const NavBar = (props) => {
    return ( 
        <div className="header">
            <h1>Video Game Analysis</h1>
            <SearchBar />
        </div>
     );
}
 
export default NavBar;