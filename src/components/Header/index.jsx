import { Layers, Menu } from 'lucide-react';
import WorkspaceDropdown from './WorkspaceDropdown';
import GlobalSearch from './GlobalSearch';
import NotificationsDropdown from './NotificationsDropdown';
import ProfileDropdown from './ProfileDropdown';

const Header = ({ onCreateNewClick, searchQuery, setSearchQuery, onMenuToggle }) => {
  return (
    <header className="h-16 bg-gradient-to-r from-secondary via-[#352D79] to-secondary flex items-center justify-between px-4 md:px-6 shrink-0 z-50 relative">
      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={onMenuToggle}
          className="md:hidden text-white hover:text-gray-200 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-3">
          <div className="text-white text-xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:inline-block">Worcspace</span>
          </div>
        </div>

        <WorkspaceDropdown onCreateNewClick={onCreateNewClick} />
      </div>

      <GlobalSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex items-center gap-5">
        <NotificationsDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
