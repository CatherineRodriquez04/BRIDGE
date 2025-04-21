"use client"

import { useState, useEffect, useRef } from "react"

export default function CustomSelect({ options, width = "200px", onChange, defaultValue = "0", className = "" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectRef = useRef(null)

  // Find default selected index
  useEffect(() => {
    const index = options.findIndex((option) => option.value === defaultValue)
    if (index !== -1) {
      setSelectedIndex(index)
    }
  }, [defaultValue, options])

  // Handle clicking outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelectClick = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (index) => {
    setSelectedIndex(index)
    setIsOpen(false)
    if (onChange) {
      onChange(options[index].value)
    }
  }

  return (
    <div className={`relative font-sans ${className}`} style={{ width }} ref={selectRef}>
      {/* Hidden native select for accessibility */}
      <select className="hidden">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Custom select header */}
      <div
        className={`bg-transparent text-white px-4 py-2 cursor-pointer select-none flex items-center h-full ${isOpen ? "relative" : ""}`}
        onClick={handleSelectClick}
      >
        {options[selectedIndex]?.label}
        <span
          className={`absolute right-2.5 ${isOpen ? "top-1/3 border-transparent border-b-white" : "top-1/2 -translate-y-1/2 border-white border-t-white"}`}
          style={{
            content: '""',
            width: 0,
            height: 0,
            border: "6px solid transparent",
            borderTopColor: isOpen ? "transparent" : "white",
            borderBottomColor: isOpen ? "white" : "transparent",
          }}
        />
      </div>

      {/* Dropdown options */}
      <div
        className={`absolute bg-[#0B0C2A] text-white w-full z-10 border-2 border-[#86CEBC] border-t-0 ${isOpen ? "block" : "hidden"}`}
      >
        {options.map((option, index) =>
          index === 0 ? null : (
            <div
              key={option.value}
              className={`px-4 py-2 cursor-pointer select-none hover:bg-[#86CEBC]/20 ${selectedIndex === index ? "bg-[#86CEBC]/20" : ""}`}
              onClick={() => handleOptionClick(index)}
            >
              {option.label}
            </div>
          ),
        )}
      </div>
    </div>
  )
}
