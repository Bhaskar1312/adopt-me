import {useParams} from "react-router-dom";
import {Component} from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { connect } from "react-redux";

// const Details = () => {
//     const {id} = useParams()
//     return <h2>Hi {id}</h2>;
// }

class Details extends Component {
    state = {loading: true, showModal: false }; // class properties, babel transpiles this to constructor

    async componentDidMount() { // => useEffect(()=>{}, []) in functional components
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        const json = await res.json();
        
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

                    <button 
                        onClick={this.toggleModal}
                        style={{backgroundColor: this.props.theme}}
                    >Adopt {name}</button>

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

const mapStateToProps = ({theme}) => ({theme});
const ReduxWrappedDetails = connect(mapStateToProps)(Details);

const WrappedDetails = () => {
    const params = useParams();
    return <ErrorBoundary>
        <ReduxWrappedDetails params={params}
        />
    </ErrorBoundary>;
}

export default WrappedDetails;