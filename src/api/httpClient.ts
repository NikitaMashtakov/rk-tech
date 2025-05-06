const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key': import.meta.env.VITE_API_KEY,
});

const requestOptions = {
  method: 'GET',
  headers: headers,
};

export const getCat = async () => {
  try {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?size=small',
      requestOptions,
    );
    const result = await response.json();
    return result[0].url;
  } catch {
    (error: Error) => console.log('error', error);
  }
};
