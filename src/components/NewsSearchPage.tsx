import React, { useState, useEffect } from "react";
import { fetchNews } from "../redux/newsSlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "./NewsSearchPage.css";

const NewsSearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { news, status } = useAppSelector((state) => state.news);

  const handleSearch = () => {
    if (query.trim()) {
      setPage(1);
      dispatch(fetchNews({ query, useEverything: true, page: 1 }));
    }
  };

  useEffect(() => {
    if (query.trim()) {
      dispatch(fetchNews({ query, useEverything: true, page }));
    }
  }, [page]);

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="news-search">
      <h1 className="heading">News Search</h1>

      <div className="search-container">
        <div className="search-controls">
          <input
            type="text"
            placeholder="Search News"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="us">United States</option>
            <option value="in">India</option>
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="general">General</option>
            <option value="business">Business</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {status === "loading" && <h1 className="loading">Loading...</h1>}
      {status === "succeeded" && (
        <>
          <div className="news-grid">
            {news.map((item, index) => (
              <Link to={`/detail/${index}`} className="news-card" key={index}>
                <img
                  src={item.urlToImage || "/placeholder.jpg"}
                  alt={item.title}
                />
                <div className="news-content">
                  <h3>{item.title}</h3>
                  <p className="author">{item.author || "Unknown"}</p>
                  <p className="date">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination-buttons">
            <button onClick={handlePrevPage} disabled={page === 1}>
              Previous
            </button>
            <span style={{ margin: "0 10px" }}>Page {page}</span>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsSearchPage;
