import {useState, useEffect, useDebugValue} from 'react';
import {Animal, BreedListAPIResponse} from "./APIResponseTypes";

const localCache: {
    [index: string]: string[]
} = {}; // use localStorage instead of this

type Status = 'unloaded' | 'loading' | 'loaded';

export default function useBreedList(animal: Animal): [string[], Status] {
    const [breedList, setBreedList] = useState([] as string[]);
    const [status, setStatus] = useState('unloaded' as Status); // IsPending, IsWorking, IsComplete

    useDebugValue("Hi from code, to show in React Dev Tools");

    useEffect(() => {
        if(!animal) setBreedList([]);
        else if(localCache[animal])  setBreedList(localCache[animal]);
        else {
            void requestBreedList(); // async, whatever it returns, make it undefined
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus('loading');

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = (await res.json()) as BreedListAPIResponse;
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
        }
    }, [animal]);
    return [breedList, status];
}