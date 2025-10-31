"use client";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 fw-normal">Sign up</h1>
          </div>
          
          <Form>
            <div className="form-floating mb-3">
              <Form.Control 
                id="wd-username" 
                placeholder="username"
                style={{ height: "58px" }}
              />
              <label htmlFor="wd-username">Username</label>
            </div>
            
            <div className="form-floating mb-3">
              <Form.Control 
                id="wd-password" 
                placeholder="password" 
                type="password"
                style={{ height: "58px" }}
              />
              <label htmlFor="wd-password">Password</label>
            </div>
            
            <div className="form-floating mb-3">
              <Form.Control 
                id="wd-password-verify" 
                placeholder="verify password" 
                type="password"
                style={{ height: "58px" }}
              />
              <label htmlFor="wd-password-verify">Verify Password</label>
            </div>
            
            <Link 
              href="/Account/Profile" 
              className="btn btn-primary w-100 btn-lg mb-3" 
              id="wd-signup-btn"
              style={{ height: "48px", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              Sign up
            </Link>

            <div className="text-center">
              <Link 
                href="/Account/Signin" 
                id="wd-signin-link"
                className="text-decoration-none"
              >
                Already have an account? Sign in
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
