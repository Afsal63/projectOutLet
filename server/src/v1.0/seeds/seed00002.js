module.exports = [
  {
    packageName: process?.env?.FREE_PLAN_NAME,
    numberOfDepartments: process?.env?.FREE_PLAN_ALLOWED_DEPARTMENT,
    numberOfUsers: process?.env?.FREE_PLAN_ALLOWED_AGENT,
    status: process?.env?.STATUS,
    duration: process?.env?.DURATION,
    price: process?.env?.PRICE,
  },

  {
    packageName: process?.env?.BASE_PLAN_NAME,
    numberOfDepartments: process?.env?.BASE_PLAN_ALLOWED_DEPARTMENT,
    numberOfUsers: process?.env?.BASE_PLAN_ALLOWED_AGENT,
    status: process?.env?.STATUS,
    duration: process?.env?.DURATION,
    price: process?.env?.PRICE,
  },

  {
    packageName: process?.env?.PREMIUM_PLAN_NAME,
    numberOfDepartments: process?.env?.PREMIUM_PLAN_ALLOWED_DEPARTMENT,
    numberOfUsers: process?.env?.PREMIUM_PLAN_ALLOWED_AGENT,
    status: process?.env?.STATUS,
    duration: process?.env?.DURATION,
    price: process?.env?.PRICE,
  },
];
