/**
 * @jest-environment jsdom
 */

import { expect, it, test } from "@jest/globals";
import {render} from "@testing-library/react";
import {renderHook} from "@testing-library/react-hooks";
import useBreedList from "../useBreedList";

function getBreedList(animal) {
  let list;

  function TestComponent() {
    list = useBreedList(animal);
    return null;
  }

  render(<TestComponent />);

  return list;
}

it("should return empty list when there is no animal", async ()=> {
  const [breedList, status] = getBreedList();
  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
});


// easy way using renderHook
test('gives an empty list when there is no animal', async ()=> {
  const {result} = renderHook(()=> useBreedList(""));
  const [breedList, status] = result.current;
  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
});

// fetch mock
test("gives back breeds with an animal", async ()=> {
  const breeds = [
    "Havanese",
    "Bichon Frise",
    "Poodle",
    "Maltese",
    "Golden Retriever",
    "Labrador",
    "Husky"
  ];

  fetch.mockResponseOnce(
    JSON.stringify({
        animal: "dog",
        breeds,
      }
    )
  );
  const {result, waitForNextUpdate } = renderHook(()=>useBreedList("dog"));

  await waitForNextUpdate();

  const [breedList, status] = result.current;
  expect(status).toBe("loading");
  expect(breedList).toEqual(breeds);
});