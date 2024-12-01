import {Link} from "react-router-dom";

const Pet = ({name, animal, breed, images, location, id}) => {

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if(images.length) {
        hero = images[0];
    }
  return (
    <div>
        <Link to = {`/details/${id}`} className="relative block">
            <div>
                <img src={hero} alt={name} />
            </div>
            <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
                <h1>{name}</h1>
                {/*option + minus on mac for M-dashes*/}
                <h2>{animal} - {breed} - {location}</h2>
            </div>
        </Link>

    </div>
  );
};

export default Pet;
