import { useState } from 'react';
import toast from 'react-hot-toast';
import { baseCards as initialCards } from '../components/KnowledgeBase/data';

export const useKnowledgeBase = () => {
  const [cards, setCards] = useState(initialCards);
  const [editCardData, setEditCardData] = useState(null);

  const handleCreateOrUpdate = (cardData) => {
    if (editCardData) {
      setCards(cards.map(c => c.title === cardData.title ? cardData : c));
    } else {
      setCards([cardData, ...cards]);
    }
    setEditCardData(null);
  };

  const handleDeleteCard = (title) => {
    toast((t) => (
      <div className="flex flex-col gap-3 min-w-[240px]">
        <p className="text-sm font-medium text-gray-800">
          Delete "{title}"?
        </p>
        <div className="flex gap-2 justify-end mt-1">
          <button 
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              setCards(prev => prev.filter(c => c.title !== title));
              toast.dismiss(t.id);
              toast.success('Successfully deleted');
            }}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
      position: 'top-center',
      style: {
        padding: '16px',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        borderRadius: '0.75rem',
        border: '1px solid #f3f4f6'
      }
    });
  };

  return {
    cards,
    editCardData,
    setEditCardData,
    handleCreateOrUpdate,
    handleDeleteCard
  };
};
