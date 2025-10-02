export default function AssignmentEditor() {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Name</h2>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />

      <textarea
        id="wd-description"
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.`}
        rows={7}
      /><br /><br />

      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" defaultValue={100} /><br /><br />

      <label htmlFor="wd-group">Assignment Group</label>
      <select id="wd-group" defaultValue="ASSIGNMENTS">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
      </select><br /><br />

      <label htmlFor="wd-display-grade-as">Display Grade as</label>
      <select id="wd-display-grade-as" defaultValue="Percentage">
        <option value="Percentage">Percentage</option>
        <option value="Points">Points</option>
      </select><br /><br />

      <label htmlFor="wd-submission-type">Submission Type</label>
      <select id="wd-submission-type" defaultValue="Online">
        <option value="Online">Online</option>
        <option value="OnPaper">On Paper</option>
      </select><br /><br />

      <div>
        <b>Online Entry Options</b><br />
        <input type="checkbox" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label><br />
        <input type="checkbox" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label><br />
        <input type="checkbox" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
        <input type="checkbox" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
        <input type="checkbox" id="wd-file-upload" />
        <label htmlFor="wd-file-upload">File Uploads</label>
      </div><br />

     <label htmlFor="wd-due-date">Due</label>
      <input id="wd-due-date" type="date" defaultValue={today} /><br /><br />

      <label htmlFor="wd-available-from">Available from</label>
      <input id="wd-available-from" type="date" defaultValue={today} />

      <label htmlFor="wd-available-until"> Until </label>
      <input id="wd-available-until" type="date" defaultValue={today} /><br /><br />

      <button type="button">Cancel</button>
      <button type="button">Save</button>
    </div>
  );
}
