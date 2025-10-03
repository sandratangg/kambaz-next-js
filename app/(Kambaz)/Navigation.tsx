"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    { name: "Account", path: "/Account", icon: FaRegCircleUser },
    { name: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { name: "Courses", path: "/Dashboard", icon: LiaBookSolid },
    { name: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { name: "Inbox", path: "/Inbox", icon: FaInbox },
    { name: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern Logo" />
      </ListGroup.Item>
      <br />
      {links.map(({ name, path, icon: Icon }) => {
        const active = pathname === path;
        // Account icon/text logic
        const isAccount = name === "Account";
        const iconColor = active
          ? isAccount
            ? "black"
            : "text-danger"
          : isAccount
            ? "white"
            : "text-danger";
        const labelColor = active ? "text-danger" : isAccount ? "text-white" : "text-white";
        return (
          <ListGroup.Item
            key={name}
            href={path}
            as={Link}
            className={`text-center border-0 ${active ? "bg-white" : "bg-black"} ${labelColor}`}
            style={{ fontWeight: active ? 600 : 400 }}
          >
            <Icon className={`fs-1 ${iconColor}`} />
            <br />
            {name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
