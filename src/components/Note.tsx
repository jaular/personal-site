import type { Component } from "solid-js";
import { formattedDate } from "~/lib/utils";

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
    <li class="text-base sm:text-lg text-black  dark:text-white marker:text-gray dark:marker:text-gray-800 py-4 first:pt-0 last:pb-0">
      <a
        href={`/blog/${slug}`}
        class="hover:text-blue dark:hover:text-blue focus:outline outline-offset-4 focus:outline-1 focus:outline-blue focus:text-blue dark:focus:text-blue"
      >
        {title}
      </a>
    </li>
  );
};

export default Note;
