"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CourseNavigation() {
  const pathname = usePathname();

  // Define your course navigation links
  const links = [
    { name: "Home", path: "/Courses/1234/Home" },
    { name: "Modules", path: "/Courses/1234/Modules" },
    { name: "Piazza", path: "https://piazza.com/", external: true },
    { name: "Zoom", path: "https://zoom.us/signin", external: true },
    { name: "Assignments", path: "/Courses/1234/Assignments" },
    { name: "Quizzes", path: "/Courses/1234/Quizzes" },
    { name: "Grades", path: "/Courses/1234/Grades" },
    { name: "People", path: "/Courses/1234/People" },
  ];

  return (
    <nav style={{ width: 180, padding: "20px 0" }}>
      {links.map((link) => {
        const active = !link.external && pathname === link.path;
        return (
          <div
            key={link.name}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            {active && (
              <div
                style={{
                  width: 3,
                  height: 24,
                  background: "black",
                  marginRight: 10,
                  borderRadius: 2,
                }}
              />
            )}
            {link.external ? (
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#c00c1f",
                  fontWeight: 400,
                  fontSize: 20,
                  textDecoration: "none",
                  marginLeft: 13,
                  transition: "color 0.1s",
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                href={link.path}
                style={{
                  color: active ? "black" : "#c00c1f",
                  fontWeight: active ? 600 : 400,
                  fontSize: 20,
                  textDecoration: "none",
                  marginLeft: active ? 0 : 13,
                  transition: "color 0.1s",
                }}
              >
                {link.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
