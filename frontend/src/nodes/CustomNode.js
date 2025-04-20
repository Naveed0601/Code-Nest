import React from "react";
import { Handle, Position } from "@xyflow/react";
import "./nodes.css";

export const CustomNode = ({ data }) => {
  return (
    <div className="codeSpace">
      <div>{data.label}</div>
      <Handle
        id={data.targetHandleId}
        type="target"
        position={Position.Top}
        isConnectable={true}
        style={{ background: "red" }}
      />
      <Handle
        id={data.sourceHandleId}
        type="source"
        position={Position.Bottom}
        isConnectable={true}
        style={{ background: "green" }}
      />
    </div>
  );
};
