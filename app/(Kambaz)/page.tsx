import "./styles.css";

export default function Kambaz() {
  return (
    <div className="p-3">
      <h1>Dashboard</h1>
      <h2>Course</h2>
      <h3>Published Courses (12)</h3>
      <hr />
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src="/images/reactjs.png" className="card-img-top" alt="React JS" />
            <div className="card-body">
              <h5 className="card-title">CS1234 React JS</h5>
              <p className="card-text">Full Stack software developer</p>
              <a href="/Kambaz/Courses/1234/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src="/images/datascience.png" className="card-img-top" alt="Data Science" />
            <div className="card-body">
              <h5 className="card-title">DS3000 Data Science</h5>
              <p className="card-text">Introduction to Data Science</p>
              <a href="/Kambaz/Courses/DS3000/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}