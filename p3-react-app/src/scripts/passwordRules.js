/**
 * @const {JSON} char8 - The pasword must contain at least eight characters.
 * @param {Regxp} char8.rule - A regular expression.
 * @param {String} char8.warning - A message indicating the rule the password must pass.
 */
const char8 = {
  rule: /(?=^.{8,}$)/,
  warning: 'Eight characters',
};

/**
 * @const {JSON} uppercase - The password must contain at least one uppercase and one lowercase.
 * @param {Regxp} uppercase.rule - A regular expression.
 * @param {String} uppercase.warning - A message indicating the rule the password must pass.
 */
const uppercase = {
  rule: /(?=.*[a-z])(?=.*[A-Z])/,
  warning: 'One uppercase and one lowercase',
};

/**
 * @const {JSON} number - The password must contain at least one number.
 * @param {Regxp} number.rule - A regular expression.
 * @param {String} number.warning - A message indicating the rule the password must pass.
 */
const number = {
  rule: /(?=.*\d)/,
  warning: 'One number',
};

/**
 * @const {JSON} special - The password must contain at least one special character.
 * @param {Regxp} special.rule - A regular expression.
 * @param {String} special.warning - A message indicating the rule the password must pass.
 */
const special = {
  rule: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  warning: 'One special character',
};

/**
 * @const {JSON} emai - Must be a valid email.
 * @param {Regxp} special.rule - A regular expression.
 * @param {String} special.warning - A message indicating the rule the password must pass.
 */
export const emailRule = {
  rule: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  warning: 'Must be a valid email'
}

/**
 * @const {Array} rules - A collection of rules the password must pass.
 */
export const rules = [char8, uppercase, number, special];

