"use client";
import { usePathname } from "next/navigation";
import Nav from "react-bootstrap/Nav";

export default function TOC() {
  const pathname = usePathname();

  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="/Labs" active={pathname === "/Labs"}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Labs/Lab1" active={pathname === "/Labs/Lab1"}>Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Labs/Lab2" active={pathname === "/Labs/Lab2"}>Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Labs/Lab3" active={pathname === "/Labs/Lab3"}>Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Account/Signin">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/sandratangg">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
