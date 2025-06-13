import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {
  // Debug: Check if environment variables are loaded
  console.log("Environment variables check:");
  console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
  console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

  // Map form data to EmailJS template variables
  const templateParams = {
    name: data.name, // EmailJS expects 'from_name'
    email: data.email, // EmailJS expects 'from_email'
    phone: data.phone,
    company: data.company || "Not provided",
    product: data.product || "Not specified",
    subject: data.subject,
    message: data.message,
    time:
      data.time ||
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
  };

  try {
    // Initialize EmailJS with public key first
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      blockList: {
        list: [],
        watchVariable: "userAgent",
      },
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });

    // Correct parameter order: serviceID, templateID, templateParams
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("Email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Failed to send email: ${error.text || error.message}`);
  }
};
