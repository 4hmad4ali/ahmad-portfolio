import type { IconType } from "react-icons";
import { FaPython, FaReact } from "react-icons/fa";
import { FaLaravel, FaCode, FaDatabase, FaDesktop, FaQrcode, FaImage, FaBox, FaCalendar } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiDjango, SiJavascript, SiMysql, SiSqlite, SiHtml5, SiCss, SiVite, SiPostcss, SiEslint, SiNpm } from "react-icons/si";

function technologyIcon(name: string): IconType {
  if (/Python/.test(name)) return FaPython;
  if (/Laravel/.test(name)) return FaLaravel;
  if (/Next\.js/.test(name)) return SiNextdotjs;
  if (/Tailwind/.test(name)) return SiTailwindcss;
  if (/Framer/.test(name)) return SiFramer;
  if (/Django/.test(name)) return SiDjango;
  if (/JavaScript/.test(name)) return SiJavascript;
  if (/MySQL/.test(name)) return SiMysql;
  if (/SQLite/.test(name)) return SiSqlite;
  if (/HTML/.test(name)) return SiHtml5;
  if (/PostCSS/.test(name)) return SiPostcss;
  if (/CSS/.test(name)) return SiCss;
  if (/React/.test(name)) return FaReact;
  if (/Vite/.test(name)) return SiVite;
  if (/ESLint/.test(name)) return SiEslint;
  if (/npm/.test(name)) return SiNpm;
  if (/QR|PyZbar/.test(name)) return FaQrcode;
  if (/Pillow/.test(name)) return FaImage;
  if (/Date/.test(name)) return FaCalendar;
  if (/Installer/.test(name)) return FaBox;
  if (/PyQt|PyWebView/.test(name)) return FaDesktop;
  if (/Database/.test(name)) return FaDatabase;
  return FaCode;
}

export default function TechnologyStack({ technologies, compact = false }: { technologies: string[]; compact?: boolean }) {
  const visibleTechnologies = compact ? technologies.slice(0, 4) : technologies;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {visibleTechnologies.map((name) => {
        const Icon = technologyIcon(name);
        return (
          <li key={name} className="inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-3 py-2 text-xs leading-relaxed">
            <Icon className="size-4 shrink-0 text-foreground/75" aria-hidden="true" />
            <span>{name}</span>
          </li>
        );
      })}
      {compact && technologies.length > visibleTechnologies.length && (
        <li className="inline-flex items-center rounded-xl border border-foreground/10 bg-foreground/5 px-3 py-2 text-xs text-foreground/60">
          +{technologies.length - visibleTechnologies.length} more
        </li>
      )}
    </ul>
  );
}
