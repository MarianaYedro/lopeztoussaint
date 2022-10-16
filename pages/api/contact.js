// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, firma, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: '',
      pass: '',
    },
  });

  try {
    const emailRes = await transporter.sendMail({
       from: email,
       to: 'marianayedro@gmail.com',
       subject: `Nuevo contacto desde su sitio web ${name}`,
       html: `<p>Tiene un nuevo contacto</p><br>
       <p><strong>Nombre: </strong> ${name} </p><br>
       <p><strong>Firma: </strong> ${firma} </p><br>
       <p><strong>Teléfono: </strong> ${phone} </p><br>
       <p><strong>Email: </strong> ${email} </p><br>
       <p><strong>Mensaje: </strong> ${message} </p><br>`,
     });

    console.log('Mensaje enviado');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};