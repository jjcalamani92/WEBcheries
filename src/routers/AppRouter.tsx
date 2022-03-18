import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPages } from "../components/pages/contact/ContactPages";
import { HomePages } from "../components/pages/home/HomePages";
import { Layout } from "./Layout";
import { ProductsPages } from "../components/pages/product/ProductsPages";
import ScrollToTop from "../helpers/ScrollToTop";
import { StorePages } from "../components/pages/store/StorePages";
import { DetailLayout } from "../components/layouts/details/DetailLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path="tienda" element={<StorePages />} />
            <Route
              path="correctores"
              element={
                <ProductsPages
                  title="correctores"
                  category="correctores"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route path="correctores/:name" element={<DetailLayout />} />
            <Route
              path="leggins"
              element={
                <ProductsPages
                  title="leggins"
                  category="leggins"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route
              path="bases_de_maquillaje/:name"
              element={<DetailLayout />}
            />
            <Route
              path="bases_de_maquillaje"
              element={
                <ProductsPages
                  title="bases de maquillaje"
                  category="bases_de_maquillaje"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route
              path="bases_de_maquillaje/:name"
              element={<DetailLayout />}
            />
            <Route
              path="rubores"
              element={
                <ProductsPages
                  title="rubores"
                  category="rubores"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route path="rubores/:name" element={<DetailLayout />} />
            <Route
              path="polvos_compactos_y_sueltos"
              element={
                <ProductsPages
                  title="polvos compactos y sueltos"
                  category="polvos_compactos_y_sueltos"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route
              path="polvos_compactos_y_sueltos/:name"
              element={<DetailLayout />}
            />

            <Route
              path="iluminadores"
              element={
                <ProductsPages
                  title="iluminadores"
                  category="iluminadores"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route path="iluminadores/:name" element={<DetailLayout />} />

            <Route
              path="para-el-hogar"
              element={
                <ProductsPages
                  title="para el hogar"
                  category="para-el-hogar"
                  categoryTitle="para el hogar"
                />
              }
            />
            <Route path="para-el-hogar/:name" element={<DetailLayout />} />

            <Route
              path="para-el-escritorio"
              element={
                <ProductsPages
                  title="para el escritorio"
                  category="para-el-escritorio"
                  categoryTitle="para el escritorio"
                />
              }
            />
            <Route path="para-el-escritorio/:name" element={<DetailLayout />} />

            <Route
              path="para-la-cocina"
              element={
                <ProductsPages
                  title="para la cocina"
                  category="para-la-cocina"
                  categoryTitle="para la cocina"
                />
              }
            />
            <Route path="para-la-cocina/:name" element={<DetailLayout />} />

            <Route path="contacto" element={<ContactPages />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
