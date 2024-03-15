import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		const response = await sgMail.send({
			to: "info@erikjonsberg.com", // Your email where you'll receive emails
			from: "info@erikjonsberg.com", // your website email address here
			subject: `${req.body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Message from contact form</title>
        <meta name="description" content="Message from contact form">
        <meta name="author" content="Erik Jonsberg">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      </head>
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You&apos;ve got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="#" class="logo-image" style="height: 63.33px;width: 56px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Erik Jonsberg<br>Javascript Developer<br>+1 (413) 522-3431</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="#" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="#" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="#" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="#" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="#" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="#" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
              </div>
              </div>
      </body>
      </html>`,
		});
		console.log(response);
	} catch (error) {
		// console.log(error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
	return res.status(200).json({ status: "OK" });
}

export default sendEmail;
