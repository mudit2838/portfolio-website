'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167,139,250,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blob 1 — top left */}
      <div
        className="blob-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.9) 0%, rgba(124,58,237,0.4) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Blob 2 — top right */}
      <div
        className="blob-2 absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.10]"
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.9) 0%, rgba(139,92,246,0.4) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Blob 3 — bottom middle */}
      <div
        className="blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-[0.08]"
        style={{
          background:
            'radial-gradient(circle, rgba(76,29,149,0.9) 0%, rgba(124,58,237,0.3) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-40" />
    </div>
  );
}
