import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.typenode.ai/mcp",
  description: "Build custom MCP servers and tools, configure integrations, and automate workflows.",
  auth: connect({ connector: "mcp.typenode.ai/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
