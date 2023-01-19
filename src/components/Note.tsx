import type { CollectionEntry } from "astro:content";
import type { Component } from "solid-js";
import { formattedDate } from "~/lib/utils";
import Tag from "./Tag";

type Props = {
  note: CollectionEntry<"posts">;
};

const Note: Component<Props> = ({ note }) => {
  const { slug } = note;
  const { title, publishDate, tag } = note.data;

  return (
    <li class="relative py-4 group first:pt-0 last:pb-0">
      <div class="flex items-center justify-between space-x-8">
        <div class="space-y-1">
          <a
            href={`/blog/${slug}`}
            class="text-base text-gray-800 sm:text-lg dark:text-gray group-hover:text-blue dark:group-hover:text-blue focus:outline outline-offset-4 focus:outline-1 focus:outline-blue focus:text-blue dark:focus:text-blue"
          >
            <span aria-hidden="true" class="absolute inset-0"></span>
            {title}
          </a>
          <div>
            <time
              class="text-xs sm:text-sm text-gray-800 dark:text-gray"
              datetime={publishDate}
            >
              {formattedDate(publishDate)}
            </time>
          </div>
        </div>
        <div class="text-right">
          <Tag tag={tag} />
        </div>
      </div>
    </li>
  );
};

export default Note;
