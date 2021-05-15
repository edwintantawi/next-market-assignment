const getUrlParams = (name) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
};

export { getUrlParams };