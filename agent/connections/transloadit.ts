import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api2.transloadit.com/mcp",
  description: "Encode video and audio, resize images, and process documents.",
  auth: connect({ connector: "api2.transloadit.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
