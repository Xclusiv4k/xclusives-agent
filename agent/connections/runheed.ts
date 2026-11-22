import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://runheed.com/api/mcp",
  description: "Search production errors, read stack traces, and resolve errors from your coding agent.",
  auth: connect({ connector: "runheed.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
