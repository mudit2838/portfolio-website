'use client';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { resumeData } from '@/data/resumeData';

const stats = [
  { label: 'Projects Built', value: '6+' },
  { label: 'Certifications', value: '3' },
  { label: 'Internships', value: '3' },
  { label: 'CGPA', value: '8.0' },
];

export default function About() {
  const { name, bio, email, phone, location, socials } = resumeData.personalInfo;

  return (
    <Section id="about">
      <SectionHeader label="Who I Am" title="About" highlight="Me" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — avatar + stats */}
        <div className="gsap-reveal flex flex-col items-center lg:items-start gap-8">
          {/* Avatar placeholder with glowing ring */}
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-violet-muted to-bg-card border border-border-light flex items-center justify-center shadow-violet-lg">
              <span className="font-syne font-extrabold text-7xl gradient-text">MK</span>
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-primary/30 to-transparent -z-10 blur-md" />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-bg-card border border-border-light rounded-2xl px-4 py-2 shadow-violet-md">
              <span className="text-xs font-dm text-text-secondary">💻 Building cool stuff</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-bg-card border border-border rounded-2xl p-4 text-center hover:border-border-light transition-colors duration-300"
              >
                <div className="font-syne font-bold text-3xl gradient-text">{s.value}</div>
                <div className="text-xs font-dm text-text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — bio + info */}
        <div className="gsap-reveal space-y-6">
          <div>
            <h3 className="font-syne font-bold text-2xl text-text-primary mb-1">
              I&apos;m <span className="gradient-text">{name}</span>
            </h3>
            <p className="text-sm font-dm text-violet-glow">Full Stack Developer · CSE Student</p>
          </div>

          {bio.split('\n\n').map((para, i) => (
            <p key={i} className="font-dm text-text-secondary leading-relaxed">{para}</p>
          ))}

          {/* Personal info chips */}
          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {[
              { icon: '📧', label: 'Email', value: email },
              { icon: '📱', label: 'Phone', value: phone },
              { icon: '📍', label: 'Location', value: location },
              { icon: '🎓', label: 'Degree', value: 'B.Tech CSE (2026)' },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 bg-bg-card/60 border border-border rounded-xl p-3"
              >
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                  <div className="text-xs font-dm text-text-muted">{label}</div>
                  <div className="text-sm font-dm text-text-primary break-all">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn-outline py-2 px-5 text-sm">
              GitHub Profile
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
