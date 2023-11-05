import React, { useState } from 'react';

export function Email({ email, setEmail }: { email: string, setEmail: (email: string) => void }) {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const onEmailBlur = () => {
    setIsBlurred(true);
    setIsValidEmail(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email));
  };

  return (
    <div className="my-5">
      <input
        className={`input w-full ${isBlurred && !isValidEmail ? 'border-red-500 text-red-500' : ''}`}
        type="text"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        required={true}
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        title="Enter a valid email address."
      />
      {isBlurred && !isValidEmail && (
        <div className="text-red-500 mt-2">
          Please enter a valid email address.
        </div>
      )}
    </div>
  );
}