# Shadcn MCP Connection Troubleshooting

## Issue
The shadcn MCP server was not connecting in Claude Code on Windows due to how `npx` is resolved.

## Root Cause
On Windows, Claude Code's process spawning has trouble with the `npx` bash script (from Git Bash/WSL) because it tries to spawn a `bash.exe` process that may not be found or compatible, leading to silent failure or immediate exit.

## Fix Applied
Updated `.mcp.json` to use the Windows-native `npx.cmd` wrapper instead of the bash `npx` script:

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "C:\\nvm4w\\nodejs\\npx.cmd",
      "args": [
        "shadcn@latest",
        "mcp"
      ]
    }
  }
}
```

## Verification Steps
1. Fully restart Claude Code (quit and relaunch)
2. Run `/mcp` in the chat to open the MCP panel
3. Look for "shadcn" server with status "Connected"
4. If still not connected, check the MCP panel for error details

## Alternative Fixes
- Use absolute path to node.exe pointing directly at the shadcn binary:
  ```json
  {
    "command": "C:\\nvm4w\\nodejs\\node.exe",
    "args": [
      "C:\\Users\\PC\\Desktop\\portfolio\\node_modules\\shadcn\\dist\\index.js",
      "mcp"
    ]
  }
  ```
- Ensure Git Bash is installed and `bash.exe` is earlier in PATH than any stubs
- Use WSL2 as primary development environment

## References
- https://github.com/microsoft/vscode-issue-tracker/issues/12458 (npx.cmd spawn EINVAL)
- Stack Overflow: "Fixing “npx.cmd spawn EINVAL” error on Windows"
- Claude Code Windows MCP Troubleshooting FAQ