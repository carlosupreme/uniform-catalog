export default function CategorySelector() {
    return (
        <div className="flex font-bold gap-4 p-5 pb-2 items-center">
            <button className="hover:opacity-50 pb-2 border-b-2 border-b-black">Todos</button>
            <button className="hover:opacity-50 pb-2">Hombre</button>
            <button className="hover:opacity-50 pb-2">Mujer</button>
            <button className="hover:opacity-50 pb-2">Niño</button>
        </div>
    );
}