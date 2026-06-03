function ProgressBar(props) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#475569",
        borderRadius: "10px",
        overflow: "hidden",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          width: props.progress + "%",
          backgroundColor: "#22c55e",
          padding: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        {props.progress}%
      </div>
    </div>
  );
}

export default ProgressBar;