import applyClassNames from "classnames";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {DotProps, ArrowProps} from "react-multi-carousel/lib/types";
import React from "react";

const CustomDot = ({active, onClick}: DotProps) => {
    return (
        <button
            onClick={() => onClick ? onClick() : {}}
            className={
                applyClassNames(
                    "border-none outline-none m-0 mx-1 mb-4 w-1.5 h-1.5 bg-white rounded-full transition-opacity duration-200 ease-in-out opacity-40",
                    {"!opacity-100": active}
                )
            }></button>
    );
};

const CustomRightArrow = ({onClick}: ArrowProps) => {
    return <button
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-10 h-8 w-8 grid place-items-center rounded-full bg-white opacity-50"
        onClick={() => onClick ? onClick() : {}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#4a4a4a"}
             fill={"none"}>
            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>;
};

const CustomLeftArrow = ({onClick}: ArrowProps) => {
    return <button
        className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer z-10 h-8 w-8 grid place-items-center rounded-full bg-white opacity-50"
        onClick={() => onClick ? onClick() : {}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#4a4a4a"}
             fill={"none"}>
            <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>;
};


export default function ImagesSlide({children}: { children: React.ReactNode }) {
    const responsive = {mobile: {breakpoint: {max: 764, min: 0}, items: 1}};

    return <Carousel
        showDots={true}
        infinite={true}
        responsive={responsive}
        customDot={<CustomDot/>}
        customRightArrow={<CustomRightArrow/>}
        customLeftArrow={<CustomLeftArrow/>}
    >
        {children}
    </Carousel>
}