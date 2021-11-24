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
      </form>

      <div className="anime">
        <h1>Anime Page</h1>
        <table>
          <tr>
            <th>titles.en</th>
            <th>trailer_url</th>
            <th>genres</th>
            <th>season_year</th>
            <th>episodes_count</th>
            <th>descriptions.en</th>

            <th>episode_duration</th>
          </tr>
          {filteredData.map((item) => (
            <tr>
              <td>{item.titles.en}</td>
              <td>{item.trailer_url}</td>
              <td>{item.genres}</td>
              <td>{item.season_year}</td>
              <td>{item.episodes_count}</td>
              <td>{item.descriptions.en}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default SearchAnime;
