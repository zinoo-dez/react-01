"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { DropDownComponent } from "./DropDownComponent";
import { useCategory } from "../context/CategoryContext";
import { CarouselComponent } from "./CarouselComponent";

export function MyNavbar() {
  const { username, email, logout } = useUser();
  const { categories } = useCategory()
  return (
    <>

      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <img
            src="/vite.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            K React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://xsgames.co/randomusers/avatar.php?g=pixel"
                rounded
              />
            }
          >
            {username && email ? (
              <>
                <Dropdown.Header>
                  <p className="block text-sm">   {username.toUpperCase()}</p>
                  <p className="block truncate text-sm font-medium">
                    {email.toUpperCase()}
                  </p>
                </Dropdown.Header>
                <Dropdown.Item>
                  <a onClick={logout} className="block text-center w-full">
                    Logout
                  </a>
                </Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item>
                  <Link className="w-full block text-center" to={"/login"}>
                    Login{" "}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="w-full block text-center" to={"/register"}>
                    Register{" "}
                  </Link>
                </Dropdown.Item>
              </>
            )}

            <Dropdown.Divider />
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Categories</Link>
          <Link to="/price">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <DropDownComponent categories={categories} />
        </Navbar.Collapse>
      </Navbar>
      <CarouselComponent />
      <Outlet />
    </>
  );
}
