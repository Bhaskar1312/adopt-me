import {useParams} from "react-router-dom";
import {Component} from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// const Details = () => {
//     const {id} = useParams()
//     return <h2>Hi {id}</h2>;
// }

class Details extends Component {
    // cant use Hooks, useParams in class components

    // constructor(props) {
    //     super(props); // pass props to React
    //
    //     this.state = {loading: true}; // manage state in class components
    // }

    state = {loading: true}; // class properties, babel transpiles this to constructor

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

    render() {
        if(this.state.loading) {
            return <h2>Loading...</h2>;
        }

        // throw new Error("Error thrown from Details.js");

        const {animal, breed, city, state, description, name, images } = this.state;

        return (
            <div className={"details"}>
                <Carousel images={images}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
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