"use client";

import { Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import "../styles.css"; // For .wd-main-content-offset

const courses = [
  { id: 1, title: "CS1234 React JS", description: "Full Stack software developer", image: "/images/reactjs.png" },
  { id: 2, title: "DS3000 Data Science", description: "Data analysis and visualization", image: "/images/datascience.png" },
  { id: 3, title: "CS3800 Theory of Computation", description: "Theories of Computation ", image: "/images/theory.jpeg" },
  { id: 4, title: "CY2550 Foundations of Cybersecurity", description: "Cybersecurity fundamentals", image: "/images/cyber.jpeg" },
  { id: 5, title: "CS4550 Web Development", description: "Web development fundamentals", image: "/images/webdev.jpeg" },
  { id: 6, title: "CS3000 Algorithms and Data", description: "Algorithms and data structures", image: "/images/algo.jpeg" },
  { id: 7, title: "ENGW1111 First-Year Writing", description: "Academic writing skills", image: "/images/writing.png" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="wd-main-content-offset p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {courses.map(course => (
          <Col key={course.id} style={{ minWidth: 250, maxWidth: 270 }}>
            <Card>
              <Link href="/Courses/1234" className="text-decoration-none text-dark">
                <Card.Img as={Image} variant="top" src={course.image} alt={course.title} width={250} height={150} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">{course.title}</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>{course.description}</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
