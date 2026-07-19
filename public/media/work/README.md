# Case study images

Each case study has image slots defined in `app/lib/work.ts` under `detail.heroImage` and `detail.gallery`.

## How to add a real image

1. Drop the file into the matching folder:

```
public/media/work/<case-study-id>/
  hero.jpg
  gallery-1.jpg
  gallery-2.jpg
```

2. Set the `src` field on that slot in `app/lib/work.ts`:

```ts
heroImage: {
  label: "Gameplay & leaderboard",
  alt: "Real-time gaming backend — gameplay and live leaderboard view",
  src: "/media/work/realtime-gaming-backend/hero.jpg",
},
```

While `src` is omitted, the page renders a branded placeholder so the layout stays intact.

## Case study IDs

- `realtime-gaming-backend`
- `ai-calling-workflow`
- `screen-recording-platform`
- `artwork-verification`
- `global-coffee-marketplace`
- `education-lending-marketplace`
- `ai-commerce-merchandising-platform`
- `eos-leadership-workspace`

## Recommended sizes

| Slot        | Aspect   | Suggested size |
|-------------|----------|----------------|
| Hero        | 4:3      | 1600 × 1200    |
| Gallery     | 16:10    | 1600 × 1000    |

Prefer compressed JPG or WebP under ~400 KB each.
