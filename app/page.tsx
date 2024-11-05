import { BookOpenIcon } from '@heroicons/react/24/outline';
import Search from "@/app/components/search";

export default async function Page() {
  return (
    <div id="full-page" className="justify-start flex content-center space-y-4 items-center flex-col my-56">
      <div id="welcometitle-wrapper" className="relative flex items-center justify-center">
        <BookOpenIcon className="text-lime-600" />
        <div id="welcome-title" className="text-6xl">
          Welcome to Gutenbooks!
        </div>
      </div>
      <div id="welcome-subtitle" className="text-base flex pb-14">
        Search for Project Gutenberg books, bookmark them, visualize some information about them, and more.
      </div>
      <Search placeholder="Search for a book title .." />
      <div id="login" className="absolute top-4 right-10">
        <button className="bg-lime-600 text-white px-4 py-2 rounded-full">
          Log in
        </button>
      </div>
    </div>
  );
}
