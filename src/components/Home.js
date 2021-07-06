import React, { useState } from 'react'
import MovieApi from "../api"

function Home() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    Movie: "",
  });

  function handleChange(evt) {
    evt.preventDefault();

    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
  
    try {
      evt.preventDefault();
      let response;
      const API = new MovieApi();
      
      API.getMovie(formData.Movie).then(
        resp => {
          console.log('reeeeessssspp',resp)
          let resArr = resp.data.results;
          if (!resArr) return alert("ERROR: Movie one cannot be found. For a list of valid Movie IDs, please visit https://superheroapi.com/ids.html")
          for (let i = 0; i < resArr.length; i++) {

            if (resArr[i].name.toString() === formData.Movie.toString()) {
              response = resArr[i];
              console.log("RESPONSE IN SEARCH---->", response)
              resArr = undefined;
              setFormData({ Movie: '' });
              break;
            }
          }
        })
    } catch (e) {
      console.log("ERROR HERE---> ", e);
    } finally {
      console.log("FINALLY");
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Search for any Movie!!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange} 
           
          placeholder="search"
          name="Movie"
          id="Movie"
          value={formData.Movie}
       />
      </form>
    </div>
  )
}

export default Home;
