"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function LoginModal() {

    const handleLogin = async (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  console.log("LOGIN RESPONSE:", data);

  if (data.success) {
    localStorage.setItem("token", data.token); 
    localStorage.setItem("userId", data.user.id);
      if (data.partner_share_id) {
    localStorage.setItem("partner_share_id", data.partner_share_id);
    }
     if (data.user.role === "partner") {
      window.location.href = "/partnerdashboard";
    } else {
      window.location.href = "/dashboard";
    }
  } else {
    alert(data.message);
  }
};

  return (
    <>
       <div className="modal fade login-modals" id="loginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
                <div className="modal-header p-0 border-0">
                    
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="logoin-modals">
                        <h2> Welcome Back </h2>
                        <p> Login to manage your bowling leagues </p>
                        <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className="form-label"> Email Address </label>
                            <input type="text" className="form-control" name="email" placeholder="hello@gmail.com" required/>
                        </div>
                        <div className="form-group">
                            <div className="d-flex align-items-center justify-content-between w-100">
                                <label className="form-label"> Password </label>
                                <button type="button" className="cl-fogets btn p-0"> Forgot password? </button>
                            </div>
                            <input type="password" className="form-control" placeholder="*******" name="password" required/>
                        </div>
                        <div className="form-group mt-2">
                            <button type="submit" className="btn btn-logins">Login</button>
                        </div>
                        <div className="form-group">
                            <p className="text-center"> Don't have an account? <button type="button" data-bs-toggle="modal" data-bs-target="#registernmodal" className="signup-btn1 btn p-0"> Sign up </button> </p>
                        </div>


                        </form>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
