import {useEffect, useState, useCallback, memo} from "react";


// const ExpensiveComponent = ({compute, count}) => {
const ExpensiveComponent = memo(({compute, count}) => {
    return (
        <div>
            <h1>computed: {compute(count)}</h1>
            <h4>last re-render {new Date().toLocaleTimeString()}</h4>
        </div>
    );
}
); // memo is a higher order component, it only re-renders when props change


const CallbackComponent = () => {
    const [time, setTime] = useState(new Date());
    const [count, setCount] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const fibonacci = (n) => {
        if (n <= 1) {
            return 1;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    return (
        <div>
            <h1>Callback example {time.toLocaleTimeString()}</h1>
            <button onClick={() => setCount(c => c + 1)}>Current count: {count}</button>
            <ExpensiveComponent compute={useCallback(fibonacci, [])} count={count}/>
        </div>
    )
};
export default CallbackComponent;