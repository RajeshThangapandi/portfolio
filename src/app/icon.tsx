import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "linear-gradient(135deg, #050609 0%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#38BDF8",
          fontWeight: 800,
          borderRadius: 7,
          border: "1px solid rgba(56, 189, 248, 0.45)",
          letterSpacing: "-0.04em",
        }}
      >
        RT
      </div>
    ),
    {
      ...size,
    }
  );
}
