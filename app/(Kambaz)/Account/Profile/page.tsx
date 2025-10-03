
"use client";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4" style={{ maxWidth: 500 }}>
      <h2>Profile</h2>
      <Form>
        <Form.Group className="mb-3" controlId="wd-username">
          <Form.Label>Username</Form.Label>
          <Form.Control defaultValue="alice" placeholder="username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-password">
          <Form.Label>Password</Form.Label>
          <Form.Control defaultValue="123" placeholder="password" type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control defaultValue="Alice" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control defaultValue="Wonderland" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control defaultValue="2000-01-01" type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-email">
          <Form.Label>Email</Form.Label>
          <Form.Control defaultValue="alice@wonderland" type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-role">
          <Form.Label>Role</Form.Label>
          <Form.Select defaultValue="FACULTY">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Link href="Signin" className="btn btn-danger">Sign out</Link>
          <Button variant="primary" type="submit">Save</Button>
        </div>
      </Form>
    </div>
  );
}
