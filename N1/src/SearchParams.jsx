import React from "react";
import { useState } from "react";

export const SearchParams = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Washington"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
