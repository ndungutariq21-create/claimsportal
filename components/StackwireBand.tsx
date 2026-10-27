import Image from "next/image";

export function StackwireBand({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://stackwiretech.com/"
      target="_blank"
      rel="noreferrer"
      className={`stackwire-band ${className}`}
      aria-label="Technology by Stackwire Ltd"
    >
      <Image src="/stackwire-mark.svg" alt="" width={34} height={34} />
      <span className="stackwire-band-copy">
        <span className="stackwire-band-eyebrow">Technology partner</span>
        <span className="stackwire-band-name">Stackwire Ltd</span>
      </span>
      <span className="stackwire-band-link" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
