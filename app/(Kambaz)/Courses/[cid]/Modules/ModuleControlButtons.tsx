"use client";

import { BsPlus, BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <BsPlus className="fs-4 me-2" />
      <LessonControlButtons />
    </div>
  );
}
