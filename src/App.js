import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import Repo from "./components/Repo";
import { Pagination } from "./components/Pagination";

const perPage = 9;

function App() {
  const [datas, setDatas] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [type, setType] = useState("users");
  const [query, setQuery] = useState("github");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const types = [
    { name: "users", value: "users" },
    { name: "repositories", value: "repositories" },
  ];

  useEffect(() => {
    getDatas();
  }, [query, type, currentPage]);

  const getDatas = async (e) => {
    try {
      const url = new URL(`https://api.github.com/search/${type}`);
      url.searchParams.append("q", query);
      url.searchParams.append("per_page", "9");
      url.searchParams.append("page", currentPage);

      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          Authorization: "token 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",
        },
      });
      const res = await response.json();
      setDatas(res.items);
      setIsLoading(false);
      setTotalCount(res.total_count);
    } catch (err) {
      alert(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    if (query !== "") {
      setTimeout(() => {
        setQuery(e.target.value);
      }, 1500);
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <form className="search-form">
        <input className="search-bar" type="text" onChange={handleSearch} />
        <select className="type-search" onChange={handleTypeChange}>
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.name}
            </option>
          ))}
        </select>
      </form>
      <div className="data">
        {datas.length > 0 ? (
          <>
            {datas.map((item) =>
              type === "users" ? (
                <div style={{ minWidth: "30%" }}>
                  <User key={item.id} {...item} />
                </div>
              ) : (
                <Repo key={item.id} {...item} />
              )
            )}
          </>
        ) : (
          <>{!isLoading ? `${type} not found` : 'Loading...'}</>
        )}{" "}
      </div>
      <Pagination
        totalCount={totalCount}
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="pagination"
      />
    </div>
  );
}

export default App;
