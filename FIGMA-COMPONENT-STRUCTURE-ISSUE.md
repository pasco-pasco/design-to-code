# Figma Component Structure Issue

## Problem Discovered

Your Figma Button components are organized as **individual components** rather than a **Component Set**. This affects how Code Connect works.

### Current Structure
```
Frame (37:931 "Button") 
├─ Component (37:930) "Variant=Default, State=Default, Size=default"
├─ Component (17421:99764) "Variant=Default, State=Focus, Size=default"
├─ Component (979:19776) "Variant=Default, State=Hover, Size=default"
└─ ... (183 more individual components)
```

### What Code Connect Expects
```
Component Set (with a diamond icon)
├─ Variant 1 (variant properties: variant=default, size=default)
├─ Variant 2 (variant properties: variant=destructive, size=sm)
└─ ... (all variants with properties)
```

## Impact

- ❌ **Cannot publish** Code Connect to individual variants (they're not "top level")
- ❌ **Cannot map dynamically** to variant properties (they don't exist)
- ✅ **Can map** to each component individually (but tedious for 186 components)

## Solutions

### Option 1: Restructure Figma File (RECOMMENDED)
**In Figma:**
1. Select all 186 Button variants
2. Right-click → "Create component set"
3. Figma will automatically detect the variant patterns in the names
4. This creates proper variant properties (Variant, State, Size)
5. Copy the new component set URL
6. Update Code Connect with the component set URL

**Benefits:**
- ✅ One Code Connect mapping handles all 186 variants
- ✅ Dynamic prop mapping works
- ✅ Cleaner Figma file structure
- ✅ Better design system organization

### Option 2: Map to Default Button Only (QUICK FIX)
Map Code Connect to just one button component (e.g., the default one). This gives you:
- ✅ Code reference in Figma for at least one button
- ❌ No variant intelligence
- ❌ Manual work to map other variants

### Option 3: Use Figma's Auto-Detection (IF AVAILABLE)
Some Figma organization plans allow automatic Code Connect detection. Check if your org has this enabled.

## Recommended Action

**I strongly recommend Option 1** (restructure to component set) because:
1. It's a one-time 5-minute task in Figma
2. Unlocks full Code Connect capabilities
3. Improves your design system organization
4. Makes your Figma file easier to maintain
5. Enables proper variant property mapping

### How to Create a Component Set in Figma

1. **Select all button variants** in your Figma file (all 186 components)
2. **Right-click** → **"Combine as variants"** or **"Create component set"**
3. Figma will analyze the naming pattern (`Variant=X, State=Y, Size=Z`)
4. It will automatically create properties:
   - `Variant` property: Default, Secondary, Destructive, Outline, Ghost, Link
   - `State` property: Default, Hover, Focus, Disabled, Loading, Pressed
   - `Size` property: default, sm, lg, icon, icon-sm, icon-lg
5. **Copy the component set URL** (it will have a new node ID)
6. **Provide that URL** and I'll update the Code Connect file

## Current Status

⏸️ **Waiting for decision**: Would you like to restructure the Figma file, or use a quick fix?

