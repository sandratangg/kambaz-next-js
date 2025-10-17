"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function CoursesNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = [
    { name: "Home", path: `/Courses/${cid}/Home`, external: false },
    { name: "Modules", path: `/Courses/${cid}/Modules`, external: false },
    { name: "Piazza", path: "https://piazza.com/", external: true },
    { name: "Zoom", path: "https://zoom.us/signin#/login", external: true },
    { name: "Assignments", path: `/Courses/${cid}/Assignments`, external: false },
    { name: "Quizzes", path: `/Courses/${cid}/Quizzes`, external: false },
    { name: "Grades", path: `/Courses/${cid}/Grades`, external: false },
    { name: "People", path: `/Courses/${cid}/People`, external: false }
  ];

  return (
    <ListGroup id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroupItem
          key={link.name}
          as={link.external ? "a" : Link}
          href={link.path}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={`border border-0 ${
            pathname.includes(link.name) 
              ? "active text-black bg-white" 
              : "text-danger bg-white"
          }`}
        >
          {link.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}