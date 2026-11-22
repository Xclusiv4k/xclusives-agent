import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://www.suped.com/api/mcp",
  description: "Monitor DMARC, SPF, and DKIM, and investigate email authentication issues.",
  auth: connect({ connector: "www.suped.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
