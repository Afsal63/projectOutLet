module.exports = {
  YES: true, // boolean true
  NO: false, // boolean false
  SALT_ROUNDS: 10, // password salt rounds
  DATE_SAVING_FORMAT: "YYYY-MM-DD", // date is saving in this format
  STATUS_ACTIVE: 1, // active
  STATUS_INACTIVE: 0, // in-active
  STATUS_SUSPENDED: 10, // in-active
  STATUS_DISABLED: 9, //disabled
  RESET_PASSWORD_TOKEN_LENGTH: 64, // reset password token length
  ROUTE_RESET_PASSWORD: "/auth/reset-password?token={token}",

  // email template keys
  EMAIL_SIGNUP_COMPLETED: "signUpCompleted", // signup completed
  EMAIL_RESET_PASSWORD: "resetPassword", // reset password link mail
  EMAIL_PASSWORD_CHANGED: "passwordChanged", // password changed mail
  EMAIL_CONFIRM_ORDER_OTP: "otpSend", // otp send mail
  EMAIL_ORDER_CONFIRMED: "orderConfirmed", //order confirmed mail
  EMAIL_ORDER_CONFIRMED_CE: "orderConfirmedCe", //order confirmed currency exchange mail
  EMAIL_ORDER_CONFIRMED_TC: "orderConfirmedTc", //order confirmed travel card mail
  EMAIL_ORDER_CONFIRMED_ADMIN_CP: "orderConfirmedAdminCp", // order confirm mail to admin and channel partner
  EMAIL_ORDER_SMA_VERIFIED: "orderSmaVerified", //order of send money aboroad verified mail
  EMAIL_ORDER_CE_TC_VERIFIED: "orderCeTcVerified", // order of travel card , currency exchange verified mail
  EMAIL_CURRENCY_EXCHANGE_CONFIRMED: "currencyExchangeConfirmed", //currency exchange confirmed mail
  EMAIL_TRAVEL_CARD_CONFIRMED: "travelCardConfirmed", //travelcard confirmed mail
  EMAIL_MONTHLY_ORDER_DETAILES: "monthlyMail", //monthlyMail mail
  EMAIL_AGENT_CP_PROFILE_SUBMITTED: "agentCpProfileSubmitted", //agent ,channel partner profile submitted email
  EMAIL_AGENT_CP_PROFILE_APPROVED: "agentCpProfileApproved", //agent ,channel partner profile approved email
  EMAIL_AGENT_CP_PROFILE_REJECTED: "agentCpProfileRejected", //agent ,channel partner profile rejected email
  EMAIL_ORDER_STATUS_CHANGED: "orderStatusChanged", //order status change email
  EMAIL_RATE_ALERT: "rateAlertCreated",
  EMAIL_ORDER_CONFIRMED_SMA_CP: "orderConfirmedSmaCp", // SMA order confirm mail to channel partner
  EMAIL_ORDER_CONFIRMED_CE_CP: "orderConfirmedCeCp", // CE order confirm mail to channel partner
  EMAIL_ORDER_CONFIRMED_TC_CP: "orderConfirmedTcCp", // TC order confirm mail to channel partner
  EMAIL_ORDER_CONFIRMED_SMA_ADMIN: "orderConfirmedSmaAdmin", // SMA order confirm mail to Admin
  EMAIL_ORDER_CONFIRMED_CE_ADMIN: "orderConfirmedCeAdmin", // CE order confirm mail to Admin
  EMAIL_ORDER_CONFIRMED_TC_ADMIN: "orderConfirmedTcAdmin", // TC order confirm mail to Admin
  EMAIL_USER_SIGNUP_TO_ADMIN: "signUpAdminNotification", // User Signed up mail to Admin

  //money transfer
  BANK_FEE: 500, // bank charges including gst
  BANK_FEE_SMA_CUSTOMER: 300,
  BANK_FEE_CE_CUSTOMER: 200,
  BANK_FEE_TC_CUSTOMER: 250,
  BANK_FEE_SMA_AGENT: 300,
  BANK_FEE_CE_AGENT: 200,
  BANK_FEE_TC_AGENT: 250,
  BANK_FEE_TC_EXEMPT_LIMIT: 200000,
  TCS_APPLY_AMOUNT: 700000, // without tcs limit
  TCS_PERCENTAGE: 5, // tcs percentage
  NO_TCS: 0, // no tcs

  //gst
  GST_PERCENTAGE: 18,
  GST_MIN_TAX_AMOUNT: 250,
  GST_MAX_TAX_AMOUNT: 60000,

  //order or money transfer status
  ORDER_COMPLETED: 1, // completed order
  ORDER_RECEIVED: 2, //recieved order
  ORDER_VERIFIED: 3, // verified order
  ORDER_REJECTED: 4, // rejected order
  ORDER_PENDING: 0, //pending order

  //otp types
  OTP_TYPE_MONEY_TRANSFER: 1, //money transfer
  OTP_TYPE_SIGNUP: 2, // signup
  OTP_TYPE_LOGIN: 3, //login
  OTP_TYPE_CURRENCY_EXCHANGE: 4, //currency exchange
  OTP_TYPE_TRAVEL_CARD: 5, //travel card

  //user roles
  ROLE_CUSTOMER: "customer", //customer user role
  ROLE_AGENT: "agent", // agent user role
  ROLE_PARTNER: "cpartner", // channel partner user role
  ROLE_ADMIN: "admin", // super admin user role
  ROLE_STAFF: "staff", // admin/staff user role
  ROLE_SUPER_ADMIN: "superAdmin",
  //user mode
  USER_MODE_INDIVIDUAL: "individual", //individual user mode
  USER_MODE_BUSINESS: "business", //business user mode
  RESIDENT_NRI: "nri",
  NRI_BUY_LIMIT: 10000,

  //kyc status of agent user
  STATUS_PENDING: "pending",
  STATUS_SUBMITTED: "submitted",
  STATUS_APPROVED: "approved",
  STATUS_REJECTED: "rejected",

  //order types
  ORDER_TYPE_BUY: "buy", //buy type
  ORDER_TYPE_SELL: "sell", //sell type

  //otp generation
  OTP_START: 1000,
  OTP_END: 9000,

  //otp expiry
  OTP_EXPIRY: 5, //otp expiry in minutes

  //email, phone number verification codes
  CODE_EMAIL_VERIFICATION_SUCCESS: 100,
  CODE_EMAIL_EXISTS: 101, //email exists
  CODE_PHONE_NUMBER_EXISTS: 102, //phone number exists
  CODE_INVALID_EMAIL: 103, //invalid email

  //sender or receiver status
  ACTIVE: 1, //active
  INACTIVE: 0, //inactive

  //payment status
  PAYMENT_REQUESTED: 0, //payment requested

  //order id generation
  ORDER_ID_STARTING_CODE: "BO", // starting code of order id
  PAD_LENGTH: 5, //padding length of zero in order id

  //agent code generation
  AGENT_STARTING_CODE: "BEA", //starting code of agent
  AGENT_PAD_LENGTH: 5, //padding length of zero in agent

  // documents
  FILE_TYPE_SIGNATURE: "signature", //document signature
  FILE_TYPE_PANCARD: "panCard", //document pancard
  FILE_TYPE_ADDRESS_PROOF_FRONT: "addressProofFront", //document address proof front
  FILE_TYPE_ADDRESS_PROOF_BACK: "addressProofBack", //document address proof back
  FILE_SUBTYPE_AADHAR: "aadhaarCard", //document aadhar
  FILE_SUBTYPE_PASSPORT: "passport", //document passport
  FILE_SUBTYPE_DRIVING_LICENCE: "drivingLicense", //document driving license
  FILE_TYPE_OFFERLETTER: "offerLetter", //document offer letter
  FILE_TYPE_VISA: "visa", //document visa
  FILE_TYPE_SELF_KYC: "selfAttestedKyc",
  FILE_TYPE_REGISTRATION_CERTIFICATE: "regCertificate",
  FILE_TYPE_GST: "gst",
  FILE_TYPE_AIR_TICKET: "airTicket", //document air ticket
  ID_CARD_VERIFICATION_CODE_SUCCESS: "SUCCESS", // idOcr success response
  ID_CARD_VERIFICATION_STATUS_SUCCESS: 1, //verification success
  ID_CARD_VERIFICATION_STATUS_FAILED: 0, //verification failed
  UPLOAD_SUCCESS: 1, //upload success
  UPLOAD_FAILED: 0, //upload failed

  //default size and number for all page content
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE_NUMBER: 1,

  //multer
  MAX_ALLOWED_FILE_COUNT: 5,

  //aadhar validation length
  AADHAR_LENGTH: 12,

  PRODUCT_SEND_MONEY_ABROAD: "sendMoneyAbroad", //send money abrod
  PRODUCT_CURRENCY_EXCHANGE: "currencyExchange", //currency exchange
  PRODUCT_TRAVEL_CARD: "travelCard", //travel card

  FOREIGN_BANK_CHARGE_OUR: "our", //foreign bank charges our
  FOREIGN_BANK_CHARGE_OUR_AMOUNT: 1500, //foreign bank charge amount
  FOREIGN_BANK_CHARGE_OUR_AMOUNT_AGENT_EDUCATION: 1200, //foreign bank charge amount for agent education purpose

  RESIDENTSTATUS_RESIDENT: "resident", //resident status resident

  //travel Card type
  CARD_TYPE_NEW: "new",
  CARD_TYPE_EXISTING: "existing",

  //margin of agent
  MAX_AGENT_MARGIN: 5,
  MIN_AGENT_MARGIN: 0,

  // dashboard
  STATS_WEEKLY: "weekly",
  STATS_MONTHLY: "monthly",
  STATS_YEARLY: "yearly",
  STATS_WEEKLY_LIMIT: 6,
  STATS_MONTHLY_LIMIT: 12,
  STATS_YEARLY_LIMIT: 6,
  MONTH_NAMES: [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  //rate alert
  ALERT_STATUS_ACTIVE: "active",
  ALERT_STATUS_EXPIRED: "expired",
  ALERT_EXPIRY: 14, // alert expiry in days
  ALERT_LIMIT: 3, // allowed active alerts

  //referral code length
  REFERRAL_CODE_LENGTH: 6,

  //bonus point
  BONUS_POINT_CREDITED: "credited",
  BONUS_POINT_DEBITED: "debited",
  BONUS_POINT_ACTION_SIGN_UP: "signUp",
  BONUS_POINT_SIGN_UP: 100,

  //margin of Send Money Abroad
  MAX_SMA_BUY_MARGIN: 5,
  MIN_SMA_BUY_MARGIN: 0.05,

  //margin of Currency Exchange
  MAX_CE_BUY_MARGIN: 5,
  MIN_CE_BUY_MARGIN: 0.05,
  MAX_CE_SELL_MARGIN: 5,
  MIN_CE_SELL_MARGIN: 0.05,

  //margin of Travel Card
  MAX_TC_BUY_MARGIN: 5,
  MIN_TC_BUY_MARGIN: 0.05,
  MAX_TC_SELL_MARGIN: 5,
  MIN_TC_SELL_MARGIN: 0.05,
  //channel partner validation regex expressions
  PARTNER_REGEX: /^[a-zA-Z0-9_ ]/,
  //maximum update value
  SETTLEMENT_MAX_UPDATES: 4,

  // currency codes
  FOREIGN_CURRENCY_CODES: [
    "AED",
    "AUD",
    "CAD",
    "CHF",
    "USD",
    "EUR",
    "GBP",
    "NZD",
    "SAR",
    "QAR",
    "SGD",
    "JPY",
    "ZAR",
    "DKK",
    "THB",
    "SEK",
    "CNY",
    "HKD",
    "BHD",
    "OMR",
    "KWD",
    "MYR",
    "NOK",
    "PLN",
  ],
  CURRENCY_CODE_INDIA: "INR",

  // Pdf templates
  rblA2Form: "rbl",
  thomasCookA2Form: "thomasCook",
  indusIndA2Form: "indusInd",
  yesBankA2Form: "yesBank",
  ebixA2Form: "ebix",

  GOOGLE_MAP_URL_CPARTNER: "https://www.google.com/maps/place/",

  // cPartner radius
  CPARTNER_RADIUS: 25,

  COUPONS: ["STUDENTZERO", "FIRSTUSER"],

  // Unified id card ocr
  REGION_INDIA: "IN",
  DOCUMENT_PAN: "PAN",
  DOCUMENT_AADHAAR: "AADHAAR",
  DOCUMENT_PASSPORT: "PASSPORT",
  DOCUMENT_DRIVING_LICENSE: "DRIVING_LICENSE",

  // Notification type
  TYPE_ORDER: "order",

  // Addition to api rate
  BUYEX_ADDITION_AMOUNT: 0.03,

  // Purpose code
  PURPOSE_CODE_S1107: "S1107",
  PURPOSE_CODE_S0305: "S0305",
};
