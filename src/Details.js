import {useParams} from "react-router-dom";

const Details = () => {
    const {id} = useParams()
    return <h2>Hi {id}</h2>;
}

export default Details;