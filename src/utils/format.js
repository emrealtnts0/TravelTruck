export const formatPrice = (x, currency = "€") => {
  return `${currency}${Number(x).toFixed(2)}`;
};

export const formatDate = (date) => {
  if (!date || isNaN(new Date(date).getTime())) return "";
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};


const formatValue = (value) => {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  } else {
    return value;
  }
};

export const parseQueryAsObject = (data) => {
  if (data) {
    return data.split(",").map((el) => {
      const [name, value] = el.split(":");
      return { name, value: formatValue(value) };
    });
  }
};

export const setObjectAsQuery = (data) => {
  return data.map(({ name, value }) => `${name}:${value}`).join(",");
};

export const getObjectAsQueryParams = (data) => {
  return data
    .map(({ name, value }) => ({ [name]: value }))
    .reduce(
      (accumulator, currentValue) => Object.assign(accumulator, currentValue),
      {}
    );
};
