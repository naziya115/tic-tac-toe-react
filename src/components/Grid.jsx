export default function Grid(props) {
  return (
    <div className="grid grid-cols-3 m-auto w-fit">
      {props.grid.map((element) => (
        <div key={element.id} className="relative group">
          <div className="absolute transition duration-500 opacity-75 -inset-1 g-gradient-to-r from-cyan-500 to-blue-500"></div>
          <button
            onClick={() => props.handlePlay(element.id)}
            className={`relative w-24 h-24 border-2 border-slate-200 transition duration-500 hover:bg-slate-500 ${
              element.text === "X" ? "text-red-500" : "text-green-500"
            }`}
          >
            {element.text}
          </button>
        </div>
      ))}
    </div>
  );
}
