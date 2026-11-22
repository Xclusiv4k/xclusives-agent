import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.tavus.io/mcp",
  description: "Build and deploy real-time, face-to-face conversational video agents.",
  auth: connect({ connector: "mcp.tavus.io/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
