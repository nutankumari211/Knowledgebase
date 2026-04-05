import { useState, useRef, useEffect } from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';

const HighlightText = ({ text, highlight }) => {
  if (!highlight || !highlight.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={i} className="bg-primary/20 text-primary font-bold rounded-sm px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const KnowledgeBaseCard = ({ title, description, date, searchQuery, onEdit, onDelete }) => {
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
    <div className="bg-white border text-sm text-gray-500 border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow relative">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-base font-semibold text-gray-900 pr-4">
           <HighlightText text={title} highlight={searchQuery} />
        </h4>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`p-1 rounded-md transition-colors cursor-pointer ${isDropdownOpen ? 'bg-gray-100 text-gray-700' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10 overflow-hidden">
              <button 
                onClick={() => { setIsDropdownOpen(false); onEdit(); }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Edit2 className="w-4 h-4" /> Edit
              </button>
              <button 
                onClick={() => { setIsDropdownOpen(false); onDelete(); }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        <HighlightText text={description} highlight={searchQuery} />
      </p>
      
      <div className="pt-4 border-t border-gray-100 flex items-center text-xs text-gray-400 font-medium">
        Created On: {date}
      </div>
    </div>
  );
};

export default KnowledgeBaseCard;
