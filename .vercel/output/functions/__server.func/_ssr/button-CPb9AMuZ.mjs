import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./router-vI6J447R.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-CPb9AMuZ.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-[color,background-color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-45 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			gold: "bg-gold text-forest hover:bg-gold-soft",
			forest: "bg-forest text-cream hover:bg-moss",
			outline: "border border-gold/70 bg-transparent text-cream hover:bg-cream/8",
			ink: "border border-ink/15 bg-transparent text-ink hover:border-gold hover:text-moss",
			ghost: "bg-transparent text-cream hover:text-gold"
		},
		size: {
			sm: "h-10 min-h-10 px-3.5 text-sm rounded-sm",
			md: "h-11 min-h-11 px-5 text-sm rounded-sm",
			lg: "h-12 min-h-12 px-6 text-base rounded-md"
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
