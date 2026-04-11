'use server';

import { Resend } from 'resend';
import { contactSchema, ContactFormData } from '@/lib/validations/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormData) {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  try {
    const { name, email, phone, message } = result.data;

    const { data: resendData, error } = await resend.emails.send({
      from: 'Radix Website <onboarding@resend.dev>',
      to: 'tahsin10@outlook.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #F5B82A; padding-bottom: 10px;">New Inquiry from Radix Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-left: 4px solid #F5B82A;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; pt-10px;">
            This email was sent from the "Get In Touch" form on radix.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: 'Failed to send email. Please try again later.' };
    }

    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
  } catch (err) {
    console.error('Submission error:', err);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
