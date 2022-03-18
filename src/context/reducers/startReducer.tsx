const initialState = {
  links: ["nosotros", "productos", "portafolio", "contacto", "blogs"],
  productos:["monofocales", "maquillaje", "bifocales"],
  date:{
    name: 'cheries',
    domain: 'cheries',
    logo: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647453014/cosmetic/0059_t_cherie_s-beauty-logo_11_gb24c5.png',
    phoneNumber: '68125377',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d478.12206819657405!2d-68.14811629921392!3d-16.527281696176196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf63438207b7%3A0x32a48a41599e5d72!2sGran%20Plaza%2C%20Av.%20B%2C%20El%20Alto!5e0!3m2!1ses!2sbo!4v1646946478230!5m2!1ses!2sbo',


  },
  activeLinks: null
};

export const startReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
