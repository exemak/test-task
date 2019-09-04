import history from './historyStore';

export const getLocalStorageItem = key => {
  let result = localStorage.getItem(key);
  try {
    result = JSON.parse(result);
  } catch(e) {
    //  just don't throw an error
  }
  return result;
};

export const setLocalStorageItem = (key, value) => {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
};

export const ucFirstLetter = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const formatName = ({ title, first, last }) => `${ucFirstLetter(title)} ${ucFirstLetter(first)} ${ucFirstLetter(last)}`;

export const redirect = url => history.push(url);