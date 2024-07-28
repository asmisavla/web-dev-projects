import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsDetail.css';

const NewsDetail = () => {
  const location = useLocation();
  const { article } = location.state || {}; 

  console.log('Location:', location);
  console.log('Article:', article);

  if (!article) {
    return <div style={{ color: 'white' }}>No article data available</div>;
  }

  return (
    <div className="news-container">
      <div className="news-detail">
        {article.urlToImage ? (
          <img src={article.urlToImage} alt={article.title} />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <p>{article.content}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read full article
        </a>
      </div>
    </div>
  );
};

export default NewsDetail;
