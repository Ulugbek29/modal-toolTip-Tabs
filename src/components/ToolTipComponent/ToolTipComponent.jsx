import React from "react";

export default function ToolTipComponent({ children, title }) {
  return (
    <div className="group relative block">
      {children}
      {title ? (
        <span className="absolute bottom-[-40px] right-0 text-sm py-2 px-4 rounded-lg bg-slate-900 text-white invisible opacity-0 transition group-hover:visible group-hover:opacity-100">
          {title}
        </span>
      ) : null}
    </div>
  );
}
