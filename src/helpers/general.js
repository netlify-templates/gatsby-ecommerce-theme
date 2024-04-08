/**
 * Is value numeric
 * 
 * Determine whether variable is a number
 * 
 * @param {*} str 
 *
  import { isNumeric } from '../helpers/general'

  isNumeric(value)
*/
function isNumeric(str) {
  if (['string', 'number'].indexOf(typeof str) === -1) return false; // we only process strings and numbers!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

/**
 * Validate email format
 * 
 * Checks the provided email address and validates its format
 * 
 * @param   {String} email  The email address
 * 
    import { validateEmail } from '../helpers/general'

    validateEmail(email)
 */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate strong password format
 * 
 * 
 * @param   {String} password  The password
 * 
    import { validateStrongPassword } from '../helpers/general'

    validateStrongPassword(email)
 */
function validateStrongPassword(password) {
  return /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password);
}

/**
 * Checks for empty string
 * 
 * @param   {String} email  input
 * 
    import { isEmpty } from '../helpers/general'

    isEmpty(email)
 */
function isEmpty(input) {
  if (input === '' || input === null || input === undefined) return true;
}

/**
 * Checks if user is authenticated
 * 
 * 
 * 
    import { isAuth } from '../helpers/general'

    isAuth()
 */
function isAuth() {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const token = window.localStorage.getItem('key');
    if (token) return true;
    else return false;
  } else {
    return true;
  }
}

/**
 * Adds a query param to URLs which is captures by redirect rules
 * (when running in Netlify - otherwise it's harmless)
 * 
    import { toOptimizedImage } from '../helpers/general'

    <img src={toOptimizedImage(image)} .../>
 */
function toOptimizedImage(imageUrl) {
  if (!imageUrl.startsWith('/') || imageUrl.endsWith("imgcdn=true")) return imageUrl;
  return imageUrl + 
          (imageUrl.includes("?") ? "&" : "?") + 
          "imgcdn=true";
}

export { isNumeric, validateEmail, validateStrongPassword, isEmpty, isAuth, toOptimizedImage };
