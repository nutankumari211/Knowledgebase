import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Pagination = ({ 
  totalRows,
  currentPage,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange
}) => {
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-between py-4 mt-auto">
      <div className="text-sm text-secondary font-medium">
        {totalRows} rows
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-secondary font-medium">Rows per page</span>
          <select 
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
            className="border border-gray-200 rounded px-2 py-1 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer hover:border-gray-300"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="text-sm text-secondary font-medium">
          page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center gap-1">
          <button 
            disabled={isFirstPage}
            onClick={() => onPageChange(1)}
            className={`p-1 border border-gray-200 rounded ${isFirstPage ? 'text-gray-300 cursor-not-allowed bg-gray-50' : 'text-secondary hover:bg-gray-50 cursor-pointer transition-colors'}`}
          >
             <ChevronsLeft className="w-4 h-4" />
          </button>
          <button 
            disabled={isFirstPage}
            onClick={() => onPageChange(currentPage - 1)}
            className={`p-1 border border-gray-200 rounded ${isFirstPage ? 'text-gray-300 cursor-not-allowed bg-gray-50' : 'text-secondary hover:bg-gray-50 cursor-pointer transition-colors'}`}
          >
             <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            disabled={isLastPage}
            onClick={() => onPageChange(currentPage + 1)}
            className={`p-1 border border-gray-200 rounded ${isLastPage ? 'text-gray-300 cursor-not-allowed bg-gray-50' : 'text-secondary hover:bg-gray-50 cursor-pointer transition-colors'}`}
          >
             <ChevronRight className="w-4 h-4" />
          </button>
          <button 
            disabled={isLastPage}
            onClick={() => onPageChange(totalPages)}
            className={`p-1 border border-gray-200 rounded ${isLastPage ? 'text-gray-300 cursor-not-allowed bg-gray-50' : 'text-secondary hover:bg-gray-50 cursor-pointer transition-colors'}`}
          >
             <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
