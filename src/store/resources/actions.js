//action types
export const ADD_RESOURCE = "ADD_RESOURCE";

// action creator
export const addResource = (name, url, type) => {
  return {
    type: ADD_RESOURCE,
    payload: { name, url, id: Math.floor(Math.random() * 100), type },
  };
};
