export function getData(url, name) {
  const dataToSend = { 'name': name }
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
