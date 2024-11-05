'use client'

import { Book, GutendexResponse } from '@/app/lib/types';

export async function searchBooksByTitle(
  title: string,
  page: number = 1,
  resultsPerPage: number = 10
): Promise<{
  books: Book[];
  totalCount: number;
  hasNextPage: boolean;
}> {
  try {
    const encodedTitle = encodeURIComponent(title);
    const url = `https://gutendex.com/books/?search=${encodedTitle}&page=${page}&per_page=${resultsPerPage}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: GutendexResponse = await response.json();
    
    return {
      books: data.results,
      totalCount: data.count,
      hasNextPage: data.next !== null
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to search books: ${error.message}`);
    }
    throw new Error('Failed to search books: Unknown error');
  }
}
