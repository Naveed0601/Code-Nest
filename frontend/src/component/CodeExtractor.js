export default function CodeExtractor(codeString) {
  const lines = codeString.split('\n');
  const blocks = [];

  let isCapturing = false;
  let braceCount = 0;
  let currentBlock = [];

  // Define the regex for function start
  const isFunctionStart = (line) => {
    const regex = /^(?:export\s+)?(?:default\s+)?(?:function\s+\w+\s*\([^)]*\)\s*\{|const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{)/;
    const result = regex.test(line);
    
    // Debugging: log the line and result of the regex test
    console.log("Checking line:", line);
    console.log("Regex match result:", result);
    
    return result;
  };

  // Loop through each line and process the code
  for (let line of lines) {
    // Log the state before processing each line
    console.log(`Processing line: ${line.trim()}`);
    
    // Start capturing block when function signature is matched
    if (!isCapturing && isFunctionStart(line)) {
      console.log("Start capturing block at line:", line);
      isCapturing = true;
      currentBlock.push(line);  // Add the matching function declaration line
      braceCount += (line.match(/{/g) || []).length;
      braceCount -= (line.match(/}/g) || []).length;
      console.log("Initial brace count:", braceCount);  // Log initial brace count
      continue;
    }

    // Capture lines while brace count is unbalanced
    if (isCapturing) {
      currentBlock.push(line);  // Add the current line to the block

      // Debugging: log brace counts and lines being captured
      const openBraces = (line.match(/{/g) || []).length;
      const closeBraces = (line.match(/}/g) || []).length;
      braceCount += openBraces;
      braceCount -= closeBraces;

      console.log("Brace count after line:", braceCount);
      console.log("Captured line:", line);

      // If brace count is balanced, stop capturing
      if (braceCount === 0) {
        blocks.push(currentBlock.join('\n'));  // Join the block into one string and push
        console.log("Captured block:", currentBlock.join('\n')); // Log the full captured block
        isCapturing = false;
        currentBlock = [];  // Reset the current block
      }
    }
  }

  // Convert each block into a node format
  const nodeSpacing = 250; // Adjust spacing between nodes
  const nodes = blocks.map((block, index) => {
    return {
      id: (index + 1).toString(),
      type: "CustomNode",
      data: {
        label: block.trim(),
        sourceHandleId: "s1",
        targetHandleId: "t2"
      },
      position: {
        x: 50 + (index % 2 === 0 ? 0 : 200), // Alternate x for a zig-zag effect
        y: 50 + index * nodeSpacing
      }
    };
  });

  // Debugging: log the final nodes array
  console.log("Extracted nodes:", nodes);
  return nodes;
}