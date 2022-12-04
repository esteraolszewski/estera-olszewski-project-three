import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Display from './Display.js';

function App() {

  const [exercises, setExercises] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect( () => {
    axios({
      url: "https://api.api-ninjas.com/v1/exercises?muscle=",
      method: "GET",
      contentType: "application/json",
      headers: {'X-Api-Key': "iLcxEQg2WENDgCYYq1OUkg==9M625XLT481hht8L"},
      params: {
        muscle: userInput,
        name: "",
        difficulty: "",
        offset: 1
      }
    }).then((res) => {
      console.log(res);
      console.log("working");
      setExercises(res.data.Object);
    })
  }, [userInput])

  // controlled input:
  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <h1>WORKOUT</h1>
      </header>
      <form action="">
      <label htmlFor="muscle">Choose a muscle:</label>

        <select name="muscle" id="muscle" onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="biceps">Biceps</option>
            <option value="glutes">Glutes</option>
            {/* <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option> */}
        </select>
      </form>
    </div>
  );
}

export default App;
