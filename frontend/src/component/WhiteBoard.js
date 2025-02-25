import React from 'react';
import { ReactFlow, Controls, Background } from "@xyflow/react";
import '@xyflow/react/dist/style.css';


export const WhiteBoard = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}> 
      <ReactFlow style={{ width: '100%', height: '100%' }}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
