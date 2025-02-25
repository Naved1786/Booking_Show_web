import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Toggle } from "@/components/ui/toggle"


const FilterBox = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-64 shadow-sm  p-2 bg-white  rounded-sm">
      {/* Filter Title + Toggle Arrow */}
      <div className=" flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {/* Clear Button */}
      <button className="text-xs text-gray-500 hover:text-red-600 float-right mt-1">
        Clear
      </button>

      {/* Show Options when isOpen = true */}
      {isOpen && (
        <div className="mt-3 flex flex-wrap gap-2">
          {options.map((option, index) => (
            <Toggle key={index} className="border text-xs  text-red-600 bg-gray-100 rounded-md">
              {option}
            </Toggle>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBox;
