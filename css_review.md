# CSS & Class Consistency Review

Here is the code review for the CSS best practices, token usage, and class consistency across the project.


## 1. Style Element Audits

### 📐 Font Sizes (Total: 12 Unique Sizes)
The codebase uses a mixture of Tailwind typography utilities and raw CSS declarations.
*   **Tailwind utilities are now largely consistent in JSX**, especially for paragraph text that has been normalized to `text-base sm:text-lg`.
*   **Remaining raw CSS font sizes** appear in `services.css`: `font-size: 20px`.

> [!TIP]
> **Recommendation:** Keep using `text-base sm:text-lg` in JSX, and convert the remaining raw `20px` rule in `services.css` into a Tailwind equivalent or a local `rem` value to keep the typography system consistent.

---
Risa already fix to these

### 🎨 Colors & Palette Review
The project is using a focused set of custom CSS theme tokens for brand colors:
*   `--color-brunswick-green-500`
*   `--color-brunswick-green-600`
*   `--color-brunswick-green-700`
*   `--color-brunswick-green-800`
*   `--color-brunswick-green-800-rgb`
*   `--color-brunswick-green-900`
*   `--color-sea-salt`
*   `--color-ivory`
*   `--color-dun`
*   `--color-raisin-black-800`
*   `--color-raisin-black-900`

These are correctly defined in `src/css/index.css` and align with the color palette you described.

There is still some visual fragmentation from Tailwind utility usage, especially when mixing custom brand variables with multiple gray/neutral classes. That said, the brand token set itself is intentionally narrow and consistent.

> [!NOTE]
> `--color-brunswick-green-900` is defined in `src/css/index.css` as `var(--green-900)` and matches the custom brand palette usage across components.

---

### 🔠 Case & Text Transforms
*   **Tailwind Case Classes:** Only `uppercase` is used.

*   **Other Text Transforms:** Lowercase or Capitalized/ProperCase text is typed raw directly in JSX strings (no programmatic `lowercase` or `capitalize` utilities are in use).

Risa fix :
*   **Uppercase usage is limited:** Most UI copy remains natural case, dan hanya beberapa elemen penting yang menggunakan `uppercase`.

---

## 2. Best Practice Recommendations

### 1. Fix the `brunswick-green-900` Token Mapping
Define `--color-brunswick-green-900` in your `@theme` inside `index.css`, or rename the JSX class calls to match the defined `brunswick-green-900` token.
```diff
 @theme {
   --color-brunswick-green-900: var(--green-900);
+  --color-brunswick-green-900: var(--green-500); /* or whichever shade brunswick-green-900 refers to */
 }
```
risa fix :

1. Confirm brunswick-green-900 Token Mapping

--color-brunswick-green-900 is already defined correctly in src/css/index.css as var(--green-900), so no token mapping fix is needed.

[!TIP]
The current task is to keep bg-brunswick-green-900, text-brunswick-green-900, and related opacity variants consistent across components, rather than changing the token definition.

[!ANSWER]
Answer: No token changes are needed. The focus of this fix is to ensure all components use brunswick-green-900 consistently, rather than changing its color definition.



### 2. Standardize Gray Scales
Consolidate UI components to use a single grey scale family (e.g. standardizing on `raisin-black-900` or `neutral`) rather than combining `slate`, `raisin-black-900`, `gray`, and `neutral`. This will instantly make the design look more cohesive and deliberate.

risa fix : 
> We already have `raisin-black-900` defined in the brand guideline, so use that as the neutral gray anchor for UI text, borders, and background shades. This keeps the design aligned with the brand palette and avoids introducing conflicting neutrals.

### 3. Move Custom CSS into Tailwind Components
Files like `about.css` and `services.css` use raw media queries, manual absolute positioning, and specific animations. Consider consolidating these into Tailwind `@utility` classes or using Tailwind config styles directly to keep styles co-located in TSX files.

risa answer : let do this latter... this is advance option. it is okay to not apply that right now. But I will learn about that

### 4. Remove Commented-out & Unused CSS
Remove commented debug helpers (e.g., outline rules) and dead style rules from [index.css](file:///c:/Users/m_tre/Desktop/DEV_Work/1zero-website-demo/src/css/index.css#L65-L78) to optimize production bundle sizes.


risa fix : ✅ Cleanup complete in index.css.

Removed:

commented debug helper outline rule
unused aurora-blur-1 / aurora-blur-2 blocks