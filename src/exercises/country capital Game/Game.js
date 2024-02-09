import React, { useState, useEffect } from 'react'; 
import './Game.css';
import _ from 'lodash';

// link to question https://devtools.tech/questions/s/build-country-capital-game-or-microsoft-frontend-interview-question-or-javascript-or-react-js---qid---yPb5g7MLCSf6j2F3qjqj

// when we pass then data is an object
// need to convert it to array and shuffle values to display values in random order
const Game = ({data}) => {

    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [detectInCorrect, setInCorrect] = useState(0);
    // const [correctlyMatched, setCorrectlyMatched] = useState([]);
    const [matched, setMatched] = useState(new Set);

    // good practise to name the anonymous function, better readable when we revisit.
    useEffect(function onMount() {
        const allOptions = Object.entries(data).flat();

        setOptions(_.shuffle(allOptions));
    }, []);


    const handleSelection = (e) => {
        const {target} = e;
        const value = target.getAttribute('data-value');

        // now as per the problem there would be 2 turns
        // 1st turn will be user is going to click a country/capital
        // change border color to blue
        // after second selection we will have 2 selections now
        // set border color of 2nd selection to blue
        // check answer right/wrong
        // border color => red/green
        // reset

        const newSelection = selectedOptions.concat(value);
        if(newSelection.length === 2) {
            const [first, second] = newSelection;

            if (data[first] === second || data[second] === first) {
                setSelectedOptions(newSelection);
                setInCorrect(0);
                // setCorrectlyMatched(newSelection);
                setMatched(new Set([
                    ...matched,
                    ...newSelection
                ]));
            } else {
                setSelectedOptions(newSelection);
                setInCorrect(1);
                // if incorrect drop selected values after 1 second
            }

            setTimeout(() => {
                setSelectedOptions([]);
            }, 3000)

        } else {
            setSelectedOptions(newSelection);  // this means only one selected
        }
    }   

    return (
        <div className="game-board">
           { options.map((option) => {

                if (matched.has(option)) {
                    return null;
                }

            const isSelected = selectedOptions.includes(option);
            const isIncorrect = selectedOptions.length === 2 && isSelected && detectInCorrect;
            const isCorrect = selectedOptions.length === 2 && isSelected && !detectInCorrect;

            return (
                <button
                    className={`option ${isSelected && 'selected'} ${isIncorrect && 'incorrect'} ${isCorrect && 'correct'}` }
                    key={option} 
                    onClick={handleSelection}  
                    data-value={option}
                >
                    {option}
                </button>

                // in the above onClick = {() => handleSelection(option)} but this way it will
                // create a new anonymous function everytime.
            )
           }) }
        </div>
    )
}

export default Game;