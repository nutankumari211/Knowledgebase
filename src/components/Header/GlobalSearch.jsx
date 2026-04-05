import { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

const GlobalSearch = ({ searchQuery, setSearchQuery }) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="hidden md:block flex-1 max-w-lg mx-8">
      <div className="relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-white/10 border border-white/10 rounded-md py-1.5 pl-10 pr-12 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/20 transition-all"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1 pointer-events-none">
          <span className="text-xs text-gray-400 bg-black/20 px-1 rounded">⌘</span>
          <span className="text-xs text-gray-400 bg-black/20 px-1 rounded">K</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
