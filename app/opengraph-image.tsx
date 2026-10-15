import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0c0e",
          color: "#eceae4",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#2dd4bf" }}>
          {site.title}
        </div>
        <div style={{ fontSize: 64, fontWeight: 500, lineHeight: 1.1, maxWidth: 900 }}>
          {site.headline}
        </div>
        <div style={{ fontSize: 28, color: "#a39e94" }}>{site.name}</div>
      </div>
    ),
    size,
  );
}
