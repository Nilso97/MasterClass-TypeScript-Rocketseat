import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "John",
    email: "test@test.com.br",
  },

  {
    name: "Suzan",
    email: "test@test.com.br",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "John",
        email: "test@test.com.br",
      },

      message: {
        subject: "Bem-vindo ao Sistema!",
        body: "Sistema desenvolvido para envio de E-mails",
        /* attachment? é opcional... */
      },
    });

    return res.send();
  },
};
