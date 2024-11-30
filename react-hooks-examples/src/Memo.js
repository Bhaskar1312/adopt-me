import { useState, useMemo } from "react";

const fibonacci = (n) => {
    if (n <= 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
    const [num, setNum] = useState(25);
    const [isGreen, setIsGreen] = useState(true);
    const fib = useMemo(() => fibonacci(num), [num]); // only recompute when num changes
    // ()=> fibonacci(num) doesn't get called, dont mistake it for just fibonacci(num) which get called
    // const fib = fibonacci(num); // recompute every time the component renders

    return (
        <div>
            <h1
                style={{color: isGreen ? "limegreen" : "crimson"}}
                onClick={()=> setIsGreen(g => !g)}>useMemo example</h1>
            <h2>Fibonnaci {num} is {fib}</h2>
            <button onClick={() => setNum(n => n + 1)}>+</button>
        </div>
    );
};
export default MemoComponent;