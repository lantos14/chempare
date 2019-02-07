export function getData(url) {
  return fetch(url, {
    "Content-Type": "application/json",
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}
