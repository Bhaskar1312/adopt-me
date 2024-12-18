import {useState, useRef } from "react";

const RefComponent = () => {
    const [stateNumber, setStateNumber] = useState(0);
    const numRef = useRef(0); // useRef is like useState, but it doesnt cause re-render

    function incrementAndDelayLogging() {
        setStateNumber(s => s+1);
        // setStateNumber(stateNumber+1);
        numRef.current++;
        setTimeout(()=> alert(`state: ${stateNumber} | ref: ${numRef.current}`), 1000);
    }

    return (
        <div>
            <h1>useRef example</h1>
            <button onClick={incrementAndDelayLogging}>delay logging</button>
            <h4>state: {stateNumber}</h4>
            <h4>ref: {numRef.current}</h4>
        </div>
    );
}

export default RefComponent;