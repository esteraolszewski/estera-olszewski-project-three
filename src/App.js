import './App.css';
import axios from 'axios';
import {useEffect} from 'react';

function App() {

  useEffect( () => {
    axios({
      url: "https://api.api-ninjas.com/v1/exercises",
      method: "GET",
      contentType: "application/json",
      headers: {'X-Api-Key': "iLcxEQg2WENDgCYYq1OUkg==9M625XLT481hht8L"},
      params: {
        muscle: "",
        name: "",
        difficulty: "",
        offset: 1
      }
    }).then((res) => {
      console.log(res);
    })
  }, [])

  return (
    <div className="App">
      <header>
        <h1>WORKOUT</h1>
      </header>
    </div>
  );
}

export default App;
