import {useState, useEffect } from "react"; // hooks always start with use
import useBreedList from "./useBreedList";
import Results from "./Results";
import { useDispatch, useSelector } from "react-redux";
import changeLocation from "./actionCreators/changeLocation";
import changeAnimal from "./actionCreators/changeAnimal";
import changeBreed from "./actionCreators/changeBreed";
import changeTheme from "./actionCreators/changeTheme";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {

  const animal = useSelector(state=> state.animal);
  const location = useSelector(state=> state.location);
  const breed = useSelector(({ breed }) => breed); // same as above
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch(); // gets changeLocation action, passes to combineReducers, then passes to location reducer
  const [pets, setPets] = useState([]);

  const [breeds] = useBreedList(animal);

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
            onChange={(event) => dispatch(changeLocation(event.target.value))}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              dispatch(changeAnimal(e.target.value))
            }}
            onBlur={(e) => {
              dispatch(changeAnimal(e.target.value))
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
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
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
          <select value={theme}
                  onChange={(e) => dispatch(changeTheme(e.target.value))}
                  onBlur={(e) =>  dispatch(changeTheme(e.target.value))}>
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
