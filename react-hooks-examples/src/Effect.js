import {useState, useEffect } from "react";

const EffectComponent = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect( ()=> {
        const timer = setTimeout(() => setTime(new Date().toLocaleTimeString()), 5000);
        console.log(timer);
        return ()=> clearTimeout(timer); // cleanup function, remove the element when unmounted
    // }, [time]); // runs every time time changes
    // }, []); // wont run again, runs only once
    }); // any time, any hook data changes, it will run the effect again

    return (<h1>useEffect example: {time}</h1>);
}
export default EffectComponent;