import { useState } from "react";

function AnimatedDiv() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      className={`frame ${isExpanded ? "expanded" : ""}`}
      onClick={handleClick}
    >
      <p>Some content here</p>
    </div>
  );
}
