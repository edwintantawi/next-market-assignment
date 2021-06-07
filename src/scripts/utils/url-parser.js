const urlParser = (query) => {
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  const id = urlParams.get(query);
  return id;
};
