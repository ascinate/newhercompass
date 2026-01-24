"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/reset-password/${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }
    );

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="New password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submit}>Update Password</button>
    </div>
  );
}
