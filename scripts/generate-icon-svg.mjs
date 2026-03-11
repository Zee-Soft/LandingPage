import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import fs from "node:fs";
import path from "node:path";

const fontData = fs.readFileSync(
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

const svg = await satori(
  {
    type: "div",
    props: {
      style: {
        width: 300,
        height: 300,
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "JetBrainsMono",
      },
      children: {
        type: "div",
        props: {
          style: {
            color: "#C9A84C",
            fontSize: 32,
            lineHeight: 1,
            whiteSpace: "pre",
            display: "flex",
          },
          children: lines.join("\n"),
        },
      },
    },
  },
  {
    width: 300,
    height: 300,
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

fs.writeFileSync("z-icon.svg", svg);
console.log("Saved z-icon.svg");

const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 300 } });
const png = resvg.render().asPng();
fs.writeFileSync("z-icon.png", png);
console.log("Saved z-icon.png (300x300)");

