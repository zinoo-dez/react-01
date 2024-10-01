
"use client";

import { Carousel } from "flowbite-react";

export function CarouselComponent() {
    return (
        <div className="h-56 sm:h-64 xl:h-[400px]">
            <Carousel>
                <img src="https://picsum.photos/1601" alt="..." />
                <img src="https://picsum.photos/1602" alt="..." />
                <img src="https://picsum.photos/1603" alt="..." />
                <img src="https://picsum.photos/1604" alt="..." />
                <img src="https://picsum.photos/1605" alt="..." />
                <img src="https://picsum.photos/1606" alt="..." />

            </Carousel>
        </div>
    );
}
