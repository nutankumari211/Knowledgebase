import { X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

const Modal = ({ isOpen, onClose, title, description, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <FocusLock returnFocus className="relative w-full max-w-md h-full">
        <div className="bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">

          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-start shrink-0">
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-tight">{title}</h2>
              {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {children}
          </div>

          {footer && (
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end shrink-0">
              {footer}
            </div>
          )}

        </div>
      </FocusLock>
    </div>
  );
};

export default Modal;
