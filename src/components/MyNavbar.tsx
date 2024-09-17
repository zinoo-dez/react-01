
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export function MyNavbar() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">K React</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item><Link to={"/login"}>Login </Link></Dropdown.Item>
                    <Dropdown.Item><Link to={"/register"}>Register </Link></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item><Link to={"/logout"}>Log Out </Link></Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Services</Link>
                <Link to="/price">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
