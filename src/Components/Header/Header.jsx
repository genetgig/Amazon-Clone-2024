import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/Dataprovider";
import { IoMdArrowDropdown } from "react-icons/io";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className=" sticky top-0 z-50">
      <section className="">
        <div className={classes.header__containe}>
          <div className={classes.logo__container}>
            {/* Logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazone logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                {/* icone */}
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered To</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search  section*/}
          <div className={classes.search}>
            <select className=" bg-gray-200 text-sm" name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Product" />
            {/* icon */}
            <BsSearch size={7} />
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <Link className={classes.language} to="">
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
                <option value="">ES</option>
                <option value="">AR</option>
              </select>
            </Link>
            {/* three components */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello,{user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello,sign in</p>
                    <div className="flex">
                      <span>Account & Lists span</span>
                      <a className=" pt-1">
                        <IoMdArrowDropdown />
                      </a>
                    </div>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
