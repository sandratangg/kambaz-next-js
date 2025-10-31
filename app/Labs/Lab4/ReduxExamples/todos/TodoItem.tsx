"use client"
import React from "react";
import { useDispatch } from "react-redux";
import { Button, ListGroupItem } from "react-bootstrap";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }: { todo: any }) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id} className="d-flex align-items-center">
      <span className="flex-grow-1">{todo.title}</span>
      <Button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"
              className="btn btn-primary me-2"> Edit </Button>
      <Button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"
              className="btn btn-danger"> Delete </Button>
    </ListGroupItem>
);}
