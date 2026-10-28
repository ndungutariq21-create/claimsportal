import Image from "next/image";

export function Logo({
  variant = "color",
  size = 40,
  showTagline = false,
}: {
  variant?: "color" | "white";
  size?: number;
  showTagline?: boolean;
}) {
  const wordColor = variant === "white" ? "text-white" : "text-stackwire-navy";

  return (
    <div className="inline-flex items-center gap-2.5 leading-none">
      <Image
        src="/stackwire-mark.svg"
        alt=""
        width={size}
        height={size}
        className="shrink-0 rounded-lg"
      />
      <span className="flex flex-col gap-1">
        <span
          style={{ fontSize: size * 0.48 }}
          className={`font-extrabold tracking-tight ${wordColor}`}
        >
          Stackwire
        </span>
        {showTagline && (
          <span className={`text-[10px] font-medium ${variant === "white" ? "text-white/70" : "text-black/50"}`}>
            Enterprise claims management
          </span>
        )}
      </span>
    </div>
  );
}
