export function formatDate(dataString: string) {
  const date = new Date(dataString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day < 10 ? "0" : ""}${day}/${
    month < 10 ? "0" : ""
  }${month}/${year}`;
}
