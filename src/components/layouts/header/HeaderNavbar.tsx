import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../../../context/action/Menu";
import { closeSearch } from "../../../context/action/Search";
import { closeCart } from "../../../context/action/Cart";
import { setImage } from "../../../context/action/Product";

interface State {
  Menu: any;
  Search: any;
  Cart: any;
}

export const HeaderNavbar = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const { search } = useSelector((state: State) => state.Search);
  const { cart } = useSelector((state: State) => state.Cart);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setImage(0));
    if (menu || search || cart) {
      if (menu) {
        dispatch(closeMenu());
      }
      if (cart) {
        dispatch(closeCart());
      }
      if (search) {
        dispatch(closeSearch());
      }
    }
  };
  return (
    <nav className={menu ? "navbar active" : "navbar"}>
      <ul>
        <li>
          <NavLink onClick={handleClose} to="tienda">
            tienda
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="#">
            maquillaje +
          </NavLink>
          <ul>
            <li>
              <NavLink onClick={handleClose} to="correctores">
                correctores
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="bases_de_maquillaje">
                bases de maquillaje
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="polvos_compactos_y_sueltos">
                polvos compactos y sueltos
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="rubores">
                rubores
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="iluminadores">
                iluminadores
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink onClick={handleClose} to="#">
            cuidado personal +
          </NavLink>
          <ul>
            <li>
              <NavLink onClick={handleClose} to="protectores_solares">
                protectores solares
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="cremas_hidratantes_y_oleos">
                cremas hidratantes y oleos
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="exfoliantes_corporales">
                exfoliantes corporales
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="colonias">
                colonias
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="joyeria">
                joyeria
              </NavLink>
            </li>
          </ul>
        </li>
        {/* 
        <li>
          <NavLink onClick={handleClose} to="#">ocaciones +</NavLink>
          <ul>
            <li>
              <NavLink onClick={handleClose} to="#">regalos para mujer</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="#">regalos para hombre</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="#">cumpleaños</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="#">graduaciones</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="#">intercambio de regalos</NavLink>
            </li>
            
          </ul>
        </li> */}
        {/* <li>
          <NavLink onClick={handleClose} to="#">compras al por mayor</NavLink>
        </li> */}
        {/* <li>
          <NavLink onClick={handleClose} to="contacto">Contacto</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};
