import { useState, useEffect, useRef } from 'react';

const ProfileDropdown = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={profileRef}>
      <button
        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-medium cursor-pointer transition-transform hover:scale-105 shadow-sm"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        NK
      </button>

      {isProfileOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-3 px-4 z-50">
          <div className="text-sm font-bold text-gray-900">Nutan Kumari</div>
          <div className="text-xs text-gray-500 mt-1">Role: Developer</div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
