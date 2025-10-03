"use client";

import { Nav } from "react-bootstrap";
export default function TOC() {
 return (
   <Nav variant="pills">
     <Nav.Item>
       <Nav.Link href="/Labs">Home</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="/Labs/Lab1">Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="/Labs/Lab2" active>Lab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="/Labs/Lab3">Lab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
          <Nav.Link href="/Account/Signin">Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="https://github.com/sandratangg">My GitHub</Nav.Link>
     </Nav.Item>
   </Nav>
);}
