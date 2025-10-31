"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
  const isNewAssignment = aid === "new";
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  
  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableDate: "",
    availableUntilDate: "",
    course: cid as string,
  });

  useEffect(() => {
    if (!isNewAssignment && existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [isNewAssignment, existingAssignment]);

  const handleSave = () => {
    if (isNewAssignment) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4" style={{ maxWidth: 700 }}>
      <h2>{isNewAssignment ? "New Assignment" : `Edit Assignment: ${assignment.title}`}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control 
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control 
                type="number" 
                value={assignment.points}
                onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="wd-group">
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="wd-display-grade-as">
              <Form.Label>Display Grade as</Form.Label>
              <Form.Select defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select defaultValue="Online">
            <option value="Online">Online</option>
            <option value="OnPaper">On Paper</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Online Entry Options</Form.Label>
          <div>
            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
          </div>
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="wd-due-date">
              <Form.Label>Due</Form.Label>
              <Form.Control 
                type="date" 
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="wd-available-from">
              <Form.Label>Available from</Form.Label>
              <Form.Control 
                type="date" 
                value={assignment.availableDate}
                onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="wd-available-until">
              <Form.Label>Until</Form.Label>
              <Form.Control 
                type="date" 
                value={assignment.availableUntilDate}
                onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" type="button" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}