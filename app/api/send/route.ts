import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend("re_Sc6nyuS9_3g8SecMaZGjWicX84GLhB4iL");
export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "inversion-plus contact <onboarding@resend.dev>",
        to: ["emmanuel.haro04@gmail.com"],
        subject: "Contacto - Inversion +",
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "Inversion+:",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}