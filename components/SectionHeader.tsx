interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionHeader({ label, title, highlight, description }: SectionHeaderProps) {
  return (
    <div className="gsap-reveal text-center mb-14">
      {label && (
        <span className="inline-block text-xs font-dm font-semibold tracking-[0.25em] text-violet-glow uppercase mb-3 opacity-80">
          {label}
        </span>
      )}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="section-subtitle max-w-2xl mx-auto mt-3">{description}</p>
      )}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-violet-primary rounded-full" />
        <div className="w-2 h-2 rounded-full bg-violet-glow shadow-violet-sm" />
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-violet-primary rounded-full" />
      </div>
    </div>
  );
}
