// import { Component }   from "react";
import React from "react";

class Carousel extends React.Component {

    // constructor(props) {
    //     super(this.props);
    //     this.handleIndexClick = this.handleIndexClick.bind(this);
    // }

    // handleIndexClick(event)  {
    //    console.log("this", this); // this is undefined, because it is not bound to the class instance
    // }

    // handleIndexClick = (event) => {
    //     console.log("this", this); // this is the class instance, because it is an arrow function
    // +event.target.dataset.something1 refers to data-something1 attribute in the img tag, this is not react thing, but a DOM thing
    // add unary + to convert to number
    // }

    state = {
        active : 0,
    }

    static defaultProps = { // default props for class components
        // static because, it is a class property, not an instance property
        images: [
            "http://pets-images.dev-apis.com/pets/none.jpg"
        ]
    }

    render() {
        const { active } = this.state; // comes from state
        const { images } = this.props; // comes from immutable props or default props

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img /* jsx-a11y/no-noninteractive-element-interactions error */
                            key={photo}
                            src={photo}
                            /*data-something1={index}*/
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                            onClick={() => {
                                // If it was keyboard handler, you'd do an onChange or onKeyUp, etc. handler.
                                this.setState({active: index});
                            }}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default Carousel;