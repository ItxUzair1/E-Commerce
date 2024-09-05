import { SearchContext } from "../../Context/SearchContext";
import { useContext, useEffect, useState } from "react";

export default function SearchBar() {
  const [items, setItems] = useState([]);
  const { setIsSearching, setFilteredData } = useContext(SearchContext);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data); // Set the fetched items
    };
    fetchItems();
  }, []);

  function handleChange(event) {
    const search = event.target.value.toLowerCase();

    const filtered = items.filter((item) =>
      item.title.toLowerCase().startsWith(search)
    );

    setFilteredData(filtered);
    if (filtered.length === 0 || search === "") {
      setIsSearching(false);
      return;
    }
    setIsSearching(true); // Update the filtered data based on search
  }

  return (
    <div className="w-full md:w-1/3 z-0 px-4 md:px-0"> {/* Responsive container */}
      <input
        type="text"
        placeholder="Search Product"
        onChange={handleChange}
        className="w-40 md:w-72 h-10 md:h-8 p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-300"
      />
    </div>
  );
}
