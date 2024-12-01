import {useParams} from "react-router-dom";
import {Component} from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary.js";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import {Pet, PetAPIResponse, Animal} from "./APIResponseTypes";


interface Props {
    params: {
        id?: string
    }
}
// class Details extends Component<{params: {id?: string}}> {
class Details extends Component<Props> {

    state = {
        loading: true,
        showModal: false,
        animal: "" as Animal,
        breed: "",
        city: "",
        state: "",
        description: "",
        name: "",
        images: [] as string[],
    }; // class properties, babel transpiles this to constructor

    async componentDidMount() { // => useEffect(()=>{}, []) in functional components
        // runs after render
        // can make async, need not be async
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id ?? ""}`);
        const json = (await res.json()) as PetAPIResponse;


        this.setState({loading: false, ...json.pets[0]}); // object spread operator
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    adopt = () => (window.location.href = "http://bit.ly/pet-adopt"); // window.location works in js

    render() {
        if(this.state.loading) {
            return <h2>Loading...</h2>;
        }


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
    const params = useParams<{id: string}>();
    return <ErrorBoundary>
        <Details params={params} />
    </ErrorBoundary>;
}

export default WrappedDetails;
// export default WithRouter(Details); // deprecated, higher order component