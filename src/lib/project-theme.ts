import type { CSSProperties } from "react";

const projectSurfaces = ["#e9d6b8", "#bcded0", "#ced8ec", "#daddba"];

export function projectTheme(index: number): CSSProperties {
  return {
    "--project-surface": projectSurfaces[index % projectSurfaces.length],
  } as CSSProperties;
}
