import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import "./NewsDetailPage.css";

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = useAppSelector((state) => state.news.news);
  const article = id ? news[parseInt(id)] : undefined;

  if (!article) return <p className="not-found">News not found</p>;

  return (
    <div className="news-detail">
      <h1 className="news-title">{article.title}</h1>
      <img
        className="news-image"
        src={article.urlToImage || "/placeholder.jpg"}
        alt={article.title}
      />
      <p className="news-description">{article.description}</p>
      <p className="news-content">{article.content}</p>
    </div>
  );
};

export default NewsDetailPage;
