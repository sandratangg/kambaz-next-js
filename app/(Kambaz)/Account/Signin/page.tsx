"use client";
import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="p-4" style={{ maxWidth: 400 }}>
            <div className="card p-4" style={{ width: '300px' }}>
                <h3 className="text-center mb-3">Sign in</h3>
                <Form.Control
                    id="wd-username"
                    placeholder="username"
                    className="mb-2"
                />
                <Form.Control
                    id="wd-password"
                    placeholder="password"
                    type="password"
                    className="mb-3"
                />
                <Link
                    id="wd-signin-btn"
                    href="/Dashboard"
                    className="btn btn-primary w-100 mb-2 text-decoration-none">
                    Sign in
                </Link>
                <div className="text-center">
                    <Link id="wd-signup-link" href="/Account/Signup" className="text-decoration-none">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
