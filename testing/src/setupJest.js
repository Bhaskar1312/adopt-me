import {enableFetchMocks} from "jest-fetch-mock";

enableFetchMocks();
// it will fake all calls to fetch and we can provide fake API responses. We could provide a whole fake implementation here but let's do it in the testing code itself. If I was doing a lot of fake API calls, I might generate an OpenAPI spec and use that to generate a fake API but that's pretty advance. Start small and grow when you hit barriers.
