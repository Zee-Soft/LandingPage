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
      {/* Z logo built with divs */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: 200,
              height: 40,
              background: "#C9A84C",
              display: "flex",
            }}
          />
        </div>
        {/* Diagonal via steps */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              width: 60,
              height: 30,
              background: "#C9A84C",
              marginRight: 10,
              display: "flex",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 60,
              height: 30,
              background: "#C9A84C",
              display: "flex",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{
              width: 60,
              height: 30,
              background: "#C9A84C",
              marginLeft: 10,
              display: "flex",
            }}
          />
        </div>
        {/* Bottom bar */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: 200,
              height: 40,
              background: "#C9A84C",
              display: "flex",
            }}
          />
        </div>
      </div>

      {/* Text below */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <div
          style={{
            color: "#C9A84C",
            fontSize: 48,
            fontWeight: "bold",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          Z-SOFT
        </div>
        <div
          style={{
            color: "#C9A84C",
            fontSize: 24,
            marginTop: 12,
            opacity: 0.6,
            display: "flex",
          }}
        >
          Senior Engineers, On Demand
        </div>
      </div>
    </div>,
    { ...size },
  );
}

