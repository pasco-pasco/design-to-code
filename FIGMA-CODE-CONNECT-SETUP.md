# Figma Code Connect Setup Guide

## 🎯 Overview

You're integrating Figma Code Connect with your design-to-code workflow to:
- Automatically sync Figma design tokens (colors, spacing, typography) to Tailwind
- Link Figma components to your React components
- Enable bidirectional design-code references

## 📋 Prerequisites

✅ Figma Organization account with Code Connect enabled  
✅ GitHub repository: `pasco-pasco/design-to-code`  
✅ Figma Desktop MCP running  
✅ GitHub MCP configured  
✅ `@figma/code-connect` installed  

---

## 🔑 Step 1: Get Your Figma Personal Access Token

### Option A: From Figma Desktop (Recommended)
1. Open Figma Desktop app
2. Go to **Settings** → **Account** → **Personal Access Tokens**
3. Click **"Generate new token"**
4. Name it: `code-connect-cursor`
5. **Copy the token** (starts with `figd_...`)

### Option B: From Figma Web
1. Go to: https://www.figma.com/settings
2. Scroll to **Personal Access Tokens**
3. Click **"Create new token"**
4. Name it: `code-connect-cursor`
5. **Copy the token**

**⚠️ IMPORTANT:** Save this token - you won't see it again!

---

## 🛠️ Step 2: Initialize Code Connect

Run this command in your terminal:

```bash
cd /Users/pascalchenier/design-to-code
npx figma connect init
```

**You'll be prompted for:**
1. **Figma Personal Access Token** - Paste your token from Step 1
2. **Output directory** - Press Enter (default: current directory)
3. **React component library** - Type: `react` and press Enter

**This creates:** `figma.config.json`

---

## 🎨 Step 3: Connect Your Figma File

### Get Your Figma File URL

1. Open your Figma file with design tokens
2. Copy the URL from browser (looks like):
   ```
   https://www.figma.com/design/ABC123XYZ/Your-Design-System
   ```

### Link the File

```bash
npx figma connect link <YOUR_FIGMA_FILE_URL>
```

**Example:**
```bash
npx figma connect link https://www.figma.com/design/ABC123XYZ/Your-Design-System
```

This creates/updates your `figma.config.json` with the file reference.

---

## 📥 Step 4: Pull Design Tokens

### Extract Figma Variables to Code

```bash
npx figma connect variables
```

**This command:**
- Reads Figma Variables (colors, spacing, typography, etc.)
- Generates TypeScript definitions
- Can output to Tailwind config format

**Expected output:**
```
✓ Connected to Figma file: Your-Design-System
✓ Found 45 color variables
✓ Found 12 spacing variables
✓ Found 8 typography variables
✓ Generating token files...
```

---

## 🔗 Step 5: Map Components (Optional but Recommended)

### Create Code Connect Files

For each shadcn/ui component you've installed, create a mapping:

```bash
npx figma connect create src/components/ui/button.tsx
```

**This creates:** `src/components/ui/button.figma.tsx`

**Example mapping:**
```typescript
import figma from '@figma/code-connect'
import { Button } from './button'

figma.connect(Button, 'https://www.figma.com/design/ABC123/node-id=1:2', {
  props: {
    variant: figma.enum('variant', {
      default: 'default',
      destructive: 'destructive',
      outline: 'outline',
      secondary: 'secondary',
      ghost: 'ghost',
    }),
  },
  example: () => <Button variant="default">Click me</Button>,
})
```

### Publish Connections to Figma

```bash
npx figma connect publish
```

This syncs your component mappings back to Figma!

---

## 🎯 Step 6: Integrate Tokens with Tailwind

### Option A: Direct Token Import (Recommended)

Create a token transformation script:

**File:** `scripts/sync-figma-tokens.js`
```javascript
// This script converts Figma tokens to Tailwind format
// Run after: npx figma connect variables
```

### Option B: Manual Copy-Paste

After running `npx figma connect variables`, you'll get token files.
Copy the values into your `tailwind.config.js`.

---

## 🔄 Step 7: Automate with GitHub Actions (Optional)

Create `.github/workflows/figma-sync.yml`:

```yaml
name: Sync Figma Tokens

on:
  workflow_dispatch:
  schedule:
    - cron: '0 9 * * 1' # Every Monday at 9 AM

jobs:
  sync-tokens:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Pull Figma tokens
        env:
          FIGMA_ACCESS_TOKEN: ${{ secrets.FIGMA_TOKEN }}
        run: npx figma connect variables
      
      - name: Commit changes
        run: |
          git config user.name "Figma Bot"
          git config user.email "bot@figma.com"
          git add .
          git commit -m "chore: sync Figma tokens" || exit 0
          git push
```

**Add GitHub Secret:**
- Go to: https://github.com/pasco-pasco/design-to-code/settings/secrets/actions
- Add `FIGMA_TOKEN` with your Figma token

---

## 📚 Common Commands

```bash
# Initialize Code Connect
npx figma connect init

# Link Figma file
npx figma connect link <FIGMA_URL>

# Pull design tokens/variables
npx figma connect variables

# Create component mapping
npx figma connect create <COMPONENT_PATH>

# Publish mappings to Figma
npx figma connect publish

# Parse entire codebase
npx figma connect parse

# Check status
npx figma connect status
```

---

## 🎨 Workflow Integration

### When Designing in Figma:
1. Update colors/spacing/typography variables
2. Run: `npx figma connect variables`
3. Tokens update in your codebase
4. Commit changes to GitHub

### When Coding Components:
1. Create React component with shadcn/ui
2. Run: `npx figma connect create src/components/ui/YOUR_COMPONENT.tsx`
3. Map Figma component props to React props
4. Run: `npx figma connect publish`
5. Designers see code usage in Figma!

### With Claude (Me!):
You can tell me:
- "Pull the latest Figma tokens"
- "Create Code Connect mapping for Button"
- "Sync Figma variables to Tailwind"
- "Generate component from Figma node-id 1:234"

---

## 🐛 Troubleshooting

### Token Not Found
```bash
# Check your Figma token
npx figma connect status
```

### File Not Linked
```bash
# Re-link your Figma file
npx figma connect link <URL>
```

### Variables Not Syncing
- Ensure Figma Variables are published (not in drafts)
- Check you have read access to the file
- Verify token has correct permissions

---

## 📖 Resources

- **Figma Code Connect Docs:** https://www.figma.com/developers/code-connect
- **Token Format:** https://www.figma.com/developers/variables
- **GitHub MCP Integration:** Already configured in your `.cursor/mcp.json`

---

## ✅ Next Steps

After setup, tell me:
1. **"Pull Figma tokens"** - I'll run the sync command
2. **"Map Button component"** - I'll create the Code Connect file
3. **"Show me the tokens"** - I'll display what was imported

**Ready to proceed with setup? Share your Figma file URL and I'll help you through each step!** 🚀

