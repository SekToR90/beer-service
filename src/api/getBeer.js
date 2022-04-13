import { ENDPOINDS } from './endpoints';

export async function getBeer() {
  let result = {};
  try {
    result = (await fetch(ENDPOINDS.BEER)).json();
  } catch (err) {
    console.log(err);
  }
  return result;
}
