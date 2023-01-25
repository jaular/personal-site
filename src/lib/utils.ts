export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const formattedDate = (date: Date) =>
  date
    .toLocaleDateString("es-VE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ".");
