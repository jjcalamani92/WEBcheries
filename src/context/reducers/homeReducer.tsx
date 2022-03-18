const initialState = {
  sliders: [
    {
      id: 1,
      title: "productos cosmeticos",
      content: "productos nuevos",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646399063/cosmetic/home/home-img-1_a7zfwf.png"
    },
    {
      id: 2,
      title: "productos cosmeticos",
      content: "productos nuevos",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646399064/cosmetic/home/home-img-2_nuxfyy.png"
    },
    {
      id: 3,
      title: "productos cosmeticos",
      content: "productos nuevos",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646399064/cosmetic/home/home-img-3_urfxcg.png"
    }
  ],
  activeSlider: null
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
