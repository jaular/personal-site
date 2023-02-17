import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";
import Note from "./Note";

type DataProps = {
  slug: string;
  title: string;
  publishDate: Date;
};

type Props = {
  data: DataProps[];
};

const SearchPosts: Component<Props> = ({ data }) => {
  const [posts, setPosts] = createSignal<DataProps[]>([]);
  const [searchValue, setSearchValue] = createSignal<string>("");

  const currentData = [...data];

  const filteredBlogPosts = () => {
    if (searchValue() === "") {
      return setPosts([]);
    }
    return currentData.filter((post) =>
      post.title.toLowerCase().includes(searchValue().toLowerCase())
    );
  };

  return (
    <>
      <div class="space-y-14">
        <div class="relative max-w-lg mt-8">
          <input
            aria-label="Buscar publicaciones"
            type="text"
            value={searchValue()}
            onInput={(e) => {
              setSearchValue(e.currentTarget.value);
              setPosts(filteredBlogPosts);
            }}
            placeholder="Buscar publicaciones"
            class="block w-full px-4 py-2 text-base text-black placeholder-gray-600 bg-gray-200/50 rounded dark:placeholder:text-gray-800 dark:text-white dark:bg-black-600 focus:outline focus:outline-1 focus:outline-blue"
          />
          <svg
            class="absolute w-5 h-5 text-gray-600 dark:text-gray-800 right-3 top-2.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <div class="space-y-4">
            {posts().length > 0 && (
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-900 list-square list-inside"
              >
                <For each={posts()} fallback={<div>Loading...</div>}>
                  {(post) => <Note note={post} />}
                </For>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPosts;
