import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterBox = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-72 border  p-2 bg-white shadow-sm">
      {/* Filter Title + Toggle Arrow */}
      <div className=" flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {/* Clear Button */}
      <button className="text-sm text-gray-500 hover:text-red-600 float-right mt-1">
        Clear
      </button>

      {/* Show Options when isOpen = true */}
      {isOpen && (
        <div className="mt-3 flex flex-wrap gap-2">
          {options.map((option, index) => (
            <button key={index} className="border px-3 py-1 text-red-600 bg-gray-100 rounded-md">
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBox;
