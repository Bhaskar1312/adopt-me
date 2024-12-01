import {useRef, useState, useLayoutEffect } from "react";

const LayoutEffectComponent = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const el = useRef();

    useLayoutEffect(() => {
        setWidth(el.current.clientWidth);
        setHeight(el.current.clientHeight);
    });

    return (
        <div>
            <h1>useLayoutEffect Example</h1>
            <h2>textarea width: {width}px</h2>
            <h2>textarea height: {height}px</h2>
            <textarea ref={el}
                      onClick={()=>setWidth(0)}
                      ></textarea>
        </div>
    );
}
export default LayoutEffectComponent;