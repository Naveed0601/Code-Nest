import React from 'react';
import { useState, useCallback } from 'react';
import { ReactFlow, Controls, Background, applyNodeChanges} from "@xyflow/react";
import { CodeBlocks } from './CodeBlocks';
import '@xyflow/react/dist/style.css';

export const WhiteBoard = () => {

  const [nodes, setNodes] = useState(CodeBlocks);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}> 
      <ReactFlow nodes={nodes} onNodesChange={onNodesChange} style={{ width: '100%', height: '100%' }}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
