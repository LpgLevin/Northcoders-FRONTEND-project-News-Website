import './App.css';
import { useState } from "react";
import Header from './Components/Header';

import ArticleListAll from './Components/ArticleListAll';
import SingleArticlePage from './Components/SingleArticlePage';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [pageState, setPageState] = useState(0);

    return (
      
      <div className="App">
    
        <Header/>
        
        <Routes>
          <Route path="/" element={ <ArticleListAll articles={ articles } setArticles={ setArticles } /> } />
          <Route path="/articles/:article_id" element={ <SingleArticlePage/> } />
          
        
        </Routes>
      </div>
    );


}


export default App;

  {/* <ArticleSearchBar
          article={ articles }
          setArticles={ setArticles }
          searchTopic={ searchTopic }
          setSearchTopic={ setSearchTopic }
          topics={ topics }
          setTopics={ setTopics }
        /> */}