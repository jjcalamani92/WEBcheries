import { types } from "../types/types";
import nextId from "react-id-generator";
const initialState = {
  products: [
    {
      id: nextId(),
      title: "Corrector en Barra Tono 1",
      titleURL: "corrector_en_barra_tono_1",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647455289/cosmetic/product/maquillaje/correctores/item01/20011738-01_luojoq.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647455345/cosmetic/product/maquillaje/correctores/item01/20011738-02_ti30jt.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647455402/cosmetic/product/maquillaje/correctores/item01/20011738-03_jv23nt.jpg"
      ],
      description:
        "Un corrector en barra de textura cremosa ideal para cubrir ojeras, manchas en la piel e imperfecciones, y lucir una piel mas uniforme durante perfecto todo el dia. Además, se desliza suavemente por tu piel.",
      material: "madera pino procesada",
      category: "correctores",
      oldPrice: "560",
      price: "11.7"
    },
    {
      id: nextId(),
      title: "Corrector en Barra Tono 2-3",
      titleURL: "corrector_en_barra_tono_2-3",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456123/cosmetic/product/maquillaje/correctores/item02/20011739-01_semmjw.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456185/cosmetic/product/maquillaje/correctores/item02/20011739-02_d0jq3n.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456248/cosmetic/product/maquillaje/correctores/item02/20011739-03_ykresd.jpg"
      ],
      description:
        "Un corrector en barra de textura cremosa ideal para cubrir ojeras, manchas en la piel e imperfecciones, y lucir una piel mas uniforme durante perfecto todo el dia. Además, se desliza suavemente por tu piel.",
      material: "madera pino procesada",
      category: "correctores",
      oldPrice: "560",
      price: "11.7"
    },
    {
      id: nextId(),
      title: "Corrector en Barra Tono 4-5",
      titleURL: "corrector_en_barra_tono_4-5",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456358/cosmetic/product/maquillaje/correctores/item03/20011740-01_zblrug.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456435/cosmetic/product/maquillaje/correctores/item03/20011740-02_wdaq4f.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456513/cosmetic/product/maquillaje/correctores/item03/20011740-03_g4ixur.jpg"
      ],
      description:
        "Un corrector en barra de textura cremosa ideal para cubrir ojeras, manchas en la piel e imperfecciones, y lucir una piel mas uniforme durante perfecto todo el dia. Además, se desliza suavemente por tu piel.",
      material: "madera pino procesada",
      category: "correctores",
      oldPrice: "560",
      price: "11.7"
    },
    {
      id: nextId(),
      title: "Corrector en Barra Tono 6-7",
      titleURL: "corrector_en_barra_tono_6-7",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456358/cosmetic/product/maquillaje/correctores/item03/20011740-01_zblrug.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456672/cosmetic/product/maquillaje/correctores/item04/20012026-02_jbjnpv.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647456753/cosmetic/product/maquillaje/correctores/item04/20012026-03_zqzpiq.jpg"
      ],
      description:
        "Un corrector en barra de textura cremosa ideal para cubrir ojeras, manchas en la piel e imperfecciones, y lucir una piel mas uniforme durante perfecto todo el dia. Además, se desliza suavemente por tu piel.",
      material: "madera pino procesada",
      category: "correctores",
      oldPrice: "560",
      price: "11.7"
    },
    {
      id: nextId(),
      title: "Base Líquida Antiedad Elixir de Vida 3N",
      titleURL: "base_liquida_antiedad_elixir_de_vida_3n",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647457294/cosmetic/product/maquillaje/bases_de_maquillaje/item03/20012930-01_giclu6.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647457188/cosmetic/product/maquillaje/bases_de_maquillaje/item03/20012930-03_cjfdhi.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647457294/cosmetic/product/maquillaje/bases_de_maquillaje/item03/20012930-01_giclu6.jpg"
      ],
      description:
        "Una base líquida antiedad de alta cobertura que fusiona maquillaje con tratamiento cosmético. Además, actúa contra los principales signos de envejecimiento y deja tu piel radiante.",
      material: "madera pino procesada",
      category: "bases_de_maquillaje",
      oldPrice: "560",
      price: "15"
    },
    {
      id: nextId(),
      title: "Base Líquida Antiedad Elixir de Vida 2N",
      titleURL: "base_liquida_antiedad_elixir_de_vida_2n",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647457815/cosmetic/product/maquillaje/bases_de_maquillaje/item04/20012929-01_nyvtya.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647457915/cosmetic/product/maquillaje/bases_de_maquillaje/item04/20012929-03_tervet.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647457815/cosmetic/product/maquillaje/bases_de_maquillaje/item04/20012929-01_nyvtya.jpg"
      ],
      description:
        "Una base líquida antiedad de alta cobertura que fusiona maquillaje con tratamiento cosmético. Además, actúa contra los principales signos de envejecimiento y deja tu piel radiante.",
      material: "madera pino procesada",
      category: "bases_de_maquillaje",
      oldPrice: "560",
      price: "15"
    },
    {
      id: nextId(),
      title: "Base Líquida Antiedad Elixir de Vida 3C",
      titleURL: "base_liquida_antiedad_elixir_de_vida_3c",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647458007/cosmetic/product/maquillaje/bases_de_maquillaje/item05/20012928-01_vslk76.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647458102/cosmetic/product/maquillaje/bases_de_maquillaje/item05/20012928-03_tqtyry.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647458007/cosmetic/product/maquillaje/bases_de_maquillaje/item05/20012928-01_vslk76.jpg"
      ],
      description:
        "Una base líquida antiedad de alta cobertura que fusiona maquillaje con tratamiento cosmético. Además, actúa contra los principales signos de envejecimiento y deja tu piel radiante.",
      material: "madera pino procesada",
      category: "bases_de_maquillaje",
      oldPrice: "560",
      price: "15"
    },
    {
      id: nextId(),
      title: "Base Ultra Ligera Libre de Grasa 6N",
      titleURL: "base_ultra_ligera_libre_de_grasa_6N",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295626/cosmetic/product/maquillaje/bases_de_maquillaje/item02/20012510-01_mtekcw.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295656/cosmetic/product/maquillaje/bases_de_maquillaje/item02/20012510-02_mr2fkd.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295687/cosmetic/product/maquillaje/bases_de_maquillaje/item02/20012510-03_bmtil9.jpg"
      ],
      description:
        "Una base ultra ligera libre de grasa con SPF 20 y ácido hialurónico que brinda un acabado mate súper natural para tu maquillaje. De cobertura media modulable.",
      material: "madera pino procesada",
      category: "bases_de_maquillaje",
      oldPrice: "560",
      price: "15"
    },
    {
      id: nextId(),
      title: "Base Ultra Ligera Libre de Grasa 5C",
      titleURL: "base_ultra_ligera_libre_de_grasa_5C",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295626/cosmetic/product/maquillaje/bases_de_maquillaje/item02/20012510-01_mtekcw.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295656/cosmetic/product/maquillaje/bases_de_maquillaje/item02/20012510-02_mr2fkd.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295687/cosmetic/product/maquillaje/bases_de_maquillaje/item02/20012510-03_bmtil9.jpg"
      ],
      description:
        "Una base ultra ligera libre de grasa con SPF 20 y ácido hialurónico que brinda un acabado mate súper natural para tu maquillaje. De cobertura media modulable.",
      material: "madera pino procesada",
      category: "bases_de_maquillaje",
      oldPrice: "560",
      price: "15"
    },
    {
      id: nextId(),
      title: "Rubor Compacto Rosa Irresistible",
      titleURL: "rubor_compacto_rosa_irresistible",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647458895/cosmetic/product/maquillaje/rubores/item01/20011714-01_ircvnc.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647459037/cosmetic/product/maquillaje/rubores/item01/20011714-02_anffdi.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647459180/cosmetic/product/maquillaje/rubores/item01/20011714-03_ejmhys.jpg"
      ],
      description:
        "Para realizar con naturalidad tus expresiones, el Rubor Compacto es el producto que necesitas. Confía en su fórmula y solo deja que las partículas hagan su trabajo al tocar tu piel. ¡Prepárate para lucir un cutis lleno de vida!",
      material: "madera pino procesada",
      category: "rubores",
      oldPrice: "560",
      price: "18"
    },
    {
      id: nextId(),
      title: "Rubor Compacto Champagne",
      titleURL: "rubor_compacto_champagne",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647459322/cosmetic/product/maquillaje/rubores/item02/20011692-01_z4fbza.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647459468/cosmetic/product/maquillaje/rubores/item02/20011692-02_shijye.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295687/cosmetic/product/maquillaje/bases_de_maquillaje/item02/20012510-03_bmtil9.jpg"
      ],
      description:
        "Para realizar con naturalidad tus expresiones, el Rubor Compacto es el producto que necesitas. Confía en su fórmula y solo deja que las partículas hagan su trabajo al tocar tu piel. ¡Prepárate para lucir un cutis lleno de vida!",
      material: "madera pino procesada",
      category: "rubores",
      oldPrice: "560",
      price: "18"
    },
    {
      id: nextId(),
      title: "Rubor Compacto Bronzage",
      titleURL: "rubor_compacto_bronzage",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647459764/cosmetic/product/maquillaje/rubores/item03/20011691-01_gxyke1.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647459925/cosmetic/product/maquillaje/rubores/item03/20011691-02_hcyu8z.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647460073/cosmetic/product/maquillaje/rubores/item03/20011691-03_ay9drj.jpg"
      ],
      description:
        "Para realizar con naturalidad tus expresiones, el Rubor Compacto es el producto que necesitas. Confía en su fórmula y solo deja que las partículas hagan su trabajo al tocar tu piel. ¡Prepárate para lucir un cutis lleno de vida!",
      material: "madera pino procesada",
      category: "rubores",
      oldPrice: "560",
      price: "18"
    },
    {
      id: nextId(),
      title: "Rubor Compacto Petal Rose",
      titleURL: "rubor_compacto_petal_rose",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647460222/cosmetic/product/maquillaje/rubores/item04/20011690-01_adghud.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647460374/cosmetic/product/maquillaje/rubores/item04/20011690-02_bne2lw.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647460526/cosmetic/product/maquillaje/rubores/item04/20011690-03_pucshb.jpg"
      ],
      description:
        "Para realizar con naturalidad tus expresiones, el Rubor Compacto es el producto que necesitas. Confía en su fórmula y solo deja que las partículas hagan su trabajo al tocar tu piel. ¡Prepárate para lucir un cutis lleno de vida!",
      material: "madera pino procesada",
      category: "rubores",
      oldPrice: "560",
      price: "18"
    },
    {
      id: nextId(),
      title: "Bronceador y Contour Beso de Sol & Chocolate",
      titleURL: "bronceador_y_contour_beso_de_sol_&_chocolate",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647460677/cosmetic/product/maquillaje/rubores/item05/20012937-01_osya3a.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647460374/cosmetic/product/maquillaje/rubores/item04/20011690-02_bne2lw.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647460526/cosmetic/product/maquillaje/rubores/item04/20011690-03_pucshb.jpg"
      ],
      description:
        "Para realizar con naturalidad tus expresiones, el Rubor Compacto es el producto que necesitas. Confía en su fórmula y solo deja que las partículas hagan su trabajo al tocar tu piel. ¡Prepárate para lucir un cutis lleno de vida!",
      material: "madera pino procesada",
      category: "rubores",
      oldPrice: "560",
      price: "18"
    },
    {
      id: nextId(),
      title: "polvos compactos tono 1",
      titleURL: "polvos_compactos_tono_1",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461022/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item01/20011771-01_agd5y1.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461178/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item01/20011771-03_szl2ox.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461022/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item01/20011771-01_agd5y1.jpg"
      ],
      description:
        "Los Polvos Compactos absorben el exceso de grasa de tu cutis y le dan un acabado mate. Llévalos siempre contigo y dile adiós al brillo en todo momento y lugar.",
      material: "madera pino procesada",
      category: "polvos_compactos_y_sueltos",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "polvos compactos tono 2-3",
      titleURL: "polvos_compactos_tono_2-3",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461334/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item02/20011772-01_hysrk7.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461493/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item02/20011772-03_avqmll.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461334/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item02/20011772-01_hysrk7.jpg"
      ],
      description:
        "Los Polvos Compactos absorben el exceso de grasa de tu cutis y le dan un acabado mate. Llévalos siempre contigo y dile adiós al brillo en todo momento y lugar.",
      material: "madera pino procesada",
      category: "polvos_compactos_y_sueltos",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "polvos compactos tono 4-5",
      titleURL: "polvos_compactos_tono_4-5",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461651/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item03/20011773-01_mwslwr.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461811/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item03/20011773-03_wjylly.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461651/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item03/20011773-01_mwslwr.jpg"
      ],
      description:
        "Los Polvos Compactos absorben el exceso de grasa de tu cutis y le dan un acabado mate. Llévalos siempre contigo y dile adiós al brillo en todo momento y lugar.",
      material: "madera pino procesada",
      category: "polvos_compactos_y_sueltos",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "polvos compactos tono 6-7",
      titleURL: "polvos_compactos_tono_6-7",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461651/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item03/20011773-01_mwslwr.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461811/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item03/20011773-03_wjylly.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461651/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item03/20011773-01_mwslwr.jpg"
      ],
      description:
        "Los Polvos Compactos absorben el exceso de grasa de tu cutis y le dan un acabado mate. Llévalos siempre contigo y dile adiós al brillo en todo momento y lugar.",
      material: "madera pino procesada",
      category: "polvos_compactos_y_sueltos",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "Polvos Sueltos Minerales Tono 2-3",
      titleURL: "polvos_sueltos_minerales_tono_2-3",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461970/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item04/20012023-01_c7vieg.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647462180/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item04/20012023-03_dt9w0s.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647461970/cosmetic/product/maquillaje/polvos_compactos_y_sueltos/item04/20012023-01_c7vieg.jpg"
      ],
      description:
        "Los Polvos Compactos absorben el exceso de grasa de tu cutis y le dan un acabado mate. Llévalos siempre contigo y dile adiós al brillo en todo momento y lugar.",
      material: "madera pino procesada",
      category: "polvos_compactos_y_sueltos",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "Iluminador en polvo Natural Glow",
      titleURL: "iluminador_en_polvo_natural_glow",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294700/cosmetic/product/maquillaje/iluminadores/item01/20012307-01_me9qvu.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294714/cosmetic/product/maquillaje/iluminadores/item01/20012307-02_con1pf.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294723/cosmetic/product/maquillaje/iluminadores/item01/20012307-03_qa91in.jpg"
      ],
      description:
        "Un iluminador líquido que deja un brillo súper natural en tu rostro, haciendo que luzca con apariencia joven, fresca y saludable. Ideal para lograr diferentes looks con tu maquillaje. ¡Súper versátil!",
      material: "madera pino procesada",
      category: "iluminadores",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "Iluminador en polvo Natural Glow-2",
      titleURL: "iluminador_en_polvo_natural_glow-2",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294815/cosmetic/product/maquillaje/iluminadores/item02/20012308-01_yuqn6q.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294825/cosmetic/product/maquillaje/iluminadores/item02/20012308-02_yq1kht.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294833/cosmetic/product/maquillaje/iluminadores/item02/20012308-03_qj1jcq.jpg"
      ],
      description:
        "Un iluminador líquido que deja un brillo súper natural en tu rostro, haciendo que luzca con apariencia joven, fresca y saludable. Ideal para lograr diferentes looks con tu maquillaje. ¡Súper versátil!",
      material: "madera pino procesada",
      category: "iluminadores",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "Iluminador en polvo Natural Glow-3",
      titleURL: "iluminador_en_polvo_natural_glow-3",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294941/cosmetic/product/maquillaje/iluminadores/item03/20012743-01_dnhhg5.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294941/cosmetic/product/maquillaje/iluminadores/item03/20012743-01_dnhhg5.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647294941/cosmetic/product/maquillaje/iluminadores/item03/20012743-01_dnhhg5.jpg"
      ],
      description:
        "Un iluminador líquido que deja un brillo súper natural en tu rostro, haciendo que luzca con apariencia joven, fresca y saludable. Ideal para lograr diferentes looks con tu maquillaje. ¡Súper versátil!",
      material: "madera pino procesada",
      category: "iluminadores",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "Iluminador en polvo Natural Glow-4",
      titleURL: "iluminador_en_polvo_natural_glow-4",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295006/cosmetic/product/maquillaje/iluminadores/item04/20012520-01_v6dv1z.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295030/cosmetic/product/maquillaje/iluminadores/item04/20012520-03_ulzr0y.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295018/cosmetic/product/maquillaje/iluminadores/item04/20012520-02_n0u5oc.jpg"
      ],
      description:
        "Un iluminador líquido que deja un brillo súper natural en tu rostro, haciendo que luzca con apariencia joven, fresca y saludable. Ideal para lograr diferentes looks con tu maquillaje. ¡Súper versátil!",
      material: "madera pino procesada",
      category: "iluminadores",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "Iluminador en polvo Natural Glow-5",
      titleURL: "iluminador_en_polvo_natural_glow-5",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295098/cosmetic/product/maquillaje/iluminadores/item05/20012521-01_ivhqnv.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295122/cosmetic/product/maquillaje/iluminadores/item05/20012521-02_g3s9xr.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295098/cosmetic/product/maquillaje/iluminadores/item05/20012521-01_ivhqnv.jpg"
      ],
      description:
        "Un iluminador líquido que deja un brillo súper natural en tu rostro, haciendo que luzca con apariencia joven, fresca y saludable. Ideal para lograr diferentes looks con tu maquillaje. ¡Súper versátil!",
      material: "madera pino procesada",
      category: "iluminadores",
      oldPrice: "560",
      price: "17"
    },
    {
      id: nextId(),
      title: "Iluminador en polvo Natural Glow-6",
      titleURL: "iluminador_en_polvo_natural_glow-6",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295203/cosmetic/product/maquillaje/iluminadores/item06/20012158-01_owyv8f.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295221/cosmetic/product/maquillaje/iluminadores/item06/20012158-02_kri1mu.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647295248/cosmetic/product/maquillaje/iluminadores/item06/20012158-03_axvru9.jpg"
      ],
      description:
        "Un iluminador líquido que deja un brillo súper natural en tu rostro, haciendo que luzca con apariencia joven, fresca y saludable. Ideal para lograr diferentes looks con tu maquillaje. ¡Súper versátil!",
      material: "madera pino procesada",
      category: "iluminadores",
      oldPrice: "560",
      price: "17"
    }
  ],
  activeProduct: null,
  index: 0
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.setImage:
      return {
        ...state,
        index: action.i
      };
    default:
      return state;
  }
};
