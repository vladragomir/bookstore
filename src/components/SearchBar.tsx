import React from "react";
import classes from "./SearchBar.module.css";

interface Props {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by title or author"
      onChange={handleInputChange}
      className={classes.SearchBar}
    />
  );
};
