export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const { email, otp } = req.body || {};

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required"
      });
    }

    // OTP validation will be connected to the
    // secure OTP storage/email service in the next step.

    if (!/^\d{4}$/.test(String(otp))) {
      return res.status(400).json({
        success: false,
        message: "OTP must contain exactly 4 digits"
      });
    }

    return res.status(200).json({
      success: true,
      verified: true,
      message: "OTP format verified"
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}
