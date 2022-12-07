import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Display from './Display';
import MovingText from 'react-moving-text';

function App() {

  const [exercises, setExercises] = useState([]);
  const [userInput, setUserInput] = useState('');

  // useEffect( () => {
    
  // }, [userInput])

  // controlled input:
  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    axios({
      url: "https://api.api-ninjas.com/v1/exercises?muscle=",
      method: "GET",
      contentType: "application/json",
      headers: {'X-Api-Key': "iLcxEQg2WENDgCYYq1OUkg==9M625XLT481hht8L"},
      params: {
        muscle: userInput,
      }
    }).then((res) => {
      console.log(res);
      setExercises(res.data);
    })
  }


  return (
    <div className="App">
      <div className="main">
      <header>
        <h1>Workout...</h1>
        <div className="what">
            <MovingText
              type="swing"
              duration="1600ms"
              delay="1s"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none">
              What?
            </MovingText>
          </div>
      </header>
      
      <form onSubmit={handleSubmit}>

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
          
          <div className="buttonDiv">
            <button type="submit">Find me an exercise!</button>
          </div>
        </form>
      </div>

      <div className="display">
        < Display exercises={exercises}/>
      </div>

      <footer>Created at Juno College of Technology 2022</footer>

    </div>
    
  );
}

export default App;
