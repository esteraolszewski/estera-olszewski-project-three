import { useEffect, useState } from "react";

function Display({exercises}) {
    const [randomNum, setRandomNum] = useState(0);
    const [exerciseName, setExerciseName] = useState('');
    const [instructions, setInstructions] = useState('');
    const [difficulty, setDifficulty] = useState('');
    
    useEffect( () => {

        if (exercises.length >= 1) {
            setRandomNum(Math.floor(Math.random()*exercises.length));
            setExerciseName(exercises[randomNum]["name"]);
            setInstructions(exercises[randomNum]["instructions"]);
            setDifficulty(exercises[randomNum]["difficulty"]);
        }


    },[exercises, randomNum])

    return (
        exercises
        ?
        (<div className="wrapper">
            <section className="results">
                <div className="resultsContainer">
                    <h2>{exerciseName}</h2>
                    <h3>Difficulty:</h3>
                    <p>{difficulty}</p>
                    <h3>Instructions:</h3>
                    <p>{instructions}</p>
                </div>  
            </section>
        </div>)
        :null
    );
}

export default Display;