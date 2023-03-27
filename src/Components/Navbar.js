import { Stack} from "@mui/material";
import { Link} from "react-router-dom";
import React from "react";
import Exercise from "./Exercise";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <Stack className="nav" direction="row" gap="4rem" alignItems="center">
        <img className="logo" alt="Logo" />

        <Stack direction="row" gap="2rem">
          <Link className="nav__link" to="/">
            Home
          </Link>

          <Link className="nav__link" to="/Exercise">
            Exercise
          </Link>

          {/* <Link className='nav__link' to='/Exercise'>About Us</Link> */}
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
