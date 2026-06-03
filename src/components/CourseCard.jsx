function CourseCard(props) {

  function handleEnroll() {

    let enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    enrolledCourses.push(props.title);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourses)
    );

    alert(props.title + " Enrolled Successfully");
  }

  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >

      <h2>{props.title}</h2>

      <p>{props.instructor}</p>

      <button
        onClick={handleEnroll}
        style={{
          padding: "10px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Enroll
      </button>

    </div>
  );
}

export default CourseCard;