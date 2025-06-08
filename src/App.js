import "./App.css";
import { useState } from "react";
//at first i thought we need a button for that i created it with a button then i realised that its an auto search
function App() {
  const [query, setQuery] = useState(null);
  //icreated static articles then created the html elments and i have some errors in the console.log , i didnt want to use any AI to fix and get disqualified but im sure the logic of the code is pretty clear
  const articles = [
    "Hello today is a very sunny day",
    "Hey today is a rainy day",
    "Hello how are you",
  ];

  const change = (e) => {
    setQuery(e.target.value);
  };

  //here i am using the index as a parameter in the map higher order function for the list to work ni react
  return (
    <div>
      <input
        value={query}
        placeholder="Search for keyword here!"
        onChange={change}
      />
      <ul>
        {articles.map((article, index) => {
          //here i just changed them to lower case in order for them to match and be included in the seaarch that is applied by the user
          const lowerCasearticle = article.toLowerCase();
          const lowerCasequery = query.toLowerCase();
          const matched = lowerCasearticle.includes(lowerCasequery);
          //if no match was found or input by user was nothing i display the article itself
          if (!matched || query === "") {
            return <li key={index}>{article}</li>;
          }
          const j = article.toLowerCase().indexOf(query.toLowerCase());
          const ending =j+query.length;

          const matchingLength = query.length;
          return (
            <li key={index}>
              {article.substring(0, j)}
              <mark>{article.substring(j, j + matchingLength)}</mark>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
