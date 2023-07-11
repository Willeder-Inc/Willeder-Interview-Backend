export const COOKIE_OPTIONS = {
  httpOnly: true,
  // Since localhost is not having https protocol,
  // secure cookies do not work correctly (in postman)
  secure: process.env.IS_LOCAL === 'local' ? false : true,
  signed: true,
  maxAge: 60 * 60 * 24 * 365 * 1000,
  sameSite: false,
};
