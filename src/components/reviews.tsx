import { REVIEWS } from "@/data/reviews";

export function ReviewList() {
  return (
    <ul className="mt-10 grid gap-6 md:grid-cols-2">
      {REVIEWS.map((r) => (
        <li key={r.id} className="flex flex-col border-l border-gold bg-cream px-5 py-6">
          <p className="font-sans text-[17px] leading-[1.65] text-ink">{r.text}</p>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.18em] text-gold">
            {r.name}
            {r.role ? ` · ${r.role}` : ""}
            {r.source ? ` · ${r.source}` : ""}
          </p>
        </li>
      ))}
    </ul>
  );
}