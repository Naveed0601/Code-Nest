import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import TestBlock from "../Data/TestCodeBlock.json";
import InitialEdges from "../Data/Edges.json";
import { AnimatedSVGEdge } from "../animationMotion/CircleAnimation";
import { CustomNode } from "../nodes/CustomNode";

export const WhiteBoard = () => {
  const [nodes, setNodes] = useState(TestBlock);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const [edges, setEdges, onEdgesChange] = useEdgesState(InitialEdges);

  const edgeTypes = {
    animatedSvg: AnimatedSVGEdge,
  };

  const nodeTypes = {
    CustomNode : CustomNode,
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        style={{ width: "100%", height: "100%" }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
