import './App.css';
import { useState } from "react";
import Header from './Components/Header';

import ArticleListAll from './Components/ArticleListAll';
import SingleArticlePage from './Components/SingleArticlePage';
import { Routes, Route } from 'react-router-dom';
import PostACommentForm from './Components/PostACommentForm';
import SearchBar from './Components/SearchBar';


function App() {

  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [pageState, setPageState] = useState(0);

  return (
      
    <div className="App">   
      <Header/>

      <SearchBar className="SearchBar"
          article={ articles }
          setArticles={ setArticles }
          searchTopic={ searchTopic }
          setSearchTopic={ setSearchTopic }
          topics={ topics }
          setTopics={ setTopics }
      />

      <Routes>
        <Route path="/" element={ <ArticleListAll articles={ articles } setArticles={ setArticles } /> } />
        <Route path="/articles/:article_id" element={ <SingleArticlePage/> } />
        <Route path="/PostACommentForm" element={ <PostACommentForm/> } />       
      </Routes>
    </div>

  );

};

export default App;
