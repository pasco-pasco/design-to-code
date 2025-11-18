# Button Code Connect Setup Instructions

## Current Status
✅ Code Connect file created: `src/components/ui/button.figma.tsx`  
⚠️ Waiting for correct Figma component URL

## The Issue
The URL you provided (`node-id=17085-177606`) points to a **frame or instance**, not the **main component**.

Code Connect can only link to:
- Main components (◆ diamond icon)
- Component sets (groups of variants)

## How to Find the Correct URL

### Method 1: From the Assets Panel
1. In Figma Desktop, open your design file
2. Click on the **Assets** panel (left sidebar)
3. Find the **Button** component (look for the ◆ diamond icon)
4. Right-click on it
5. Select **"Copy link to component"**
6. Paste that URL here

### Method 2: From the Canvas
1. Find any Button instance on your canvas
2. Right-click on it
3. Select **"Go to main component"** (or press Option+Cmd+E on Mac)
4. Once you're viewing the main component, copy the URL from your browser
5. The node-id in that URL is the one we need

### Method 3: Check the Figma URL Pattern
Component URLs typically look like:
```
https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=XX-YY&...
```

Where `XX-YY` is the **component's node ID** (not an instance).

## What Happens Next

Once you provide the correct component URL:

1. I'll update `src/components/ui/button.figma.tsx` with the correct URL
2. We'll run `npm run figma:publish` to upload the mapping to Figma
3. You'll see the React code appear in Figma when you select the Button component
4. You can use this same pattern for all other components

## Current Code Connect File

The file is ready with all 6 Button variants mapped:
- default
- destructive
- outline
- secondary
- ghost
- link

It also maps these props:
- `variant` (maps to Figma property 'variant')
- `size` (maps to Figma property 'size')
- `children` (maps to Figma property 'label')
- `disabled` (maps to Figma property 'disabled')

## Quick Test Command

Once you have the correct URL, you can test it with:

```bash
npm run figma:publish
```

This will validate and upload the Code Connect mapping to Figma.

