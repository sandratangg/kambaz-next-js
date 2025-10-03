"use client";
import { Form } from "react-bootstrap";
import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4" style={{ maxWidth: 400 }}>
      <h2>Sign up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="wd-username">
          <Form.Control placeholder="username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-password">
          <Form.Control placeholder="password" type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-password-verify">
          <Form.Control placeholder="verify password" type="password" />
        </Form.Group>
        <Link href="/Account/Profile" className="btn btn-primary w-100 mb-2" id="wd-signup-btn">
          Sign up
        </Link>

        <div className="text-center">
          <Link href="/Kambaz/Account/Signin" id="wd-signin-link">
            Sign in
          </Link>
        </div>
      </Form>
    </div>
  );
}
