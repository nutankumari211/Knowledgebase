import { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react';
import KnowledgeBaseCard from './KnowledgeBaseCard';
import Pagination from '../ui/Pagination';
import Button from '../ui/Button';

const KnowledgeBaseList = ({ cards, onCreateNewClick, onEditClick, onDeleteClick, searchQuery, setSearchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes((searchQuery || '').toLowerCase()) ||
    card.description.toLowerCase().includes((searchQuery || '').toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, cards.length]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedCards = filteredCards.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#fcfcfc] overflow-hidden">
      <div className="px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shrink-0">
        <h1 className="text-xl md:text-2xl font-bold text-secondary">Knowledge Base</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery || ''}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-full md:w-64 bg-white"
            />
          </div>
          <Button
            onClick={onCreateNewClick}
            className="w-full sm:w-auto whitespace-nowrap shrink-0"
          >
            <Plus className="w-4 h-4" />
            Create New
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-4 flex flex-col scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCards.length > 0 ? (
            paginatedCards.map((card, index) => (
              <KnowledgeBaseCard
                key={index}
                title={card.title}
                description={card.description}
                date={card.date}
                searchQuery={searchQuery}
                onEdit={() => onEditClick(card)}
                onDelete={() => onDeleteClick(card.title)}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500 text-sm">
              No knowledge base entries found.
            </div>
          )}
        </div>

        {filteredCards.length > 0 && (
          <div className="mt-8">
            <Pagination
              totalRows={filteredCards.length}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              onPageChange={setCurrentPage}
              onRowsPerPageChange={(rows) => {
                setRowsPerPage(rows);
                setCurrentPage(1);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBaseList;
