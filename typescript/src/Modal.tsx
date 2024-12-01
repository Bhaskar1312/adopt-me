// portals and refs for modals

import {useEffect, useRef, FunctionComponent, MutableRefObject} from "react";
import {createPortal} from "react-dom";

const Modal: FunctionComponent = ({children} ) => {
    const eleRef: MutableRefObject<HTMLDivElement | null>  = useRef(null); // reference to the element
    // I have one value that I want to keep track of, and I want to keep track of it across renders, precisely the same element
    if(!eleRef.current) {
        eleRef.current = document.createElement("div"); // if it is not referring to same element, memory leak every time different element is created
        // eleRef is a frozen object, it only has a current property, which is mutable
    }

    useEffect(() => {
       const modalRoot = document.getElementById("modal");
       if(!modalRoot || !eleRef.current) {
         return;
       }
       modalRoot.appendChild(eleRef.current);

       return ()=> {
         if (eleRef.current){
           modalRoot.removeChild(eleRef.current);
         }
       }// cleanup function, remove the element when unmounted otherwise leak; === componentDidUnmount

    }, []); // only run once, when the component is mounted

    return createPortal(<div>{children}</div>, eleRef.current);
}

export default Modal;