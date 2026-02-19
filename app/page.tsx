"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Nocturne",
    type: "Brand Identity",
    year: "2024",
    desc: "Complete visual identity for a high-end jazz bar — from wordmark to matchbooks.",
    color: "#1a1a2e",
    accent: "#c9a84c",
    tags: ["Branding", "Print", "Typography"],
    aspect: "4/5",
  },
  {
    id: "02",
    title: "Terrain",
    type: "Editorial",
    year: "2024",
    desc: "Art direction for an independent outdoor lifestyle magazine, 5 issues.",
    color: "#2d4a22",
    accent: "#e8d5b0",
    tags: ["Editorial", "Layout", "Art Direction"],
    aspect: "4/5",
  },
  {
    id: "03",
    title: "Solène",
    type: "Packaging",
    year: "2023",
    desc: "Luxury skincare packaging system — glass, paper, and a restrained palette.",
    color: "#f0ebe0",
    accent: "#8b6f47",
    tags: ["Packaging", "Luxury", "Print"],
    aspect: "4/5",
  },
  {
    id: "04",
    title: "Voltage",
    type: "Campaign",
    year: "2023",
    desc: "360° visual campaign for an EV startup launch across 12 cities.",
    color: "#0d0d0d",
    accent: "#ff3d00",
    tags: ["Campaign", "Motion", "OOH"],
    aspect: "4/5",
  },
  {
    id: "05",
    title: "Murmur",
    type: "Type Design",
    year: "2022",
    desc: "Custom variable typeface designed for a Copenhagen music festival.",
    color: "#2b1d3a",
    accent: "#e040fb",
    tags: ["Type", "Variable Font", "Festival"],
    aspect: "4/5",
  },
  {
    id: "06",
    title: "Atelier R.",
    type: "Brand System",
    year: "2022",
    desc: "Full brand system for an architecture studio — from identity to wayfinding.",
    color: "#e8e4de",
    accent: "#333",
    tags: ["Branding", "Wayfinding", "Identity"],
    aspect: "4/5",
  },
];

const skills = [
  "Brand Identity",
  "Logo Design",
  "Editorial Layout",
  "Typography",
  "Packaging Design",
  "Art Direction",
  "Print Production",
  "Motion Graphics",
  "Visual Systems",
  "Campaign Design",
  "Type Design",
  "Creative Direction",
];

