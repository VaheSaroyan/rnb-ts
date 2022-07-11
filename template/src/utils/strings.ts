/**
 * check if a string is empty
 * @param str
 */
export const isEmpty = (str: string) => str.trim().length === 0;
/**
 * check if a string is not empty
 * @param str
 */
export const isNotEmpty = (str: string) => !isEmpty(str);
/**
 * check if a string is phone number
 * @param str
 */
export const isPhoneNumber = (str: string) => /^\d{10}$/.test(str);
