import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Check for required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const pass = process.env.EMAIL_APP_PASSWORD;

        if (!pass) {
            console.error("Missing EMAIL_APP_PASSWORD environment variable");
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Configure the transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ai.operators.group@gmail.com',
                // Temporarily hardcoded for immediate verification
                pass: 'tmau bsrq qnmt yaqp'.replace(/\s+/g, ''),
            },
        });

        // Admin Notification Options
        const adminMailOptions = {
            from: '"AI Operators" <ai.operators.group@gmail.com>',
            replyTo: email,
            to: 'ai.operators.group@gmail.com',
            subject: `New Project Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Inter', sans-serif; color: #1f2937; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f3f4f6; padding-bottom: 40px; }
        .main-table { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .header { background: #000000; padding: 32px 40px; text-align: center; }
        .header-title { color: #ffffff; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0; }
        .status-bar { background-color: #e5e7eb; padding: 12px 40px; font-size: 13px; font-weight: 600; color: #4b5563; text-transform: uppercase; letter-spacing: 1px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #d1d5db; }
        .status-badge { background-color: #10b981; color: white; padding: 4px 10px; border-radius: 9999px; font-size: 11px; }
        .content-section { padding: 40px; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #6b7280; font-weight: 700; margin-bottom: 8px; display: block; }
        .value { font-size: 16px; font-weight: 500; color: #111827; margin-bottom: 24px; }
        .message-container { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-top: 8px; font-size: 15px; line-height: 1.7; color: #374151; }
        .btn { background-color: #000000; color: #ffffff !important; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; margin-top: 24px; }
        .footer { background-color: #f9fafb; padding: 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div style="height: 40px;"></div>
        <table class="main-table" role="presentation">
            <tr><td class="header"><h1 class="header-title">AI Operators</h1></td></tr>
            <tr>
                <td class="status-bar">
                    <span>New Inquiry</span>
                    <span class="status-badge">Action Required</span>
                </td>
            </tr>
            <tr>
                <td class="content-section">
                    <div class="label">Prospective Client</div>
                    <div class="value">${name}</div>
                    
                    <div class="label">Contact Email</div>
                    <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>

                    <div class="label" style="margin-top: 32px;">Project Brief</div>
                    <div class="message-container">${message.replace(/\n/g, '<br>')}</div>

                    <div style="text-align: center;">
                        <a href="mailto:${email}" class="btn">Reply to Client</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <p>Received via <strong>AI Operators Website</strong> • ${new Date().toLocaleString()}</p>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
            `,
        };

        // Client Auto-Reply Options
        const userAutoReplyOptions = {
            from: '"AI Operators" <ai.operators.group@gmail.com>',
            to: email, // Send to the user
            subject: 'We received your inquiry - AI Operators',
            text: `Hi ${name},\n\nThanks for reaching out! We have received your project details and will get back to you within 24 hours.\n\nBest regards,\nThe AI Operators Team`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { margin: 0; padding: 0; background-color: #ffffff; font-family: 'Inter', sans-serif; color: #1f2937; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; text-align: center; }
        .logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; margin-bottom: 40px; display: inline-block; color: #000; text-decoration: none; }
        .hero-text { font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 16px; letter-spacing: -0.5px; }
        .body-text { font-size: 16px; color: #4b5563; line-height: 1.6; margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto; }
        .divider { height: 1px; background-color: #e5e7eb; width: 100%; margin: 32px 0; }
        .highlight-box { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; text-align: left; margin-bottom: 32px; }
        .label { font-size: 11px; text-transform: uppercase; color: #9ca3af; font-weight: 600; letter-spacing: 1px; margin-bottom: 8px; }
        .check-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background-color: #dcfce7; color: #166534; border-radius: 50%; margin-bottom: 24px; }
        .btn { background-color: #000000; color: #ffffff !important; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: 500; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">AI Operators.</div>
        
        <div class="check-icon">
            <span style="font-size: 24px;">✓</span>
        </div>
        
        <h1 class="hero-text">We received your request.</h1>
        <p class="body-text">
            Hi ${name.split(' ')[0]}, thanks for reaching out. We've received your details and our team is already reviewing them.
        </p>

        <div class="highlight-box">
            <div class="label">What happens next?</div>
            <p style="margin: 0; font-size: 14px; color: #374151;">
                We typically reply within <strong>24 hours</strong> with a preliminary analysis or a calendar link to discuss your project further.
            </p>
        </div>

        <p class="body-text" style="font-size: 14px;">
            In the meantime, feel free to check out our latest case studies.
        </p>

        <a href="https://ai-solutions.group" class="btn">View Our Work</a>
        
        <div style="margin-top: 60px; font-size: 12px; color: #9ca3af;">
            © ${new Date().getFullYear()} AI Operators. All rights reserved.
        </div>
    </div>
</body>
</html>
            `
        };

        // Send both emails in parallel
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userAutoReplyOptions)
        ]);

        console.log("Both emails sent successfully!");

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: unknown) {
        console.error('Failed to send email - Full Error:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: (error as Error).message },
            { status: 500 }
        );
    }
}
