
export const GUTENBERG_MAIN_URL = "www.gutenberg.org"
export const GUTENBERG_EBOOKS_URL = `${GUTENBERG_MAIN_URL}/ebooks`
export const SEARCH_RESULTS_HOME = 6

export interface Book {
  id: number;
  title: string;
  authors: Array<{
    name: string;
    birth_year: number | null;
    death_year: number | null;
  }>;
  languages: string[];
  download_count: number;
  formats: {
    [key: string]: string;
  };
}

export interface GutendexResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}
