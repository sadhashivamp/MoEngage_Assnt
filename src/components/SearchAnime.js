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
        <input
          className="input"
          type="text"
          placeholder="Search For Anime"
          value={searchText}
          onChange={hadleSearch}
        />
        <button className="submit">Search</button>
      </form>

      <div className="card">
        {filteredData.map((item) => (
          <div className="card_data">
            <img src={item.cover_image} alt="" />

            <h3>{item.titles.en}</h3>
            <h3>Year:{item.season_year}</h3>
            <a href={item.trailer_url} atr="#">
              Trailer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SearchAnime;
