import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [tagss, setTagss] = useState(["Urgent", "Important"]);
  const [selectedlist, setselectedList]=useState("Tags Selection")
 

  return (
    <div className="border rounded-2 position-relative">
      <p className=" tag position-absolute text-secondary bg-white px-1" >Tags</p>
      <div
        onClick={() => {
          setToggleDropdown(!toggleDropdown);
        }}
        
      >

        <div className="d-flex align-items-center justify-content-between px-5 py-3">
        <div>
          <p className="m-0">{selectedlist}</p>
        </div>
          <IoIosArrowDown
            style={{
              transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s ease-in-out",
            }}
          />
        </div>
        
      </div>
      {toggleDropdown && (
        <ul className=" w-100 p-0 rounded-2">
          {tagss.map((tag) => {
            return (
              <li
              className="text-start"
                onClick={() => {
                    setselectedList(tag === 'Tags Selection ' ? 'Tags Selection' : tag);
                    setToggleDropdown(false)
                  
                }}
             key={tag} >
                {tag}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
