"use client"
import { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const { todos } = useSelector((state: any) => state.todosReducer);
  
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <ListGroup>
        <ListGroupItem className="d-flex">
          <Button 
            onClick={addElement}
            className="btn btn-success">
            Add Element
          </Button>
        </ListGroupItem>
        {array.map((item, index) => (
          <ListGroupItem key={index} className="d-flex align-items-center">
            <span className="flex-grow-1">{item}</span>
            <Button 
              onClick={() => deleteElement(index)}
              className="btn btn-danger">
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr/>
    </div>
  );
}