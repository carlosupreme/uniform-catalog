import {Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact.tsx";
import AllUniforms from "./pages/AllUniforms.tsx";
import Uniform from "./pages/Uniform.tsx";
import Favorites from "./pages/Favorites.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<AllUniforms/>}/>
            <Route path="/uniforme/:id" element={<Uniform/>}/>
            <Route path="/favoritos" element={<Favorites/>}/>
            <Route path="/contacto" element={<Contact/>}/>
        </Routes>
    )
}