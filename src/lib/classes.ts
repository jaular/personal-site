const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export default cn;
