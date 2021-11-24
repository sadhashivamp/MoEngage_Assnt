import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchAnime() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get("https://api.aniapi.com/v1/anime/");
      const { documents } = response.data.data;
      setData(documents);
      setFilteredData(documents);
    }
    fetchData();
  }, []);

  console.log(data);
  const hadleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filteredData = data.filter((item) => item.titles.en.includes(value));
    setFilteredData(filteredData);
  };
  return (
    <div>
      <form className="search">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Anime</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search For Anime"
          name="search"
          value={searchText}
          onChange={hadleSearch}
        />
        <button type="submit">Search</button>
      </form>
      {filteredData.map((item) => (
        <h2>{item.titles.en}</h2>
      ))}
    </div>
  );
}
export default SearchAnime;
