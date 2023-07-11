export const MESSAGE_RESET_PASSWORD = (email: string, tokenUrl: string) => ({
  to: email,
  from: process.env.SENDGRID_FROM_EMAIL || '',
  subject: `【${process.env.APP_TITLE}】Password reset request was received`,
  html: `<p>Click below link fo rest your password.</p>
    <a href="${tokenUrl}"> Password Reset Link </a>`,
});
