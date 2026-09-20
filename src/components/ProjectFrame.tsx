import type { ReactNode } from "react";
import CornerSVG from "@/components/CornerSVG";
import styles from "./ProjectFrame.module.css";

export default function ProjectFrame({
  label,
  caption,
  children,
}: {
  label: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.frame}>
      <span className={styles.label}>
        {label}
        <CornerSVG className={styles.labelRight} />
        <CornerSVG className={styles.labelBottom} />
      </span>
      {children}
      <span className={styles.caption}>
        {caption}
        <CornerSVG className={styles.captionTop} />
        <CornerSVG className={styles.captionLeft} />
      </span>
    </div>
  );
}
