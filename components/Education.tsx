import Section from './Section';
import SectionHeader from './SectionHeader';
import { resumeData } from '@/data/resumeData';

function EducationCard({ edu }: { edu: (typeof resumeData.education)[0] }) {
  return (
    <div className="group glow-border card flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-violet-muted/50 border border-violet-primary/20 flex items-center justify-center mt-1">
        <svg className="w-6 h-6 text-violet-glow" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      </div>
      <div className="flex-grow">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h3 className="font-syne font-bold text-base text-text-primary group-hover:text-violet-glow transition-colors duration-200 leading-tight">
            {edu.degree}
          </h3>
          <span className={`text-xs font-dm font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
            edu.status === 'Pursuing'
              ? 'bg-green-400/10 text-green-400 border border-green-400/20'
              : 'bg-violet-muted/40 text-violet-glow border border-violet-primary/20'
          }`}>
            {edu.status}
          </span>
        </div>
        <p className="text-sm font-dm text-text-secondary mt-1">{edu.institution}</p>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-xs font-dm text-text-muted flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {edu.period}
          </span>
          <span className="text-xs font-dm font-semibold text-violet-glow">{edu.details}</span>
        </div>
      </div>
    </div>
  );
}

function CertCard({ cert }: { cert: (typeof resumeData.certifications)[0] }) {
  return (
    <div className="group glow-border card flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-violet-muted/50 border border-violet-primary/20 flex items-center justify-center mt-1">
        <svg className="w-6 h-6 text-violet-glow" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </div>
      <div className="flex-grow">
        <h3 className="font-syne font-bold text-sm text-text-primary group-hover:text-violet-glow transition-colors duration-200 leading-tight">
          {cert.role}
        </h3>
        <p className="text-xs font-dm text-text-secondary mt-1">{cert.company}</p>
        <p className="text-xs font-dm text-text-muted mt-1">{cert.duration}</p>
        <p className="text-xs font-dm text-text-muted/60 mt-2 truncate">
          ID: <span className="text-violet-glow/60">{cert.certificate}</span>
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader
        label="Academic Path"
        title="Education &"
        highlight="Certifications"
        description="My formal education and professional certifications that ground my technical practice."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="gsap-reveal font-syne font-bold text-xl text-text-primary mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-violet-muted/50 border border-violet-primary/30 flex items-center justify-center">
              <span className="text-sm">🎓</span>
            </div>
            Education
          </h3>
          <div className="space-y-4">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="gsap-reveal">
                <EducationCard edu={edu} />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="gsap-reveal font-syne font-bold text-xl text-text-primary mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-violet-muted/50 border border-violet-primary/30 flex items-center justify-center">
              <span className="text-sm">🏅</span>
            </div>
            Certifications
          </h3>
          <div className="space-y-4">
            {resumeData.certifications.map((cert, i) => (
              <div key={i} className="gsap-reveal">
                <CertCard cert={cert} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
