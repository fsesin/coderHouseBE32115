import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: 'faridsesin@gmail.com',
      pass: 'zvfpludlzrzhmkmf',
    },
  })