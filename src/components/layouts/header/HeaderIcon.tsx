import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faSearch,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { closeMenu, openMenu } from "../../../context/action/Menu";
import { openSearch, closeSearch } from "../../../context/action/Search";
import { closeCart, openCart } from "../../../context/action/Cart";

interface State {
  Menu: any;
  Search: any;
  Cart: any;
}

export const HeaderIcon_1 = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const { search } = useSelector((state: State) => state.Search);
  const { cart } = useSelector((state: State) => state.Cart);

  const dispatch = useDispatch();
  // const { menu } = useSelector((state: State) => state.Menu);
  const handleOpenMenu = () => {
    dispatch(openMenu());
    if (search) {
      dispatch(closeSearch());
    }
    if (cart) {
      dispatch(closeCart());
    }
  };
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };
  const handleOpenSearch = () => {
    dispatch(openSearch());
    if (menu) {
      dispatch(closeMenu());
    }
    if (cart) {
      dispatch(closeCart());
    }
  };
  const handleCloseSearch = () => {
    dispatch(closeSearch());
  };
  const handleOpenCart = () => {
    dispatch(openCart());
    if (search) {
      dispatch(closeSearch());
    }
    if (menu) {
      dispatch(closeMenu());
    }
  };
  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  useEffect(() => {
    const scrollListener = () => {
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
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div className="icons">
      {/* <FontAwesomeIcon className="icon menu" icon={menu ? faTimes : faBars} /> */}
      <FontAwesomeIcon
        className="icon bars-icon"
        icon={faBars}
        onClick={menu ? handleCloseMenu : handleOpenMenu}
      />
      <FontAwesomeIcon
        className="icon search-icon"
        icon={faSearch}
        onClick={search ? handleCloseSearch : handleOpenSearch}
      />
      <FontAwesomeIcon
        className="icon shopping-icon"
        icon={faCartShopping}
        onClick={cart ? handleCloseCart : handleOpenCart}
      />
    </div>
  );
};
