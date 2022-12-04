import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Display from './Display';

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
        // name: "",
        // difficulty: "",
        // offset: 1
      }
    }).then((res) => {
      console.log(res);
      setExercises(res.data);
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
        <h1>Workout What?</h1>
      </header>
      <form>
      <label htmlFor="muscle">Choose a muscle group:</label>

        <select 
          name="muscle" 
          id="muscle" 
          onChange={handleChange}
          >
            <option value="" disabled>--Please choose an option--</option>
            <option value="abdominals">Abdominals</option>
            <option value="biceps">Biceps</option>
            <option value="calves">Calves</option>
            <option value="chest">Chest</option>
            <option value="glutes">Glutes</option>
            <option value="hamstrings">Hamstrings</option>
            <option value="quadriceps">Quadriceps</option>
            
        </select>
        {/* <button type="submit">Find me an exercise!</button> */}
      </form>
      < Display exercises={exercises}/>
    </div>
  );
}

export default App;
