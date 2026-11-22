import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://txt.mn/mcp",
  description: "Create and share plain-text notes.",
  auth: connect({ connector: "txt.mn/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
