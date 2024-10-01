
"use client";

import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { Category } from "../types/type";


export function DropDownComponent({ categories }: any) {
    // console.log(categories);
    return (
        <Dropdown label="Categories" inline>
            {
                categories.map((category: Category) => (
                    <Dropdown.Item key={category.category_id} >
                        <Link to={`/categories/${category.category_id}/products`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {category.name}
                        </Link>
                    </Dropdown.Item>
                ))
            }
        </Dropdown >
    );
}
