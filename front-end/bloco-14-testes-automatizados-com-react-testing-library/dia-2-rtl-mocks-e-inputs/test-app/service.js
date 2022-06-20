export const randomNumber = () => Math.floor(Math.random() * 101);
export const firstFunction = (str) => str.toUpperCase();
export const secondFunction = (str) => str.charAt(0);
export const thirdFunction = (str1, str2) => str1.concat(str2);
export function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

// module.exports = {
//   randomNumber,
//   firstFunction,
//   secondFunction,
//   thirdFunction,
//   fetchDog,
// };
