import { Handle, Position } from "@xyflow/react"
import "./nodes.css"

export const CodeNode = ({ id }) => {
    return (
        <div className="codeSpace">
            <Handle 
                type="target"
                position={Position.Top}
                id={`t${id}`}
                isConnectable={true}
            />
            <input type="text" id="code" placeholder="Code Block 1"/>
            <Handle 
                type="source"
                position={Position.Bottom}
                id={`s${id}`}
                isConnectable={true}
            />
        </div>
    )
}