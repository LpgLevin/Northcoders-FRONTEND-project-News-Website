import { fetchArticlesByTopic } from "../Utils.js/api";
import { fetchTopics } from "../Utils.js/api";
import { useState } from "react";
import { useEffect } from "react";

function SearchBar( { articles, setArticles, searchTopic, setSearchTopic, topics, setTopics } ) {

  useEffect(() => {

    fetchTopics().then( ( response ) => {

      setTopics( response.topics );

      console.log(response);
      
    });

  }, []);

  const handleSubmit = ( event ) => {
    
    event.preventDefault();

    fetchArticlesByTopic( searchTopic )
    .then((response) => {
      setSearchTopic( response )
    });

  };

  <form onSubmit={ handleSubmit }>
    <label htmlFor="SearchTopic" className="SelectASearchTopic">
        Select a search topic 
        <select className="TopicDropDown"
          onChange={ ( event ) => {

            setSearchTopic( event.target.value );

          }}
        >
          {topics.map( (topic) => {
            return (

              <option className="DropDownList" value={ topic }>
                { `${topic}` }
              </option>

            );

          })}

        </select>
    </label>

    <button className="SubmitSearchTopic" type="submit">Show me {`${searchTopic}`} articles!</button>
  </form> 
   

};

export default SearchBar;