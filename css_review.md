# CSS & Class Consistency Review

Here is the code review for the CSS best practices, token usage, and class consistency across the project.

---

## 1. Style Element Audits

### 📐 Font Sizes (Total: 12 Unique Sizes)
The codebase uses a mixture of Tailwind typography utilities and raw CSS declarations:
*   **Tailwind Font Sizes (10):** `text-xs`, `text-sm`, `text-lg`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`.
*   **Raw CSS Font Sizes (2):** `14px`, `20px` (found in [services.css](file:///c:/Users/m_tre/Desktop/DEV_Work/1zero-website-demo/src/css/services.css#L78-L87)).

> [!TIP]
> **Recommendation:** Standardize the raw CSS font sizes in `services.css` using Tailwind classes or local rem values (e.g., change `14px` to `text-sm` or `0.875rem` and `20px` to `text-xl` or `1.25rem`) to maintain design system consistency.

---

### 🎨 Colors & Palette Proliferation (Total: ~25+ Color Tokens/Varieties)
There is significant visual fragmentation in how colors are applied:
*   **Custom Brand Colors:** `--color-brunswick-green` (500 to 900), `sea-salt`, `ivory`, and `dun`.
*   **Tailwind Grays (5 Different Scales):** The codebase concurrently uses `slate` (e.g. `text-slate-50`), `zinc` (e.g. `text-zinc-300`), `gray` (e.g. `text-gray-400`), `neutral` (e.g. `text-neutral-300`), and `white` with custom opacity filters (`text-white/60`, `text-white/80`).
*   **Secondary/Accent Colors:**
    *   Mix of standard Tailwind `emerald` (400, 500, 600, 900) alongside custom brand `brunswick-green`.
    *   Various one-off colors like `rose`, `pink`, `violet`, `sky`, `blue`, and `indigo` (primarily used for gradients or hover states in bookings/modal states).

> [!WARNING]
> ### 🛑 Critical Bug: Undefined `--color-green-primary` Token
> Multiple components (e.g. `App.tsx`, `WhyUs.tsx`, `Testimonials.tsx`, `Products.tsx`, etc.) apply the utility `bg-green-primary` or `bg-green-primary/10`.
>
> However, **`green-primary` is never defined** under `@theme` in [index.css](file:///c:/Users/m_tre/Desktop/DEV_Work/1zero-website-demo/src/css/index.css#L4-L18). The actual defined theme token is:
> ```css
> --color-brunswick-green-primary: var(--green-900);
> ```
> Consequently, `bg-green-primary` translates to an empty background style in production, causing elements to render without background colors or with broken text selection/gradients.

---

### 🔠 Case & Text Transforms
*   **Tailwind Case Classes:** Only `uppercase` is used.
*   **Other Text Transforms:** Lowercase or Capitalized/ProperCase text is typed raw directly in JSX strings (no programmatic `lowercase` or `capitalize` utilities are in use).

---

## 2. Best Practice Recommendations

### 1. Fix the `green-primary` Token Mapping
Define `--color-green-primary` in your `@theme` inside `index.css`, or rename the JSX class calls to match the defined `brunswick-green-primary` token.
```diff
 @theme {
   --color-brunswick-green-primary: var(--green-900);
+  --color-green-primary: var(--green-500); /* or whichever shade green-primary refers to */
 }
```

### 2. Standardize Gray Scales
Consolidate UI components to use a single grey scale family (e.g. standardizing on `zinc` or `neutral`) rather than combining `slate`, `zinc`, `gray`, and `neutral`. This will instantly make the design look more cohesive and deliberate.

### 3. Move Custom CSS into Tailwind Components
Files like `about.css` and `services.css` use raw media queries, manual absolute positioning, and specific animations. Consider consolidating these into Tailwind `@utility` classes or using Tailwind config styles directly to keep styles co-located in TSX files.

### 4. Remove Commented-out & Unused CSS
Remove commented debug helpers (e.g., outline rules) and dead style rules from [index.css](file:///c:/Users/m_tre/Desktop/DEV_Work/1zero-website-demo/src/css/index.css#L65-L78) to optimize production bundle sizes.
