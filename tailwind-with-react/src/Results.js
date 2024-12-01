import Pet from "./Pet";

const Results = ({ pets }) => {
    // const pets = params.pets;
    return (
        <div
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"    
        >
            {/*anything that goes in curly braces, has to be an expression, const LHS = <expression/any on RHS>; and if is a statement, so put only expressions*/}
            {!pets.length ? (
                    <h2>No Pets Found</h2>
                ) : (
                    pets.map((pet) => (
                        <Pet
                            name={pet.name}
                            animal={pet.animal}
                            breed={pet.breed}
                            key={pet.id}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            id={pet.id}
                        />
                    ))
                )
            }
        </div>
    );
}
export default Results;