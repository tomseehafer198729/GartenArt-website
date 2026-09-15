const FN_NAMES = ["sin", "cos", "tan", "exp", "sqrt", "abs", "log", "min", "max"] as const;

export type CompileResult =
  | { ok: true; fn: (x: number) => number }
  | { ok: false; error: string };

function balancedParens(src: string): boolean {
  let depth = 0;
  for (const ch of src) {
    if (ch === "(") depth += 1;
    if (ch === ")") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

export function compileExpression(raw: string): CompileResult {
  const expr = raw.trim();
  if (!expr) {
    return {
      ok: false,
      error: "Bitte eine Funktion eingeben, zum Beispiel 40+50*sin((x-5)*pi/6).",
    };
  }
  if (expr.length > 180) {
    return { ok: false, error: "Die Funktion ist zu lang (höchstens 180 Zeichen)." };
  }

  const normalized = expr.toLowerCase().replace(/\s+/g, "");
  if (!balancedParens(normalized)) {
    return { ok: false, error: "Die Klammern sind nicht korrekt gesetzt." };
  }

  let stripped = normalized;
  for (const name of FN_NAMES) {
    stripped = stripped.replaceAll(name, "");
  }
  stripped = stripped.replaceAll("pi", "");
  if (!/^[0-9+\-*/^().,xe]*$/.test(stripped)) {
    return {
      ok: false,
      error:
        "Ungültige Zeichen. Erlaubt sind x, Zahlen, + − * / ^, Klammern sowie sin, cos, tan, exp, sqrt, abs, log, min, max und pi.",
    };
  }
  if (!stripped.includes("x") && !/[0-9]/.test(stripped)) {
    return { ok: false, error: "Die Funktion muss x oder eine Zahl enthalten." };
  }

  try {
    let js = normalized;
    const placeholders: string[] = [];
    for (const name of FN_NAMES) {
      const token = `__F${placeholders.length}__`;
      placeholders.push(name);
      js = js.replaceAll(name, token);
    }
    js = js.replaceAll("pi", "Math.PI");
    js = js.replaceAll("^", "**");
    placeholders.forEach((name, i) => {
      js = js.replaceAll(`__F${i}__`, `Math.${name}`);
    });

    const fn = new Function(
      "x",
      `"use strict"; const y = (${js}); if (typeof y !== "number" || !Number.isFinite(y)) throw new Error("nan"); return y;`,
    ) as (x: number) => number;

    for (const sample of [1, 4, 6.5, 9, 12]) {
      const y = fn(sample);
      if (!Number.isFinite(y)) {
        return {
          ok: false,
          error: "Die Funktion liefert keine gültigen Zahlen im Jahresverlauf (1–12).",
        };
      }
    }
    return { ok: true, fn };
  } catch {
    return {
      ok: false,
      error: "Die Funktion konnte nicht gelesen werden. Prüfen Sie Klammern und Operatoren.",
    };
  }
}

export function sampleYear(fn: (x: number) => number, steps = 24): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  for (let i = 0; i <= steps; i += 1) {
    const x = 1 + (11 * i) / steps;
    const raw = fn(x);
    const y = Math.max(0, Math.min(100, raw));
    out.push({ x, y });
  }
  return out;
}
