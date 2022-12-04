import { useEffect, useState } from "react";

function Display({exercises}) {
    const [randomNum, setRandomNum] = useState(0);
    const [exerciseName, setExerciseName] = useState('');
    const [instructions, setInstructions] = useState('');
    console.log(exercises);
    useEffect( () => {

        if (exercises.length >= 1) {
            setRandomNum(Math.floor(Math.random()*exercises.length));
            console.log(randomNum);
            setExerciseName(exercises[randomNum]["name"]);
            setInstructions(exercises[randomNum]["instructions"])
        }


    },[exercises])

    return (
        exercises
        ?
        (<div className="wrapper">
            <section className="results">
            <div className="resultsContainer">
                            <h2>Name: {exerciseName} </h2>
                            <p>Instructions: {instructions}</p>
                        </div>
                {/* {userInput.length !== 0 */}
                 {/* {exercises.map(inputObj => {
                    return (
                        <div className="resultsContainer">
                            <h2>Name: {inputObj.name}</h2>
                            <p>Instructions: {inputObj.instructions}</p>
                        </div>
                    )
                }) */}
                
            
            
                
            </section>
        </div>)
        :null
    );
}

export default Display;