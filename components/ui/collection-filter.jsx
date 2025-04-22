"use client"

import { useState } from "react"
import CustomSelect from "/components/ui/custom-select.jsx"

function CollectionFilter({ onFilterChange }) {
  const [selectedOption, setSelectedOption] = useState("0")

  const filterOptions = [
    { value: "0", label: "Sort By:" },
    { value: "1", label: "Rank" },
    { value: "2", label: "Class" },
    { value: "3", label: "Type" },
  ]

  const handleFilterChange = (value) => {
    setSelectedOption(value)
    if (onFilterChange) onFilterChange(value)
  }

  return (
    <div className="relative z-50">
      <CustomSelect
        options={filterOptions}
        onChange={handleFilterChange}
        defaultValue={selectedOption}
        width="150px"
        className="h-[50px] bg-[#0B0C2A] border-2 border-[#86CEBC] top-6 left-[80%]"
      />
    </div>
  )
}

export default CollectionFilter
