import {Link} from "react-router-dom";
import { FC, FunctionComponent } from "react";

interface IProps {
    name: string;
    animal: string;
    breed: string;
    images: string[];
    location: string;
    id: number;
}

const Pet: FC<IProps> = ({name, animal, breed, images, location, id}) => {

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if(images.length) {
        hero = images[0];
    }
  return (
    <div>
        <Link to = {`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                {/*option + minus on mac for M-dashes*/}
                <h2>{animal} - {breed} - {location}</h2>
            </div>
        </Link>

    </div>
  );
};

export default Pet;
