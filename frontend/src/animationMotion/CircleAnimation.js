import React from "react";
import { getSmoothStepPath } from "@xyflow/react";

export function AnimatedSVGEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <svg style={{ overflow: "visible", position: "absolute" }}>
      <path
        id={id}
        d={edgePath}
        fill="none"
        stroke="#b1b1b7"
        strokeWidth={2}
      />
      <circle r="5" fill="#ff0073">
        <animateMotion dur="2s" repeatCount="indefinite">
          <mpath href={`#${id}`} />
        </animateMotion>
      </circle>
    </svg>
  );
}
