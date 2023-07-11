import { MailDataRequired } from '@sendgrid/mail';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export const sendMessage = async (message: MailDataRequired) => {
  try {
    // TODO

    return Promise.resolve();
  } catch (err) {
    // TODO
    return Promise.reject(err);
  }
};
