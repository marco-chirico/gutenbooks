'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Suspense, useState } from 'react';
import { searchBooksByTitle } from '../lib/search';
import { GUTENBERG_EBOOKS_URL, SEARCH_RESULTS_HOME } from '../lib/types';
import { useDebouncedCallback } from 'use-debounce';
import { SearchResultsSkeleton } from './skeletons';


interface BookSearchResult {
  index: number,
  title: string,
  url: string,
}

export default function Search({ placeholder }: { placeholder: string }) {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BookSearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback(
    async (query: string) => {
      const searchResults = await searchBooksByTitle(query, SEARCH_RESULTS_HOME);
      const results = searchResults!.books.slice(0,SEARCH_RESULTS_HOME).map((book, index) => (
        {
          index: index,
          title: book.title,
          url: `https://${GUTENBERG_EBOOKS_URL}\\${book.id}`
        }
      ))
      setResults(results);
      setLoading(false);
    },
    500
  );

  return (
    <>
      <div className="relative flex items-center justify-center w-1/2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-800" />
        </div>
        <input
          className="pl-10 pr-4 py-2 w-full rounded-full bg-neutral-300 focus:ring-2 focus:outline-none focus:ring-lime-600"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch(e.target.value);
            setLoading(true);
          }}
        />
      </div>
      {query && !loading && (
          <div id="book-search-results" className="relative items-center inline-grid w-1/2 bg-white rounded-lg shadow-xl border">
            { results.map((result, index) => (
              <div key={index} id={`${index}-searchResult`} className="px-6 py-2 hover:bg-gray-50 cursor-pointer flex items-center">
                <MagnifyingGlassIcon className="absolute h-5 w-5 text-gray-600 mr-2.5" />
                <a href={result.url} className="pl-10 pr-4 py-2">
                  <h3 className="line-clamp-1">{result.title}</h3>
                </a>
              </div>
            ))}
          </div>
      )}
      {query && loading && (
        <SearchResultsSkeleton/>
      )}
      </>
  );
}
