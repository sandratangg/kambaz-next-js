import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      {/* Add button toolbar here */}
      <div>
        <button type="button">Collapse All</button>
        <button type="button">View Progress</button>
        <select name="publish" id="publishAll">
          <option value="publishAll">Publish All</option>
        </select>
        <button type="button">+ Module</button>
      </div>

      {/* Existing layout */}
      <table>
        <tbody>
          <tr>
            <td valign="top" width="70%">
              <Modules />
            </td>
            <td valign="top">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
