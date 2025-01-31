import React from "react";
import Header from "./Header.tsx";

export function Layout({ children, loading }: { children: React.ReactNode, loading?: boolean }) {
    return (
        <div className="min-h-screen bg-white w-full">
            <Header />
            {loading
                ? <p>Cargando...</p>
                : (
                    <div className="w-full">
                        <div className="relative w-full">{children}</div>
                        <br />
                        <hr />
                        <Footer />
                    </div>
                )}
        </div>
    )
}
function Footer() {
    return <footer className="text-gray-500 text-sm font-bold text-center p-10">
        <p>© 2024 Uniformes Deportivos. Todos los derechos reservados</p>
    </footer>
}