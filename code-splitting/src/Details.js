import {useParams} from "react-router-dom";
import {Component} from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import * as moment from "moment";

// const Details = () => {
//     const {id} = useParams()
//     return <h2>Hi {id}</h2>;
// }

console.log("moment", moment); // moment is large library, should be code split by parcel

class Details extends Component {
    // cant use Hooks, useParams in class components

    // constructor(props) {
    //     super(props); // pass props to React
    //
    //     this.state = {loading: true}; // manage state in class components
    // }

    state = {loading: true, showModal: false }; // class properties, babel transpiles this to constructor

    async componentDidMount() { // => useEffect(()=>{}, []) in functional components
        // runs after render
        // can make async, need not be async
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.id}`);
        const json = await res.json();
        // this.setState({loading: false});
        // this.setState(json.pets[0]);
/*
        setTimeout(function(){
            console.log("this", this); // this is not the class instance, but the global object
        }, 5000);

        setTimeout(() => {
            console.log("this", this); // this is the class instance, has class context
        })

 */

        // this.setState(Object.assign({loading: false}, json.pets[0])); // object spread operator
        this.setState({loading: false, ...json.pets[0]}); // object spread operator
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    render() {
        if(this.state.loading) {
            return <h2>Loading...</h2>;
        }

        // throw new Error("Error thrown from Details.js");

        const {animal, breed, city, state, description, name, images, showModal } = this.state;

        return (
            <div className={"details"}>
                <Carousel images={images}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                    <button onClick={this.toggleModal}>Adopt {name}</button>
                    <ThemeContext.Consumer>
                        {
                            // how to read context from class component
                            ([theme])=> {
                                return <button onClick={this.toggleModal}
                                    style={{backgroundColor: theme}}>Adopt {name}</button>
                            }
                        }
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {
                        showModal? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {name}?</h1>
                                    <div className="buttons">
                                        <a href="https://bit.ly/pet-adopt">Yes</a>
                                        <button onClick={this.toggleModal}>No</button>
                                        <button onClick={this.toggleModal}>Definitely No</button>
                                    </div>
                                </div>
                            </Modal>
                        ): null}
                    </div>
            </div>

        )
    }

}

const WrappedDetails = () => {
    const {id} = useParams();
    return <ErrorBoundary>
        <Details id={id} />
    </ErrorBoundary>;
}

export default WrappedDetails;
// export default WithRouter(Details); // deprecated, higher order component