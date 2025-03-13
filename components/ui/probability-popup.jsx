"use client"

//looks ugly right now due to font / text color overrule

import { useRef, useEffect } from "react"
import { X } from "lucide-react"

const ProbabilityPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null)

  // Close probability popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4">
      <div ref={popupRef} className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold text-[#0e0e2c]">Drop Rates</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h4 className="font-bold mb-2">Silver Pack</h4>
            <ul className="text-sm space-y-1">
              <li className="flex justify-between">
                <span>SSR Character:</span>
                <span>1.5%</span>
              </li>
              <li className="flex justify-between">
                <span>SR Character:</span>
                <span>8%</span>
              </li>
              <li className="flex justify-between">
                <span>R Character:</span>
                <span>40.5%</span>
              </li>
              <li className="flex justify-between">
                <span>N Character:</span>
                <span>50%</span>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-2">Gold Pack</h4>
            <ul className="text-sm space-y-1">
              <li className="flex justify-between">
                <span>SSR Character:</span>
                <span>3%</span>
              </li>
              <li className="flex justify-between">
                <span>SR Character:</span>
                <span>17%</span>
              </li>
              <li className="flex justify-between">
                <span>R Character:</span>
                <span>50%</span>
              </li>
              <li className="flex justify-between">
                <span>N Character:</span>
                <span>30%</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Diamond Pack</h4>
            <ul className="text-sm space-y-1">
              <li className="flex justify-between">
                <span>SSR Character:</span>
                <span>5%</span>
              </li>
              <li className="flex justify-between">
                <span>SR Character:</span>
                <span>25%</span>
              </li>
              <li className="flex justify-between">
                <span>R Character:</span>
                <span>70%</span>
              </li>
              <li className="flex justify-between">
                <span>N Character:</span>
                <span>0%</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-4 border-t text-xs text-gray-500">
            <p>* Guaranteed SR or SSR means at least one SR or higher rarity character will be included.</p>
            <p>* Pity system: After 60 pulls without an SSR, your next pull will guarantee an SSR character.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProbabilityPopup

