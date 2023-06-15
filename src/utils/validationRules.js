/**
 * @const {JSON} char8 - The pasword must contain exactly 12 characters.
 * @param {Regxp} char8.rule - A regular expression.
 * @param {String} char8.warning - A message indicating the rule the password must pass.
 */
const char12 = {
    rule: /(?=^.{12}$)/,
    warning: '12 characters',
}

/**
 * @const {JSON} special - The password can't contain special characters.
 * @param {Regxp} special.rule - A regular expression.
 * @param {String} special.warning - A message indicating the rule the password must pass.
 */
const notSpecial = {
    rule: /^[A-Za-z0-9]*$/,
    warning: 'Special characters not alowed',
}

/**
 * @const {Array} rules - A collection of rules the password must pass.
 */
export const rules = [char12, notSpecial]
