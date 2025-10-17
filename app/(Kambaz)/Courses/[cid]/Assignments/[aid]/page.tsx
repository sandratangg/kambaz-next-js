"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a) => a._id === aid);

  if (!assignment) {
    return <div className="p-4">Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4" style={{ maxWidth: 700 }}>
      <h2>Edit Assignment: {assignment.title}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control defaultValue={assignment.title} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            defaultValue={assignment.description}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" defaultValue={assignment.points} />
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
                defaultValue={assignment.dueDate} 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="wd-available-from">
              <Form.Label>Available from</Form.Label>
              <Form.Control 
                type="date" 
                defaultValue={assignment.availableDate} 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="wd-available-until">
              <Form.Label>Until</Form.Label>
              <Form.Control 
                type="date" 
                defaultValue={assignment.availableUntilDate} 
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2">
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="secondary" type="button">Cancel</Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="primary" type="submit">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}