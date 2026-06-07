# Drury Outdoors - Provo River Fly Fishing

Mobile-first website for Provo River fly recommendations by section, season, and time of day.

Included:
- Upper, Middle, and Lower Provo selector
- Seasonal and time-of-day fly recommendations
- Live weather updates (Open-Meteo)
- PWA basics (manifest + service worker)

## Run

Open index.html directly, or serve locally:

python3 -m http.server 8080

Then visit http://localhost:8080

## Add Fly Images One By One

1. Put fly photos in assets/flies
2. Name each file using the fly card name converted to lowercase with dashes
3. Supported formats: .jpg, .jpeg, .png, .webp

Examples:

- Zebra Midge #20-22 -> assets/flies/zebra-midge-20-22.jpg
- Pheasant Tail #16-18 -> assets/flies/pheasant-tail-16-18.jpg
- Elk Hair Caddis #16 -> assets/flies/elk-hair-caddis-16.jpg

If an image is missing, the app shows a built-in placeholder automatically.

## Next Step To Phone App

This project is now configured with Capacitor.

## Mobile App Workflow

1. Edit your web files in this folder (`index.html`, `styles.css`, `script.js`, and `assets/*`).
2. Sync those changes into iOS/Android:

```
npm run cap:sync
```

3. Open native projects:

```
npm run cap:open:ios
npm run cap:open:android
```

Capacitor setup files:
- `capacitor.config.json` (uses `www` as app web directory)
- `www/` (generated copy of your site for native apps)
- `ios/` and `android/` (native app projects)

## First-Time Node Shell Setup (if needed)

Node was installed through `nvm`. If a new terminal does not find `node` or `npm`, run:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```
