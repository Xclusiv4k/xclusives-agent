import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.webflow.com/mcp",
  description: "Manage CMS content, pages, assets, and sites.",
  auth: connect({ connector: "mcp.webflow.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
