import sgMail from '@sendgrid/mail';

// Use import.meta.env instead of process.env for Vite applications
const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY as string;

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendAuditResults = async (to: string, subject: string, text: string, html: string) => {
  const msg = {
    to,
    from: import.meta.env.VITE_SENDGRID_VERIFIED_SENDER as string, // Use environment variable for the sender email
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};