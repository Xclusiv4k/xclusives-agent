import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://qrx.codes/mcp",
  description: "Generate artistic QR codes from a description and change where existing codes point.",
  auth: connect({ connector: "qrx.codes/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
