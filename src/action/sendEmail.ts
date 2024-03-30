"use server"

import { Resend } from 'resend';
import { z } from 'zod'
import { sendEmailSchema } from '@/lib/schema';
import { MessageEmailTemplate } from '@/templates/MessageEmailTemplate';


const RESEND_API = process.env.RESEND_KEY!


type sendEmailType = z.infer<typeof sendEmailSchema>

export async function sendEmail(data: sendEmailType) {

    const resend = new Resend(RESEND_API);


    const { data: response, error } = await resend.emails.send({
        from: 'send@inderjot.tech',
        to: 'inderjotsingh141@gmail.com',
        subject: `Message from ${data.from} `,
        react: MessageEmailTemplate({ email: data.from, content: data.html })
    });

    if (error) {
        console.log(error)
        return { success: false }
    }
    else {

        console.log(response)
        return { success: true }
    }
}
