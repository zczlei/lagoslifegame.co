import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Matches src/app/icon.svg: lagoon tile + amber crown + L */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a2f2c",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 6,
              height: 28,
              marginBottom: 2,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                background: "#f0b429",
                borderRadius: 3,
              }}
            />
            <div
              style={{
                width: 16,
                height: 22,
                background: "#f0b429",
                borderRadius: 3,
              }}
            />
            <div
              style={{
                width: 14,
                height: 14,
                background: "#f0b429",
                borderRadius: 3,
              }}
            />
          </div>
          <div
            style={{
              width: 62,
              height: 10,
              background: "#f0b429",
              borderRadius: 3,
              marginBottom: 8,
            }}
          />
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#f0b429",
              lineHeight: 1,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            L
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
