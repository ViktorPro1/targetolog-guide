import './TargetReticle.css';

interface AudienceChip {
  label: string;
  top: string;
  left: string;
  delay: string;
}

const chips: AudienceChip[] = [
  { label: '18–24, Київ', top: '8%', left: '6%', delay: '0s' },
  { label: 'Жінки, краса', top: '68%', left: '4%', delay: '0.6s' },
  { label: 'Гео: Львів 15 км', top: '14%', left: '78%', delay: '1.2s' },
  { label: 'Інтерес: авто', top: '78%', left: '72%', delay: '1.8s' },
  { label: 'Ретаргетинг', top: '42%', left: '86%', delay: '2.4s' },
];

export default function TargetReticle() {
  return (
    <div className="reticle-stage" aria-hidden="true">
      <div className="reticle-rings">
        <div className="ring ring-outer" />
        <div className="ring ring-mid" />
        <div className="ring ring-inner" />
        <div className="crosshair crosshair-h" />
        <div className="crosshair crosshair-v" />
        <div className="reticle-core" />
        <div className="sweep" />
      </div>

      {chips.map((chip) => (
        <span
          key={chip.label}
          className="audience-chip"
          style={{ top: chip.top, left: chip.left, animationDelay: chip.delay }}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}
