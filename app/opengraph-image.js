import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Z-Soft — Senior Engineers, On Demand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
      }}
    >
      <pre
        style={{
          color: "#C9A84C",
          fontSize: 28,
          lineHeight: 1.2,
          letterSpacing: -1,
        }}
      >
        {[
          "███████╗    ███████╗ ██████╗ ███████╗████████╗",
          "╚══███╔╝    ██╔════╝██╔═══██╗██╔════╝╚══██╔══╝",
          "  ███╔╝ ─── ███████╗██║   ██║█████╗     ██║   ",
          " ███╔╝      ╚════██║██║   ██║██╔══╝     ██║   ",
          "███████╗    ███████║╚██████╔╝██║        ██║   ",
          "╚══════╝    ╚══════╝ ╚═════╝ ╚═╝        ╚═╝   ",
        ].join("\n")}
      </pre>
      <div
        style={{
          color: "#C9A84C",
          fontSize: 24,
          marginTop: 40,
          opacity: 0.6,
          display: "flex",
        }}
      >
        Senior Engineers, On Demand
      </div>
    </div>,
    { ...size },
  );
}

