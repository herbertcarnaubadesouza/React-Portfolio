import React, { useState, useEffect, useRef } from "react";
import "./DropDown.css";

export function DropdownItem({ disabled = false, closeDropdown, handleClick, leftIcon, children }) {
  return (
    <li className="drop-item" onClick={closeDropdown}>
      <button disabled={disabled} onClick={handleClick}>
        {leftIcon}
        {children}
      </button>
    </li>
  );
}

function DropDown({ title, icon, children }) {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  function handleClickOutside(event) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpen(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  function toggleDropdown() {
    setOpen(!open)
  }

  function close() {
    setOpen(false)
  }

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { closeDropdown: close });
    }
    return child;
  });

  return (
    <div className="drop" ref={dropdownRef}>
      <a href="#" className="icon-button" onClick={toggleDropdown}>
        {icon}
      </a>

      {open &&
        <ul className="drop-menu">
          <li className="drop-item">
            <span className="drop-title">{title}</span>
          </li>
          {childrenWithProps}
        </ul>
      }
    </div>
  );
}

export default React.memo(DropDown)
