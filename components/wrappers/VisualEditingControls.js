import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

const anchorStyle = {
  position: "fixed",
  bottom: "1rem",
  right: "1rem",
  borderBottomRightRadius: "0",
  borderBottomLeftRadius: "0",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  opacity: 1,
  backgroundColor: "#000",
  padding: "0.5rem 1rem",
  borderRadius: "7px",
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
  zIndex: `999`,
  ":hover": { backgroundColor: `#999`, textDecoration: `none` },
};

export default function VisualEditingControls() {
  return (
    <>
      {draftMode().isEnabled && (
        <>
          <VisualEditing />

          <a style={anchorStyle} href="/api/disable-draft">
            Disable draft mode
          </a>
        </>
      )}
    </>
  );
}
