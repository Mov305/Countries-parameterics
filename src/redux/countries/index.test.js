import fetchCountries from './api';

test('fetchCountries', async () => {
  const data = await fetchCountries();
  expect(data).toEqual(data);
});
