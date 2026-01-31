
import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ request }) => {
    const resendApiKey = import.meta.env.RESEND_API_KEY;

    if (!resendApiKey) {
        return new Response(
            JSON.stringify({
                message: "Missing RESEND_API_KEY environment variable",
            }),
            { status: 500 }
        );
    }

    const resend = new Resend(resendApiKey);

    try {
        const data = await request.formData();
        const email = data.get("email_address") as string;
        const name = data.get("first_name") as string;

        if (!email) {
            return new Response(
                JSON.stringify({ message: "Email is required" }),
                { status: 400 }
            );
        }

        // Gửi email xác thực OTP (Môỏng)
        // Trong thực tế, bạn sẽ generate OTP, lưu vào DB, và gửi OTP đó.
        // Ở đây mình sẽ gửi một email xác nhận demo.

        // Gửi cho Admin (Thông báo có người đăng ký mới)
        // Hoặc gửi cho User (Xác nhận đăng ký)

        const sendResult = await resend.emails.send({
            from: "Blog <onboarding@resend.dev>", // Sử dụng domain mặc định của Resend để test
            to: [email], // Gửi tới email người dùng đăng ký
            subject: "Xác nhận đăng ký nhận tin từ Blog",
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Xin chào ${name || "bạn"},</h2>
          <p>Cảm ơn bạn đã đăng ký nhận tin từ Blog của mình.</p>
          <p>Để hoàn tất việc đăng ký, vui lòng bấm vào nút bên dưới (đây là bản demo, chưa có link xác thực thật):</p>
          <a href="${request.url}" style="background: #6366f1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Xác nhận đăng ký</a>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">Nếu bạn không yêu cầu email này, hãy bỏ qua nó.</p>
        </div>
      `,
        });

        if (sendResult.error) {
            return new Response(
                JSON.stringify({ message: sendResult.error.message }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({
                message: "Success! Email sent.",
                id: sendResult.data?.id,
            }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Internal Server Error" }),
            { status: 500 }
        );
    }
};
