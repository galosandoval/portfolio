export const debounce = (callback, freq = 300) => {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    setTimeout(() => callback.apply(this, args), freq);
  };
};
