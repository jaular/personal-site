const formattedDate = (date: string) =>
  new Date(date)
    .toLocaleDateString("es-VE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ".");

export default formattedDate;
