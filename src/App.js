import './App.css';
import { useState } from "react";
import Header from './Components/Header';
import Greeting from './Components/Greeting';
import ArticleListAll from './Components/ArticleListAll';


function App() {

  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [pageState, setPageState] = useState(0);

  return (
    <div className="App">
      <Header/>
      <Greeting />
      <ArticleListAll articles={ articles } setArticles={ setArticles } />
     
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