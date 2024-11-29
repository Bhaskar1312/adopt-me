import {useState, useEffect, useContext} from "react"; // hooks always start with use
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  console.log(location);
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal); // custom hook
  const [theme, setTheme] = useContext(ThemeContext);


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
        <label htmlFor="theme">
          Theme
          <select value={theme} onChange={(e) => setTheme(e.target.value)}
                  onBlur={(e) => setTheme(e.target.value)}>
            <option value="Peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{backgroundColor: theme}}>Submit</button>
        <Results pets={pets}/>
      </form>
      <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
