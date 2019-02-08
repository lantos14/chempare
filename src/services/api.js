export function getData(url, names) {
  const dataToSend = { 'names': names }
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}
