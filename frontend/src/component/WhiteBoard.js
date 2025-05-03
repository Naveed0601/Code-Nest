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
import CodeExtractor from "./CodeExtractor";

export const WhiteBoard = () => {
  const [nodes, setNodes] = useState([]);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const [edges, setEdges, onEdgesChange] = useEdgesState(InitialEdges);

  const edgeTypes = {
    animatedSvg: AnimatedSVGEdge,
  };

  const nodeTypes = {
    CustomNode: CustomNode,
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const codeString = event.target.result;

      // Extract nodes using CodeExtractor
      const extractedNodes = CodeExtractor(codeString);
      setNodes(extractedNodes); // Update the nodes state
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <input type="file" accept=".js,.txt,.ts,.jsx" onChange={handleFileChange} />
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
