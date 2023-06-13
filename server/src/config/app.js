module.exports = {
  name: "Freston HRMS",
  webUrl: process?.env?.WEB_URL ?? "",
  passwordRecoveryUrl: process?.env?.PASSWORD_RECOVERY_URL ?? "", // password recovery
  helpEmail: process?.env?.HELP_EMAIL,
};
