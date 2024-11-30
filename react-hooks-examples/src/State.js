import {useState} from "react";

const StateComponent = () => {
    const [isGreen, setIsGreen] = useState(true);
    // const [dontdothis, setDontdothis] = useState(document.createElement("div")); // expensive operation, dont do this

    return (
        <h1 onClick={() => setIsGreen(!isGreen)} style={{color: isGreen ? "green" : "red"}}>useState example</h1>
    //     jsx-ally issue
    );
}
export default StateComponent;
