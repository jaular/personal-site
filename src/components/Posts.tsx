import type { CollectionEntry } from "astro:content";
import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";
import Note from "./Note";

type Props = {
  data: CollectionEntry<"posts">[];
};

const SearchNotes: Component<Props> = ({ data }) => {
  const [posts, setPosts] = createSignal<CollectionEntry<"posts">[]>(data);
  const [searchValue, setSearchValue] = createSignal<string>("");

  const currentData = [...posts()];

  const filteredPosts = () => {
    return currentData.filter((post) =>
      post.data.title.toLowerCase().includes(searchValue().toLowerCase())
    );
  };

  return (
    <>
      <div class="space-y-14">
        <div class="relative w-full mt-4">
          <input
            aria-label="Buscar publicaciones"
            type="text"
            value={searchValue()}
            onInput={(e) => {
              setSearchValue(e.currentTarget.value);
              setPosts(filteredPosts);
            }}
            placeholder="Buscar publicaciones"
            class="block w-full px-4 py-2 text-base text-black placeholder-gray-600 bg-gray-200/50 rounded dark:placeholder:text-gray-800 dark:text-white dark:bg-black-600 focus:outline focus:outline-1 focus:outline-blue"
          />
          <svg
            class="absolute w-5 h-5 text-gray-600 dark:text-gray-800 right-3 top-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div>
          <div class="space-y-4">
            <h2 class="text-2xl font-bold sm:text-3xl">Publicaciones</h2>
            {!posts().length ? (
              <p class="text-gray-800 dark:text-gray">
                No se han encontrado publicaciones
              </p>
            ) : (
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-900"
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

export default SearchNotes;
