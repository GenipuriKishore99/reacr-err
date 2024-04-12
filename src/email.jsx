import React, { useState } from 'react';

const EmailOTPGenerator = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const generateOTP = () => {
    // Generate a random OTP
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);
    setOTP(generatedOTP);

    // Here you would typically send the OTP to the provided email address
    // You can use external libraries or services to send emails, like nodemailer or a third-party API
    // For simplicity, we'll just console log it here
    console.log(`OTP for ${email}: ${generatedOTP}`);

    setSent(true);
  };

  return (
    <div>
      <h2>Email OTP Generator</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleChange} />
      </div>
      {!sent && (
        <button onClick={generateOTP}>Generate OTP</button>
      )}
      {sent && (
        <div>
          <p>An OTP has been sent to {email}.</p>
          <p>Enter OTP:</p>
          <input type="text" value={otp} disabled />
        </div>
      )}
    </div>
  );
};

export default EmailOTPGenerator;
