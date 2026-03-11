import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "Z-Soft — Senior Engineers, On Demand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await fs.promises.readFile(
    path.join(process.cwd(), "app/JetBrainsMono-Bold.ttf"),
  );

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
        fontFamily: "JetBrainsMono",
      }}
    >
      <div
        style={{
          color: "#C9A84C",
          fontSize: 26,
          lineHeight: 1.15,
          whiteSpace: "pre",
          display: "flex",
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
      </div>
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
    {
      ...size,
      fonts: [
        {
          name: "JetBrainsMono",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}

