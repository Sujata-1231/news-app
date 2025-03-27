import React from "react";
import { Article } from "../redux/types";
import "./NewsItem.css";

interface Props {
  article: Article;
  onClick: () => void;
}

const NewsItem: React.FC<Props> = ({ article, onClick }) => {
  return (
    <div className="news-item" onClick={onClick}>
      <img src={article.urlToImage} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <small>{new Date(article.publishedAt).toLocaleString()}</small>
    </div>
  );
};

export default NewsItem;
