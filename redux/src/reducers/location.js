// old state = Seattle
// action: { type: "CHANGE_LOCATION", payload: "SLC" }
export default function location(state="Seattle, WA", action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload; // redux flux standard action
    default:
      return state;
  }
}