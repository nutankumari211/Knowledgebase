import { MoreVertical } from 'lucide-react';

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

const KnowledgeBaseCard = ({ title, description, date, searchQuery }) => {
  return (
    <div className="bg-white border text-sm text-gray-500 border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-base font-semibold text-gray-900">
           <HighlightText text={title} highlight={searchQuery} />
        </h4>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-4 h-4" />
        </button>
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
