# Specification

## Summary
**Goal:** Build a simple, romantic-themed single-page Valentine prompt with “Yes” and an evasive “No”, and show a “Good choice” meme confirmation on “Yes”.

**Planned changes:**
- Create a single-page UI that asks the Valentine question and shows exactly two buttons labeled “Yes” and “No” (English only).
- Implement evasive behavior for the “No” button so it moves away on pointer approach (desktop) and on tap attempt (iPad/touch), staying within the visible viewport/container and effectively preventing clicks.
- On “Yes” click, transition in-page (no reload) to a success view showing the exact text “Good choice” and a meme image loaded from a static asset path.
- Apply a consistent romantic pink/white theme with responsive, touch-friendly layout suitable for iPad Chrome.
- Add the generated meme image asset under `frontend/public/assets/generated/` and reference it directly from the frontend.

**User-visible outcome:** The user sees a romantic Valentine question with “Yes” and an unclickable evasive “No”; tapping “Yes” reveals a confirmation view with the text “Good choice” and a meme image.
