import { X } from 'lucide-react';
import { menuItems } from './sidebarData';

const Sidebar = ({ activeTab, onTabChange, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}
      <aside className={`fixed inset-y-0 left-0 z-50 transform bg-white border-r border-gray-200 h-full w-[240px] overflow-y-auto py-6 scrollbar-hide flex flex-col gap-6 transition-transform duration-300 md:relative md:translate-x-0 md:h-[calc(100vh-4rem)] md:z-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className="flex items-center justify-between px-4 md:hidden">
          <h2 className="font-bold text-gray-800">Menu</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {menuItems.map((section, idx) => (
          <div key={idx} className="px-4">
            <h3 className="text-xs font-semibold text-gray-400 mb-3 ml-2 uppercase tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i}>
                    <button
                      onClick={() => onTabChange(item.name)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${item.name === activeTab
                          ? 'bg-[#EEECFF] text-primary relative'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                      {item.name === activeTab && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md"></div>
                      )}
                      <Icon className="w-4 h-4 shrink-0" />
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
