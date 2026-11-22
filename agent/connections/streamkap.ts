import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.streamkap.com/mcp",
  description: "Manage CDC streaming pipelines: sources, destinations, transforms, and Kafka topics.",
  auth: connect({ connector: "mcp.streamkap.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
