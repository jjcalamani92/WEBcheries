import { CategoryLayout } from "../../layouts/category/CategoryLayout";
import {
  HeadingPrimary,
  HeadingSecondary
} from "../../layouts/heading/HeadingLayouts";
import { ProductComponent } from "../product/ProductComponent";
import { StoreComponent } from "./StoresComponent";

export const StorePages = () => {
  return (
    <>
      <HeadingPrimary titleP="Nuestra tienda" />
      <HeadingSecondary title="Nuestras categorias" category="#" />
      <CategoryLayout />

      <HeadingSecondary title="correctores" category="/correctores" />
      <StoreComponent category="correctores" categoryTitle="" />

      <HeadingSecondary
        title="bases de maquillaje"
        category="/bases_de_maquillaje"
      />
      <StoreComponent category="bases_de_maquillaje" categoryTitle="" />

      <HeadingSecondary title="rubores" category="/rubores" />
      <StoreComponent category="rubores" categoryTitle="" />

      <HeadingSecondary
        title="polvos compactos y sueltos"
        category="/polvos_compactos_y_sueltos"
      />
      <StoreComponent category="polvos_compactos_y_sueltos" categoryTitle="" />

      <HeadingSecondary title="iluminadores" category="/iluminadores" />
      <StoreComponent category="iluminadores" categoryTitle="" />
    </>
  );
};
