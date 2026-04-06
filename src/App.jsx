import { useState,useEffect } from 'react';
import "./App.css";
import axios from "axios";

function Project() {
  const [news,setNews] = useState([]);
  const [search,setSearch] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [summaries,setSummaries] = useState({});
  const [savedArticles,setSavedArticles] = useState([]);

  const getSummary = (text, index) => {
  const short = text ? text.slice(0, 100) + "..." : "No content";
  
  setSummaries(prev => ({
    ...prev,
    [index]: short
  }));
};

  const fetchnews = async () =>{
    try{
    const res = await axios.get (
      `https://newsapi.org/v2/top-headlines?country=us&q=${search}&apiKey=6ff650ba71f8450c83965d7d0cb3c01a`
    );
    setNews(res.data.articles);
  }
  catch(err){
    console.log(err);
  }}

  const handlelogin = (e) => {
    e.preventDefault();
    if(username.trim() !== "" && password.trim() !== ""){
      console.log("Logged in!");
      setIsLoggedIn(true);
    }
    else{
      alert("Please enter username and password");
    }
  };

  useEffect(()=>{
    if(isLoggedIn){
      fetchnews();
    }
  },[isLoggedIn]);

  const saveArticle = (article) => {
    const saved = JSON.parse(localStorage.getItem("saved")) || [];
    saved.push(article);
    localStorage.setItem("saved", JSON.stringify(saved));
    alert("Saved!");
};

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("saved")) || [];
  setSavedArticles(saved);
  }, []);

  if(!isLoggedIn){
  return (
    <div>
      <h1><strong>NovaNews</strong></h1>
      <h2>AI-Enhanced Intelligence Portal</h2>
      <form onSubmit = {handlelogin}>
      <fieldset>
      <legend>Login form</legend>
      <label htmlFor= "username" >Enter Username:</label>
      <input
        type= "text" 
        placeholder="username"
        value={username}
      onChange = {(e) => setUsername(e.target.value)} /><br/><br/>
      <label htmlFor = "password" >Enter Password</label>
      <input 
        type = "password" 
        placeholder = "password" 
        value={password}
      onChange = {(e) => setPassword(e.target.value)}/><br/><br/>
      <input type="submit" value="Login"/>
      </fieldset>
      </form>
    </div>
  );}
  else{
    return (
    <div>
      <h1>NovaNews</h1>

      <button onClick={() => setIsLoggedIn(false)}>Logout</button>

      <br /><br />

      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={fetchnews}>Search</button>

      <div className="container">
        {news.map((article, index) => (
          <div key={index} className="card">
            <h3>{article.title}</h3>
            <p>{article.description || "No description"}</p>

            <a href={article.url} target="_blank" rel="noreferrer">
              Read more
            </a>

            <br /><br />

            <button onClick={() => getSummary(article.description, index)}>
              AI Summary
            </button>

            {summaries[index] && <p>{summaries[index]}</p>}

            <button onClick={() => saveArticle(article)}>
              Save
            </button>
          </div>
        ))}
      </div>

      <h2>Saved Articles</h2>

      <div className="container">
        {savedArticles.map((article, index) => (
          <div key={index} className="card">
            <h3>{article.title}</h3>
            <p>{article.description || "No description"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
}
export default Project;
