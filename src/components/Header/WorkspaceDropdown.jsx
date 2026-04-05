import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const WorkspaceDropdown = ({ onCreateNewClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-1 sm:gap-2 text-sm text-white font-medium bg-[#2e3e80] hover:bg-[#25326A] px-3 md:px-4 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
      >
        Worcspace 1
        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 overflow-hidden">
          <button
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors hover:cursor-pointer"
            onClick={() => setIsDropdownOpen(false)}
          >
            Worcspace 1
          </button>
          <button
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors hover:cursor-pointer"
            onClick={() => setIsDropdownOpen(false)}
          >
            Worcspace 2
          </button>
          <div className="h-px bg-gray-100 my-1"></div>
          <button
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors font-medium hover:cursor-pointer"
            onClick={() => {
              setIsDropdownOpen(false);
              if (onCreateNewClick) onCreateNewClick();
            }}
          >
            + Create new workspace
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkspaceDropdown;
