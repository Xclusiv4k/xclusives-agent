import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.mail.superhuman.com/mcp",
  description: "Search and manage your email.",
  auth: connect({ connector: "mcp.mail.superhuman.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
