//importacion del router generico
import MyRouter from "../router.js";
//import resend
import { Resend } from "resend";
//import variables
import env from "../../config/env.js";

export default class MailingRouter extends MyRouter {
  init() {
    this.post("/", ["PUBLIC"], async (req, res, next) => {
      try {

        const body =  req.body;

        const resend = new Resend(env.MAILING_KEY);

        const response = await resend.emails.send({
            from: 'APDCC.COM.AR <onboarding@resend.dev>',
            to: [`srivarola@gmail.com`],
            subject: `Consulstas desde la WEB de `,
            html: `<strong>fdsafeaea</strong>`
        })

        return response
            ? res.sendSuccess(response)
            : res.sendNotFound('mailing');
      } catch (error) {
        next(error);
      }
    });
  }
}
