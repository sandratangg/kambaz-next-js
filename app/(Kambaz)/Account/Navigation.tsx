"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AccountNavigation() {
  const currentPath = usePathname();

  const links = [
    { name: "Signin", path: "/Account/Signin" },
    { name: "Signup", path: "/Account/Signup" },
    { name: "Profile", path: "/Account/Profile" },
  ];

  return (
    <nav style={{ width: 140, padding: "20px 0" }}>
      {links.map((link) => {
        const active = currentPath === link.path;
        return (
          <div
            key={link.path}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            {active && (
              <div
                style={{
                  width: 3,
                  height: 28,
                  background: "black",
                  marginRight: 10,
                  borderRadius: 2,
                }}
              />
            )}
            <Link
              href={link.path}
              style={{
                color: active ? "black" : "#c00c1f",
                fontWeight: active ? 600 : 400,
                fontSize: 22,
                textDecoration: "none",
                marginLeft: active ? 0 : 13,
                transition: "color 0.1s",
              }}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
