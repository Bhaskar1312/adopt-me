import {useState, useEffect} from "react"; // hooks always start with use
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  console.log(location);
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal); // custom hook


  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}` // closure, referring to animal in setAnimal useState hook line
    );
    const json = await res.json();

    setPets(json.pets);
  }

  // if(true) { // dont use conditional hooks, ordering problems
  //   const [hook, setHook] = useState("");
  // }

  return (
    <div className="search-params">
      <form
          onSubmit = { (e) => {
            e.preventDefault(); // submit form to itself, refresh the page
            requestPets(); // magic of closures
          }}
      >
        <label htmlFor="location">
          Location
          {/* {location} */}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((allBread) => (
              <option key={allBread} value={allBread}>
                {allBread}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
        <Results pets={pets}/>
      </form>
      <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
