import type { Component } from "solid-js";

type NoteProps = {
  slug: string;
  title: string;
};

type Props = {
  note: NoteProps;
};

const Note: Component<Props> = ({ note }) => {
  const { slug, title } = note;

  return (
    <li class="relative py-4 first:pt-0 last:pb-0">
      <div class="flex items-center justify-between space-x-8">
        <div class="space-y-1">
          <a
            href={`/blog/${slug}`}
            class="text-base text-black sm:text-lg dark:text-white hover:text-blue dark:hover:text-blue focus:outline outline-offset-4 focus:outline-1 focus:outline-blue focus:text-blue dark:focus:text-blue"
          >
            {title}
          </a>
        </div>
      </div>
    </li>
  );
};

export default Note;
