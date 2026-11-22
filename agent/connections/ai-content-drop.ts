import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://aicontentdrop.com/mcp",
  description: "Generate AI videos and images from 50+ models with one credit balance.",
  auth: connect({ connector: "aicontentdrop.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