function ProjectCard({ p, i }: { p: (typeof projects)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`card-hover op0 animate-fade-up delay-${Math.min(i + 1, 5)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "none" }}
    >
      {/* Image placeholder — styled as a design artifact */}
      <div
        className="relative overflow-hidden mb-5"
        style={{
          aspectRatio: "4/5",
          background: p.color,
          borderRadius: "2px",
        }}
      >
        {/* Abstract design element inside card */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ padding: "10%" }}
        >
          {i === 0 && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(60px,10vw,90px)",
                  color: p.accent,
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                NOCTURNE
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: p.accent,
                  margin: "12px 0",
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "11px",
                  color: p.accent,
                  letterSpacing: "0.3em",
                  opacity: 0.7,
                }}
              >
                EST. 2024
              </div>
            </div>
          )}
          {i === 1 && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                padding: "5%",
              }}
            >
              {[...Array(9)].map((_, j) => (
                <div
                  key={j}
                  style={{
                    height: "1px",
                    background: p.accent,
                    opacity: j % 3 === 0 ? 0.8 : 0.3,
                  }}
                />
              ))}
              <div
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(32px,5vw,52px)",
                  color: p.accent,
                  marginTop: "auto",
                  lineHeight: 1,
                }}
              >
                TERRAIN
                <br />
                ISSUE V
              </div>
            </div>
          )}
          {i === 2 && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: p.accent,
                  margin: "0 auto 20px",
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  color: p.accent,
                }}
              >
                SOLÈNE
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  color: p.accent,
                  opacity: 0.5,
                }}
              >
                PARIS
              </div>
            </div>
          )}
          {i === 3 && (
            <div>
              <div
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(80px,14vw,120px)",
                  color: p.accent,
                  lineHeight: 0.85,
                  letterSpacing: "-0.02em",
                }}
              >
                VOL
                <br />
                TAGE
              </div>
              <div
                style={{
                  width: "40px",
                  height: "3px",
                  background: p.accent,
                  marginTop: "16px",
                }}
              />
            </div>
          )}
          {i === 4 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px",
                width: "100%",
                height: "100%",
                padding: "5%",
              }}
            >
              {["M", "U", "R", "M", "U", "R"].map((l, j) => (
                <div
                  key={j}
                  style={{
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: "clamp(40px,7vw,64px)",
                    color: p.accent,
                    opacity: j % 2 === 0 ? 1 : 0.4,
                    lineHeight: 1,
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          )}
          {i === 5 && (
            <div style={{ width: "100%", textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  border: `1.5px solid ${p.accent}`,
                  margin: "0 auto 20px",
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  color: p.accent,
                }}
              >
                ATELIER R.
              </div>
            </div>
          )}
        </div>
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-6"
          style={{
            background: `linear-gradient(to top, ${p.color}ee 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: p.accent,
              fontWeight: 500,
              marginBottom: "6px",
            }}
          >
            {p.type.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: p.accent,
              opacity: 0.8,
              fontWeight: 300,
              lineHeight: 1.5,
            }}
          >
            {p.desc}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "22px",
              letterSpacing: "0.05em",
            }}
          >
            {p.title}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "var(--muted)",
              letterSpacing: "0.1em",
            }}
          >
            {p.type}
          </div>
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "var(--muted)",
            fontFamily: "'DM Sans',sans-serif",
            fontStyle: "italic",
          }}
        >
          {p.year}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      if (followerRef.current) {
        followerRef.current.style.left = e.clientX + "px";
        followerRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "Branding",
    "Editorial",
    "Packaging",
    "Campaign",
    "Type",
  ];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.some((t) => t.includes(activeFilter)));

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          height: "64px",
          borderBottom: "1px solid var(--border)",
          background: "rgba(245,240,232,0.92)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "20px",
            letterSpacing: "0.15em",
          }}
        >
          Aown Abbas
        </div>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["Work", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover-ul"
              style={{
                fontSize: "12px",
                letterSpacing: "0.15em",
                color: "var(--ink)",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              {item.toUpperCase()}
            </a>
          ))}
          <a
            href="https://wa.me/923169209201"
            target="_blank"
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              background: "var(--ink)",
              color: "var(--paper)",
              padding: "10px 22px",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "var(--ink)";
            }}
          >
            HIRE ME
          </a>
        </div>
      </nav>

      {/* TICKER */}
      <div
        style={{
          marginTop: "64px",
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
          background: "var(--ink)",
        }}
      >
        <div
          className="animate-ticker"
          style={{
            display: "flex",
            gap: 0,
            padding: "12px 0",
            whiteSpace: "nowrap",
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} style={{ display: "flex", gap: 0 }}>
              {skills.map((s, j) => (
                <span
                  key={j}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0,
                  }}
                >
                  <span
                    style={{
                      padding: "0 32px",
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.3em",
                      color: "var(--paper)",
                      opacity: 0.7,
                    }}
                  >
                    {s.toUpperCase()}
                  </span>
                  <span style={{ color: "var(--accent)", fontSize: "16px" }}>
                    ✦
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section
        id="work"
        style={{
          padding: "80px 40px 60px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "end",
            marginBottom: "60px",
          }}
        >
          <div>
            <div
              className="op0 animate-fade-up"
              style={{
                fontSize: "11px",
                letterSpacing: "0.4em",
                color: "var(--muted)",
                marginBottom: "20px",
              }}
            >
              GRAPHIC DESIGNER — BERLIN
            </div>
            <h1
              className="op0 animate-fade-up delay-1"
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(72px,8vw,120px)",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
              }}
            >
              Visual
              <br />
              <span style={{ color: "var(--accent)" }}>Identity</span>
              <br />
              Studio
            </h1>
          </div>
          <div
            className="op0 animate-fade-up delay-2"
            style={{ paddingBottom: "8px" }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--muted)",
                maxWidth: "380px",
              }}
            >
              I design brand systems that people remember — from the wordmark to
              the matchbook. Currently open for projects in Q3 2025.
            </p>
            <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
              <a
                href="#work"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  border: "1px solid var(--ink)",
                  color: "var(--ink)",
                  padding: "12px 28px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "var(--ink)";
                  (e.target as HTMLElement).style.color = "var(--paper)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                  (e.target as HTMLElement).style.color = "var(--ink)";
                }}
              >
                VIEW WORK
              </a>
              <div
                style={{
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--muted)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
                Available for work
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="op0 animate-fade-up delay-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            borderTop: "1px solid var(--border)",
            borderLeft: "1px solid var(--border)",
            marginBottom: "60px",
          }}
        >
          {[
            ["8+", "Years experience"],
            ["120+", "Projects completed"],
            ["40+", "Happy clients"],
            ["12", "Awards won"],
          ].map(([n, l]) => (
            <div
              key={l}
              style={{
                padding: "28px 32px",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "48px",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "var(--muted)",
                  marginTop: "4px",
                }}
              >
                {l.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "48px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--muted)",
              marginRight: "8px",
            }}
          >
            FILTER:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                padding: "8px 18px",
                border: "1px solid",
                borderColor:
                  activeFilter === f ? "var(--accent)" : "var(--border)",
                background:
                  activeFilter === f ? "var(--accent)" : "transparent",
                color: activeFilter === f ? "var(--paper)" : "var(--ink)",
                cursor: "none",
                transition: "all 0.2s",
              }}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "32px",
          }}
        >
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "100px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.4em",
                color: "var(--accent)",
                marginBottom: "20px",
              }}
            >
              ABOUT
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(48px,6vw,80px)",
                lineHeight: 0.9,
                marginBottom: "32px",
              }}
            >
              Design as a<br />
              way of thinking
            </h2>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.65)",
                marginBottom: "24px",
              }}
            >
              I'm Mara — a Berlin-based graphic designer with 8 years of
              experience building brands that outlast trends. My work sits at
              the intersection of concept and craft: I care as much about the
              idea as the kerning.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.65)",
                marginBottom: "40px",
              }}
            >
              I've worked with startups, established studios, cultural
              institutions, and independent founders. Every project begins with
              the same question: what do you want people to <em>feel</em>?
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="#contact"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  background: "var(--accent)",
                  color: "var(--paper)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                LET'S TALK
              </a>
              <a
                href="#"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  border: "1px solid rgba(245,240,232,0.3)",
                  color: "var(--paper)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Rotating badge + portrait placeholder */}
          <div
            style={{
              position: "relative",
              aspectRatio: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Portrait placeholder */}
            <div
              style={{
                width: "70%",
                aspectRatio: "3/4",
                background: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(245,240,232,0.1)",
                position: "relative",
              }}
            >
              {/* Abstract face placeholder */}
              <div style={{ textAlign: "center", opacity: 0.3 }}>
                <div
                  style={{
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: "80px",
                    lineHeight: 1,
                    color: "var(--paper)",
                  }}
                >
                  MV
                </div>
              </div>
            </div>
            {/* Rotating badge */}
            <div
              className="animate-spin-slow"
              style={{
                position: "absolute",
                top: "5%",
                right: "5%",
                width: "100px",
                height: "100px",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                style={{ width: "100%", height: "100%" }}
              >
                <defs>
                  <path
                    id="circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  style={{
                    fontSize: "10.5px",
                    fill: "var(--accent)",
                    letterSpacing: "2px",
                  }}
                >
                  <textPath href="#circle">
                    GRAPHIC DESIGNER ✦ BERLIN ✦ 2025 ✦{" "}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{ padding: "100px 40px", maxWidth: "1400px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "60px",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.4em",
              color: "var(--muted)",
            }}
          >
            SERVICES
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(40px,5vw,64px)",
              letterSpacing: "0.02em",
            }}
          >
            What I do
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {[
            {
              n: "01",
              title: "Brand Identity",
              desc: "Logos, colour systems, typography, and brand guidelines that give your business a coherent visual language.",
            },
            {
              n: "02",
              title: "Editorial Design",
              desc: "Magazine layouts, annual reports, and long-form documents where hierarchy and rhythm meet.",
            },
            {
              n: "03",
              title: "Packaging Design",
              desc: "Structural and surface design for products that need to stand out on shelf — or look beautiful on a table.",
            },
            {
              n: "04",
              title: "Campaign Design",
              desc: "Integrated visual campaigns across digital, print, and out-of-home channels.",
            },
            {
              n: "05",
              title: "Art Direction",
              desc: "Creative direction for photo and video shoots — mood boarding, set design, and on-set supervision.",
            },
            {
              n: "06",
              title: "Type Design",
              desc: "Custom lettering and typeface design for brands that need something truly bespoke.",
            },
          ].map((s, i) => (
            <div
              key={s.n}
              className="card-hover"
              style={{
                background: "var(--paper)",
                padding: "48px",
                borderRight: i % 2 === 0 ? "none" : undefined,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: "14px",
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                  }}
                >
                  ↗
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "32px",
                  letterSpacing: "0.03em",
                  marginBottom: "16px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "var(--muted)",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL MARQUEE */}
      <div
        style={{
          background: "var(--accent)",
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        <div
          className="animate-ticker"
          style={{ display: "flex", whiteSpace: "nowrap", gap: 0 }}
        >
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              {[
                "Brand Identity",
                "Editorial Design",
                "Packaging",
                "Art Direction",
                "Type Design",
                "Visual Systems",
              ].map((t, j) => (
                <span
                  key={j}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue',sans-serif",
                      fontSize: "20px",
                      letterSpacing: "0.1em",
                      color: "var(--paper)",
                      padding: "0 32px",
                    }}
                  >
                    {t}
                  </span>
                  <span
                    style={{
                      color: "var(--paper)",
                      opacity: 0.6,
                      fontSize: "14px",
                    }}
                  >
                    ◆
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section
        style={{ padding: "100px 40px", maxWidth: "1400px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "32px",
          }}
        >
          {[
            {
              q: "Mara understood our brand better than we did. The result was flawless.",
              name: "Lena Hofmann",
              role: "CEO, Atelier R.",
            },
            {
              q: "Working with Mara felt like having a brand therapist. She asked the right questions and delivered the right answers.",
              name: "Jonas Park",
              role: "Founder, Voltage",
            },
            {
              q: "Our packaging went from generic to gallery-worthy. Sales up 40% in six months.",
              name: "Sophie Mercier",
              role: "Creative Director, Solène",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                padding: "40px",
                border: "1px solid var(--border)",
                background: "transparent",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "48px",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--ink)",
                  marginBottom: "32px",
                }}
              >
                {t.q}
              </p>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "20px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 500 }}>
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "var(--muted)",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "120px 40px",
        }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.4em",
              color: "var(--accent)",
              marginBottom: "24px",
            }}
          >
            CONTACT
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(56px,8vw,100px)",
              lineHeight: 0.9,
              marginBottom: "32px",
            }}
          >
            Let's build
            <br />
            something
            <br />
            <span style={{ color: "var(--accent)" }}>great.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.6)",
              marginBottom: "48px",
            }}
          >
            I take on 3–4 projects per quarter. If you're working on something
            interesting, I'd love to hear about it.
          </p>

          <a
            href="https://wa.me/923169209201"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "var(--paper)",
              padding: "18px 48px",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            LET'S TALK
          </a>

          <div
            style={{
              marginTop: "64px",
              display: "flex",
              gap: "32px",
              justifyContent: "center",
            }}
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-ul"
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "rgba(245,240,232,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#050505",
          color: "var(--paper)",
          padding: "28px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(245,240,232,0.05)",
        }}
      >
        <div
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "16px",
            letterSpacing: "0.15em",
          }}
        >
          Aown Abbas
        </div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(245,240,232,0.3)",
          }}
        >
          © 2025 — ALL RIGHTS RESERVED
        </div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "rgba(245,240,232,0.3)",
          }}
        >
          aowngraphics@gmail.com
        </div>
      </footer>
    </>
  );
}
