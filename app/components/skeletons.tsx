import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export function SearchResultSkeleton() {
    return (
      <>
        <div className="relative items-center bg-gray-200 inline-grid bg-white rounded-lg shadow-xl animate-pulse">
          <div className="h-6 px-6 py-2 bg-gray-200 cursor-pointer flex items-center animate-pulse">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 mr-2.5" />
            <div className="h-2.5 w-full rounded bg-zinc-300"/>
          </div>
        </div>
      </>
    );
  }


export function SearchResultsSkeleton() {
    return (
      <div id="book-search-results-loading" className="relative items-center inline-grid w-1/2 bg-white rounded-lg shadow-xl border">
        <SearchResultSkeleton />
        <SearchResultSkeleton />
        <SearchResultSkeleton />
      </div>
    );
  }