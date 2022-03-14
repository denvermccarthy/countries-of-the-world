import { checkError, client } from './client';

export default async function fetchCountries() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
