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
    default: {
      return state;
    }
  }
}
