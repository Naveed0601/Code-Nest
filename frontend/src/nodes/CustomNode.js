import { Handle, Position } from "@xyflow/react"
import "./nodes.css"

export const CustomNode = ({ id, data }) => {
    console.log("id:", id)
    return (
        <div className="codeSpace">
            <div>{data.label}</div>
            <Handle 
                type="target"
                position={Position.Top}
                id={{id}}
                isConnectable={true}
            />
            <Handle 
                type="source"
                position={Position.Bottom}
                id={{id}}
                isConnectable={true}
            />
        </div>
    )
}