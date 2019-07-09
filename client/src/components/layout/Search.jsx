import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <Fragment>
      <h4>Search for a mentor</h4>
      <p>
        Search the Code Mentor Center database by entering a mentor's name,
        programming language or speaking language to find the right person for
        you.
      </p>
      <form className="search" action="">
        <input
          type="search"
          placeholder="Search for the right mentor..."
          required
        />
        <Link to="/" className="btn btn-rounded search-btn">
          SEARCH
        </Link>
      </form>
      <div className="displaySearchedProfiles" />
    </Fragment>
  );
};

export default Search;
