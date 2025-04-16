import React from "react";

const CustomLegend = ({payload}) => {
    return (
      <div className="flex justify-center items-center gap-2 mt-4">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            <p className="text-sm font-medium">{entry.name}</p>
          </div>
        ))}
      </div>    
    ) 
}

export default CustomLegend;
