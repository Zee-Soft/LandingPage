import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const size = { width: 300, height: 300 };
export const contentType = "image/png";

export default async function Icon() {
  const fontData = await fs.promises.readFile(
    path.join(process.cwd(), "app/JetBrainsMono-Bold.ttf"),
  );

  const lines = [
    "███████╗",
    "╚══███╔╝",
    "  ███╔╝ ",
    " ███╔╝  ",
    "███████╗",
    "╚══════╝",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: 300,
          height: 300,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "JetBrainsMono",
        }}
      >
        <div
          style={{
            color: "#C9A84C",
            fontSize: 32,
            lineHeight: 1,
            whiteSpace: "pre",
            display: "flex",
          }}
        >
          {lines.join("\n")}
        </div>
      </div>
    ),
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
