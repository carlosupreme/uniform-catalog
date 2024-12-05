import React from "react";
import {Link} from "react-router-dom";
// import {Heart} from "./icons/Heart.tsx";

function HeaderButton({children}: { children: React.ReactNode }) {
    return (
        <button className="rounded-full cursor-pointer hover:bg-gray-200 px-2.5 py-2">
            {children}
        </button>
    );
}

function SearchButton() {
    return  <Link to="/">
        <HeaderButton>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"}
                 fill={"none"}>
                <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
        </HeaderButton>
    </Link>
}

// function FavoritesButton() {
//     return <Link to="/favoritos"><HeaderButton><Heart/></HeaderButton></Link>
// }

function ContactButton() {
    return <Link to="/contacto">
        <HeaderButton>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"}
                 fill={"none"}>
                <path
                    d="M4.5 10C4.5 6.22876 4.5 4.34315 5.67157 3.17157C6.84315 2 8.72876 2 12.5 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H12.5C8.72876 22 6.84315 22 5.67157 20.8284C4.5 19.6569 4.5 17.7712 4.5 14V10Z"
                    stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4.5 6H2M4.5 12H2M4.5 18H2" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M15.2748 8.49261C15.2748 9.59715 14.3794 10.4926 13.2749 10.4926C12.1704 10.4926 11.275 9.59715 11.275 8.49261C11.275 7.38808 12.1704 6.49268 13.2749 6.49268C14.3794 6.49268 15.2748 7.38808 15.2748 8.49261Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M9.31982 15.7161C10.3782 14.0868 12.0589 13.4762 13.2749 13.4774C14.491 13.4787 16.1224 14.0868 17.1807 15.7161C17.2492 15.8215 17.268 15.9512 17.2063 16.0607C16.9588 16.4996 16.1903 17.3705 15.6352 17.4296C14.9975 17.4974 13.3291 17.5069 13.2762 17.5072C13.2232 17.5069 11.5034 17.4974 10.8653 17.4296C10.3103 17.3705 9.5418 16.4996 9.29429 16.0607C9.23254 15.9512 9.25139 15.8215 9.31982 15.7161Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </HeaderButton>
    </Link>
}

export default function Header() {
    return (
        <div
            className="flex items-center justify-between w-full h-16 bg-white mx-auto p-4">
            <div>
                Catalogo
            </div>  

            <div className="flex gap-1 items-center">
                <SearchButton/>
                {/* <FavoritesButton/> */}
                <ContactButton/>
            </div>
        </div>
    );
}
