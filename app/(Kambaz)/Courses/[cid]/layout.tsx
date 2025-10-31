"use client";
import { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import CoursesNavigation from "./Navigation";

export default function CoursesLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify 
          className="me-4 fs-4 mb-1" 
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />
        {course?.name} &gt; {course?.number}
      </h2>
      <hr />
      <div className="d-flex">
        {isSidebarVisible && (
          <div className="d-none d-md-block">
            <CoursesNavigation cid={cid as string} />
          </div>
        )}
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}