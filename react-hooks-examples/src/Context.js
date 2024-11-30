import {createContext, useState, useContext } from 'react';
const UserContext = createContext([
        {
            firstName: "Bob",
            lastName: "Bobberson",
            suffix: 1,
            email: "bob.bobberson@mail.com"
        },
        (obj)=> obj
]);

const ContextComponent = () => {
    const userState = useState({
        firstName: "James",
        lastName: "Jameson",
        suffix: 1,
        email: "jamesjameson@example.com"
    });

    return (
        <UserContext.Provider value={userState}>
            <div>
                <h1>first level</h1>
                <LevelTwo />
            </div>

        </UserContext.Provider>
    )
}
export default ContextComponent;

const LevelTwo = () => {
    return (
        <div>
            <h2>second level</h2>
            <LevelThree/>
        </div>
    );
};

const LevelThree = () => {
    return (
        <div>
            <h3>third level</h3>
            <LevelFour />
        </div>
    );
};

const LevelFour = () => {
    return (
        <div>
            <h4>fourth level</h4>
            <LevelFive />
        </div>
    );
};

const LevelFive = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            <h5>fifth level</h5>
            <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
            <button
                onClick={() => {
                    setUser(Object.assign({}, user, {suffix: user.suffix + 1}));
                }}
            >
                Increment
            </button>
        </div>
    );
};