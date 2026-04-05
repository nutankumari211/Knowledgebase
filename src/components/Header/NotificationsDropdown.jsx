import { useState, useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';

const NotificationsDropdown = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationRef = useRef(null);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Hey! Thanks for clicking me." }
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={notificationRef}>
      <button
        className="text-gray-300 hover:text-white relative cursor-pointer"
        onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
      >
        <Bell className="w-5 h-5" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-secondary"></span>
        )}
      </button>

      {isNotificationsOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <span className="text-sm font-semibold text-gray-900">Notifications</span>
            {notifications.length > 0 && (
              <button
                onClick={() => setNotifications([])}
                className="text-xs text-primary hover:text-indigo-800 font-medium transition-colors cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map(notif => (
                <div key={notif.id} className="px-4 py-4 hover:bg-gray-50 border-b border-gray-50 last:border-0 flex justify-between items-start gap-4 transition-colors">
                  <span className="text-sm text-gray-700 leading-snug">{notif.text}</span>
                  <button
                    onClick={() => setNotifications(notifications.filter(n => n.id !== notif.id))}
                    className="text-gray-400 hover:text-gray-600 text-xs shrink-0 font-medium pt-0.5 cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              ))
            ) : (
              <div className="px-4 py-8 text-sm text-center text-gray-500">
                No notifications for now.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown;
