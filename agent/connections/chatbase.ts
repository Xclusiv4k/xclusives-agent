import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.chatbase.co/api/mcp",
  description: "Build and manage AI support agents, training sources, conversations, and help desk tickets.",
  auth: connect({ connector: "mcp.chatbase.co/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
