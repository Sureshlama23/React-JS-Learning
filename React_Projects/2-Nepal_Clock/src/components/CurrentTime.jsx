function CurrentTime() {
  let time = new Date();
  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()} PM
    </p>
  );
}

export default CurrentTime;
