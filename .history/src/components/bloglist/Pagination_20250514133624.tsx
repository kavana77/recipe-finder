const Pagination =()=>{
    const pageItems = ["1","2","3","4","5","...",")"]
    return(
        <div className="flex items-center justify-center space-x-2 p-1 rounded-full">
        {pageItems.map((item, index) => (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full border bo text-sm ${
              item === "1"
                ? "bg-black text-white"
                : "hover:bg-gray-200 text-black"
            } ${item === "..." || item === ")"
              ? "cursor-default"
              : "cursor-pointer"}`}
          >
            {item}
          </button>
        ))}
      </div>
    )
}
export default Pagination