export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export function isObjectEmpty(obj) {
  return !Object.keys(obj).length;
}
