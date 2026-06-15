import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { searchWebsite, SearchResult } from '@/data/searchIndex';

interface SearchBoxProps {
  className?: string;
  isNavScrolled?: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({ className = '', isNavScrolled = false }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);

    if (value.trim()) {
      const searchResults = searchWebsite(value);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    navigate(result.url);
    
    // Scroll to section if specified
    if (result.section) {
      setTimeout(() => {
        const element = document.getElementById(result.section!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.classList.add('highlight-result');
          setTimeout(() => element.classList.remove('highlight-result'), 3000);
        }
      }, 100);
    }

    // Clear search
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'Enter' && query.trim()) {
        // If no results are highlighted and user presses enter, search for the first result
        const searchResults = searchWebsite(query);
        if (searchResults.length > 0) {
          handleResultClick(searchResults[0]);
        }
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleResultClick(results[selectedIndex]);
        } else if (results.length > 0) {
          handleResultClick(results[0]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setQuery('');
        setResults([]);
        break;
      default:
        break;
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      service: 'bg-blue-50 text-blue-700',
      industry: 'bg-purple-50 text-purple-700',
      product: 'bg-green-50 text-green-700',
      page: 'bg-gray-50 text-gray-700',
      career: 'bg-orange-50 text-orange-700',
      news: 'bg-red-50 text-red-700',
      insight: 'bg-indigo-50 text-indigo-700',
      'case-study': 'bg-teal-50 text-teal-700',
    };
    return colors[category] || colors.page;
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div
        className={`relative flex items-center px-4 py-2 rounded-lg transition-all ${
          isNavScrolled
            ? 'bg-gray-100 border border-gray-300'
            : 'bg-white/20 border border-white/30 backdrop-blur-sm'
        }`}
      >
        <Search size={18} className={isNavScrolled ? 'text-gray-600' : 'text-gray-100'} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          className={`ml-2 bg-transparent outline-none flex-1 text-sm placeholder-opacity-70 ${
            isNavScrolled
              ? 'text-gray-900 placeholder-gray-600'
              : 'text-gray-100 placeholder-gray-200'
          }`}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className={`ml-2 transition-colors ${
              isNavScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'
            }`}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
          >
            {/* Results */}
            {results.map((result, index) => (
              <motion.button
                key={result.id}
                onClick={() => handleResultClick(result)}
                onMouseEnter={() => setSelectedIndex(index)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`w-full text-left px-4 py-3 border-b last:border-b-0 transition-colors ${
                  selectedIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                      {result.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {result.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${getCategoryColor(
                      result.category
                    )}`}
                  >
                    {result.category.replace('-', ' ')}
                  </span>
                </div>
              </motion.button>
            ))}

            {/* No results message */}
            {results.length === 0 && query.trim() && (
              <div className="px-4 py-8 text-center text-gray-500">
                <p className="text-sm">No results found for "{query}"</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Hint */}
      {isOpen && results.length > 0 && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-full mt-2 left-0 right-0 text-xs text-gray-500 px-4 py-2 text-center"
          >
            Use ↑ ↓ to navigate • Enter to select • Esc to close
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default SearchBox;
