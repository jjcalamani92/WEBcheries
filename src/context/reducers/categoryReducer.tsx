import nextId from "react-id-generator";

const initialState = {
  categories: [
    {
      id: nextId(),
      title: "correctores",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647455026/cosmetic/category/1508034_nvdwtp.png"
    },
    {
      id: nextId(),
      title: "bases de maquillaje",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647457504/cosmetic/category/5888485_fdahm6.png"
    },
    {
      id: nextId(),
      title: "polvos compactos y sueltos",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647457593/cosmetic/category/4724032_bqgl72.png"
    }
  ],
  activeCategory: null
};

export const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
