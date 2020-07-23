import nodemailer from 'nodemailer';

const { GMAIL_ACCOUNT, GMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : GMAIL_ACCOUNT,
        pass : GMAIL_PASSWORD
    }
});

const mailOption = {
    from : GMAIL_ACCOUNT,
    to : 'jongjjang03@naver.com',
    subject : '테스트',
    text : 'Hello'
};

transporter.sendMail(mailOption, (err, info) => {
  if (err) {
    console.error('Send Mail error : ', err);
  }
  else {
    console.log('Message sent : ', info);
  }
});