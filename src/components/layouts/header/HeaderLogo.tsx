import { faCode, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../../../context/action/Menu";
import { closeSearch } from "../../../context/action/Search";
import { closeCart } from "../../../context/action/Cart";

interface State {
  Menu: any;
  Search: any;
  Cart: any;
}

interface Props {
  logo: String;
}

export const HeaderLogo = ({ logo }: Props) => {
  const { menu } = useSelector((state: State) => state.Menu);
  const { search } = useSelector((state: State) => state.Search);
  const { cart } = useSelector((state: State) => state.Cart);
  const dispatch = useDispatch();

  const handleClose = () => {
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
    <div className="logo">
      <NavLink onClick={handleClose} to="/" className="logo">
        {/* <FontAwesomeIcon className="icon" icon={faCode} /> */}
        <img src={`${logo}`} alt="" />
      </NavLink>
    </div>
  );
};
