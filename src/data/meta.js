/**
 * @export Metadata
 */
require('dotenv').config();
const { META_TITLE, META_URL, META_DESC, META_LANG, META_COLOR, META_EMAIL, META_TELEPHONE } =
  process.env;

module.exports = {
  title: META_TITLE || 'NOC Alerts',
  url: META_URL || '',
  description: META_DESC || 'Network Operations Center Alerts and Notification Service',
  lang: META_LANG || 'en',
  primaryColor: META_COLOR || '#DB0000',
  email: META_EMAIL || undefined,
  telephone: META_TELEPHONE || undefined,
  dateFormat: 'dd LLLL yyyy',
};
