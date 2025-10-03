"use client";

import Link from 'next/link';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import { PiNotePencil } from 'react-icons/pi';
import { InputGroup, Form, Button, ListGroup } from 'react-bootstrap';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      {/* Search and Controls */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup style={{ maxWidth: '300px' }}>
          <InputGroup.Text className="bg-white">
            <FaSearch />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </InputGroup>
        
        <div>
          <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-2" />
            Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </div>
      </div>

      {/* Assignments Section */}
      <div className="border">
        <div className="bg-secondary p-3 d-flex justify-content-between align-items-center">
          <div>
            <BsGripVertical className="me-2" />
            <strong>ASSIGNMENTS</strong>
            <span className="ms-2">40% of Total</span>
          </div>
          <div>
            <FaPlus className="me-3" />
            <IoEllipsisVertical />
          </div>
        </div>

        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex align-items-center">
            <div className="border-start border-success border-4 ps-3 flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <Link href="/Courses/1234/Assignments/123" className="text-decoration-none">
                    <PiNotePencil className="me-2 text-success fs-5" />
                  </Link>
                  <div>
                    <Link href="/Courses/1234/Assignments/123" 
                          className="text-decoration-none text-dark fw-bold">
                      A1 - ENV + HTML
                    </Link>
                    <div className="text-muted small">
                      Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | 
                      <span className="text-danger"> <strong>Due</strong> May 13 at 11:59pm</span> | 100 pts
                    </div>
                  </div>
                </div>
                <IoEllipsisVertical />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex align-items-center">
            <div className="border-start border-success border-4 ps-3 flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <Link href="/Courses/1234/Assignments/124" className="text-decoration-none">
                    <PiNotePencil className="me-2 text-success fs-5" />
                  </Link>
                  <div>
                    <Link href="/Courses/1234/Assignments/124" 
                          className="text-decoration-none text-dark fw-bold">
                      A2 - CSS + BOOTSTRAP
                    </Link>
                    <div className="text-muted small">
                      Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | 
                      <span className="text-danger"> <strong>Due</strong> May 20 at 11:59pm</span> | 100 pts
                    </div>
                  </div>
                </div>
                <IoEllipsisVertical />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex align-items-center">
            <div className="border-start border-success border-4 ps-3 flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <Link href="/Courses/1234/Assignments/125" className="text-decoration-none">
                    <PiNotePencil className="me-2 text-success fs-5" />
                  </Link>
                  <div>
                    <Link href="/Courses/1234/Assignments/125" 
                          className="text-decoration-none text-dark fw-bold">
                      A3 - JAVASCRIPT + REACT
                    </Link>
                    <div className="text-muted small">
                      Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | 
                      <span className="text-danger"> <strong>Due</strong> May 27 at 11:59pm</span> | 100 pts
                    </div>
                  </div>
                </div>
                <IoEllipsisVertical />
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
