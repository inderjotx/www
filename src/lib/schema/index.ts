import z from 'zod'

export const sendEmailSchema = z.object({
    from: z.string().email(),
    html: z.string().min(5, 'Content should have atlest 5 characters')
})

