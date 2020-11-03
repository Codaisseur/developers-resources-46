import { ADD_RESOURCE } from "./actions";

const initialState = {
  all: [
    {
      id: 1,
      name: "React",
      type: "library",
      tags: ["ui", "jsx", "components", "popular"],
      url: "https://reactjs.org",
    },
    {
      id: 2,
      name: "Alpine",
      type: "library",
      tags: ["ui", "jsx", "components", "popular"],
      url: "https://github.com/alpinejs/alpine",
    },
    {
      id: 3,
      name: "Zdog",
      type: "library",
      tags: ["ui", "jsx", "components", "popular"],
      url: "https://zzz.dog",
    },
    {
      id: 4,
      name: "AST explorer",
      type: "tool",
      tags: ["ui", "jsx", "components", "popular"],
      url: "https://astexplorer.net",
    },
    {
      id: 5,
      name: "Observable",
      type: "website",
      tags: ["ui", "jsx", "components", "popular"],
      url: "https://observablehq.com",
    },
    {
      id: 6,
      name: "unDraw",
      type: "resource",
      tags: ["ui", "jsx", "components", "popular"],
      url: "https://undraw.co/illustrations",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RESOURCE: {
      const newResource = action.payload; // { id, name, url, type }
      const { id, name, url, type } = action.payload;
      return {
        ...state,
        all: [...state.all, { id, name, url, type }],
      };
    }
    case "DELETE_A_RESOURCE": {
      // im going to need an id of the resource => action.payload
      const resourceId = action.payload;
      return {
        ...state,
        all: state.all.filter(r => r.id !== resourceId),
      };
    }
    default: {
      return state;
    }
  }
}
