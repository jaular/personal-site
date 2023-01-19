import type { Component } from "solid-js";

type Props = {
  tag: string;
};

const Tag: Component<Props> = ({ tag }) => {
  return (
    <p class="text-xs lowercase font-medium text-black dark:text-white">
      <span class="bg-gray-200/50 dark:bg-black-600 rounded px-2 py-0.5">
        {tag}
      </span>
    </p>
  );
};

export default Tag;
