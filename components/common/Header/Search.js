import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import FindIcon from "../../../public/images/find.png";
import AddIcon from "../../../public/images/add.png";

const Search = () => {
  const [searchWord, setSearchWord] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    Router.push(`/list?word=${searchWord}`);
  };

  return (
    <div className="search-add-wrap">
      <span className="search-wrap">
        <form onSubmit={onSearch} className="header-search-form">
          <input
            value={searchWord}
            className="head-search-input"
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="Search..."
          />
        </form>
        <div className="search-icon">
          <Image src={FindIcon} onClick={onSearch} width={40} height={40} />
        </div>
      </span>
      <Link href="/register-ad">
        <button className="create-ad-btn">
          <div className="create-ad-icon">
            <Image src={AddIcon} alt="create-ad-icon" width={30} height={30} />
          </div>
          <span className="text">Create ad</span>
        </button>
      </Link>
    </div>
  );
};

export default Search;
