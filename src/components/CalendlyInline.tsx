"use client";

import { useEffect, useRef } from "react";

interface CalendlyInlineProps {
  onEventScheduled?: () => void;
}

export default function CalendlyInline({ onEventScheduled }: CalendlyInlineProps) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    // Inject Calendly CSS
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // Inject Calendly JS
    const loadWidget = () => {
      const w = window as unknown as Record<string, unknown>;
      const Calendly = w["Calendly"] as
        | { initInlineWidget: (opts: Record<string, unknown>) => void }
        | undefined;

      if (Calendly?.initInlineWidget) {
        Calendly.initInlineWidget({
          url: "https://calendly.com/saidtaaroust/30min?hide_gdpr_banner=1&primary_color=ff6b4a",
          parentElement: document.getElementById("calendly-inline-container"),
          prefill: {},
          utm: {},
        });
      }
    };

    if (!document.getElementById("calendly-js")) {
      const script = document.createElement("script");
      script.id = "calendly-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = loadWidget;
      document.head.appendChild(script);
    } else {
      loadWidget();
    }
  }, []);

  useEffect(() => {
    if (!onEventScheduled) return;
    const handler = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        onEventScheduled();
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [onEventScheduled]);

  return (
    <div
      id="calendly-inline-container"
      style={{
        width: "100%",
        height: "clamp(640px, 82vh, 780px)",
        minWidth: 320,
      }}
    />
  );
}
