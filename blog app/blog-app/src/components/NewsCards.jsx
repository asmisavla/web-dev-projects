import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './NewsCards.css';

const NewsCards = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=4d14088e815e47c7bdedf55b6a405b82`
        );
        setArticles(response.data.articles);
        console.log('Articles fetched:', response.data.articles); // Debugging
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleReadMore = (article, index) => {
    navigate(`/relax/news/${index}`, { state: { article } });
  };

  return (
    <div className="news-cards">
      {articles.length === 0 ? (
        <p>No articles found</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} className="card">
            {article.urlToImage ? (
              <img src={article.urlToImage} alt={article.title} />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button onClick={() => handleReadMore(article, index)}>Read more</button>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsCards;
