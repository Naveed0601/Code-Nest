import { Handle, Position } from "@xyflow/react"
import "./nodes.css"

export const CustomNode = ({ id }) => {
    return (
        <div className="codeSpace">
            <Handle 
                type="target"
                position={Position.Top}
                id={`t${id}`}
                isConnectable={true}
            />
            <Handle 
                type="source"
                position={Position.Bottom}
                id={`s${id}`}
                isConnectable={true}
            />
        </div>
    )
}