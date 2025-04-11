import React, { useEffect } from "react";
import $ from "jquery";

const JQueryFn = () => {
  useEffect(() => {
    // When component mounts
    $("#container").css({
      border: "2px dashed orange",
      padding: "10px",
      minHeight: "80px",
    });
    $("#container").empty(); // Clear it before appending
    $("#container").append("<p style='color: gray;'>Initial content inside container.</p>");
  }, []);

  const handleAppend = () => {
    const newElement = $("<p style='color: green;'>This is an appended element.</p>");
    $("#container").append(newElement);
  };

  const handlePrepend = () => {
    const newElement = $("<p style='color: blue;'>This is a prepended element.</p>");
    $("#container").prepend(newElement);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React + jQuery</h2>

      <div id="container"></div>

      <button onClick={handleAppend} style={{ marginRight: "10px" }}>
        Append
      </button>
      <button onClick={handlePrepend}>Prepend</button>
    </div>
  );
};

export default JQueryFn;
