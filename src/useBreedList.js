import {useState, useEffect} from 'react';

const localCache = {}; // use localStorage instead of this

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded'); // IsPending, IsWorking, IsComplete

    useEffect(() => {
        if(!animal) setBreedList([]);
        else if(localCache[animal])  setBreedList(localCache[animal]);
        else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus('loading');

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
        }
    }, [animal]);
    return [breedList, status];
}