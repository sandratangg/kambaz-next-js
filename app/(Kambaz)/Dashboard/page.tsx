"use client"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/coursesReducer";
import { enrollCourse, unenrollCourse } from "../Courses/enrollmentsReducer";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  
  const [course, setCourse] = useState<any>({
    _id: "0", 
    name: "New Course", 
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg", 
    description: "New Description"
  });
  
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === courseId
    );
  };
  
  const handleEnroll = (courseId: string) => {
    if (currentUser) {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };
  
  const handleUnenroll = (courseId: string) => {
    if (currentUser) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    }
  };
  
  const coursesToDisplay = showAllCourses
    ? courses
    : courses.filter((course: any) => isEnrolled(course._id));

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <Button 
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </Button>
      </h1>
      <hr />
      
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <Button 
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                dispatch(addNewCourse(course));
              }}
            >
              Add
            </Button>
            <Button 
              className="btn btn-warning float-end me-2"
              onClick={() => {
                dispatch(updateCourse(course));
              }}
              id="wd-update-course-click"
            >
              Update
            </Button>
          </h5>
          
          <br />
          
          <FormControl 
            value={course.name} 
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          
          <FormControl 
            value={course.description} 
            className="mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            placeholder="Course Description"
          />
          
          <hr />
        </>
      )}
      
      <h2 id="wd-dashboard-published">
        Published Courses ({coursesToDisplay.length})
      </h2>
      
      <hr />
      
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {coursesToDisplay.map((course: any) => (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link 
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img 
                      src={course.image || "/images/reactjs.jpg"} 
                      width="100%" 
                      height={160}
                      alt={course.name}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                      <button className="btn btn-primary"> Go </button>
                      
                      {isEnrolled(course._id) ? (
                        <button 
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(course._id);
                          }}
                          className="btn btn-danger float-end"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button 
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnroll(course._id);
                          }}
                          className="btn btn-success float-end"
                        >
                          Enroll
                        </button>
                      )}
                      
                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button 
                            onClick={(event) => {
                              event.preventDefault();
                              if (window.confirm(`Are you sure you want to delete ${course.name}?`)) {
                                dispatch(deleteCourse(course._id));
                              }
                            }}
                            className="btn btn-danger float-end me-2"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          
                          <button 
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}