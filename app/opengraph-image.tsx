import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Janinas Fußpflege – Emlichheim";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FAF7F2 0%, #F5E6DC 60%, #E8EDE0 100%)",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(212,165,154,0.35)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "rgba(158,174,135,0.35)",
            filter: "blur(80px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              background: "#A87063",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 34,
            }}
          >
            J
          </div>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#607150",
            }}
          >
            Emlichheim
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              color: "#2A2A2A",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Janinas Fußpflege
          </div>
          <div
            style={{
              fontSize: 44,
              color: "#A87063",
              marginTop: 18,
              fontStyle: "italic",
              fontFamily: "cursive",
            }}
          >
            Wohltuend. Zertifiziert. Mit Liebe.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontSize: 28, color: "#3F3F3F" }}>
            Anne-Frank-Str. 5 · 49824 Emlichheim
          </div>
          <div style={{ fontSize: 28, color: "#A87063", fontWeight: 600 }}>
            fusspflege-janina.de
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
