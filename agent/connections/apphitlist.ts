import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://apphitlist.com/api/mcp",
  description: "Find top-earning App Store apps, chart movers, long-running ads, and review complaints.",
  auth: connect({ connector: "apphitlist.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
