import React, { useEffect, useState } from "react";

function SearchAnime() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.aniapi.com/v1/anime/`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
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
          name="s"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default SearchAnime;
