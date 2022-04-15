import { ENDPOINDS } from './endpoints';

export async function getUser() {
  let result = {};
  try {
    result = (await fetch(ENDPOINDS.USER)).json();
  } catch (err) {
    console.error(err);
  }
  return result;
}
