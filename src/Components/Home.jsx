import { useContext } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { SearchContext } from "./Context/SearchContext";
import SearchProduct from "./SearchProduct";




export default function Home(){
    const {isSearching}=useContext(SearchContext);
    return (<div>
        {!isSearching && <Header/>}
        {!isSearching&&<Main/>}
        {isSearching &&<SearchProduct/>}
    </div>);
}