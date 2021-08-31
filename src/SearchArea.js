import React, { useState } from "react";

const SearchArea = () => {
  const [keyword, setkeyword] = useState("");

  return (
    <div>
      <div className="">
        <form>
          <label htmlFor="keyword">
            Search
            <input
              type="text"
              id="keyword"
              onChange={(e) => setkeyword(e.target.value)}
              value={keyword}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SearchArea;
