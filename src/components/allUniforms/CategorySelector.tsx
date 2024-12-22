import {useState} from "react";

export default function CategorySelector({onSelect}: {onSelect: Function}) {
    const [active, setActive] = useState("Todos");
    const activeClassNames = "border-b-2 border-b-black";

    return (
        <div className="flex font-bold gap-4 p-5 pb-2 items-center">
            <button
                onClick={()=> {
                    setActive("Todos")
                    onSelect('')
                }}
                className={"hover:opacity-50 pb-2 " + (active === 'Todos' ? activeClassNames : '')}
            >
                Todos
            </button>
            <button onClick={()=> {
                setActive("hombre")
                onSelect('hombre')
            }}
                    className={"hover:opacity-50 pb-2 " + (active === 'hombre' ? activeClassNames : '')}
            >Hombre</button>
            <button
                onClick={()=> {
                    setActive("mujer")
                    onSelect('mujer')
                }}

                className={"hover:opacity-50 pb-2 " + (active === 'mujer' ? activeClassNames : '')}


            >Mujer</button>
            <button
                onClick={()=> {
                    setActive("niño")
                    onSelect('niño')
                }}

                className={"hover:opacity-50 pb-2 " + (active === 'niño' ? activeClassNames : '')}


            >Niño</button>
        </div>
    );
}