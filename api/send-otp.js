export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  try {
    const { email } = req.body || {};

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    const otp =
      Math.floor(1000 + Math.random() * 9000).toString();

    /*
      IMPORTANT:
      یہاں OTP کو database/cache میں محفوظ کرنا ہوگا
      اور email service کے ذریعے Gmail پر بھیجنا ہوگا۔

      SMTP password یا Gmail App Password
      اس فائل میں ہرگز نہ لکھیں۔
    */

    console.log("OTP generated for:", email);

    return res.status(200).json({
      success: true,
      message: "OTP service is ready",
      email: email
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Server error"
    });
  }
      }
