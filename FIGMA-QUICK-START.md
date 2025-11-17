# Figma Code Connect - Quick Start 🚀

## ⚡ Setup (One Time)

### 1. Get Figma Token
- Open Figma → Settings → Personal Access Tokens
- Generate token (name: `code-connect-cursor`)
- Copy token (starts with `figd_...`)

### 2. Initialize
```bash
npm run figma:init
# Paste your Figma token when prompted
```

### 3. Link Your Figma File
```bash
npm run figma:link
# Paste your Figma file URL
```

---

## 🎨 Daily Workflow

### Pull Design Tokens from Figma
```bash
npm run figma:tokens
```
**Use this when:** Designers update colors, spacing, or typography in Figma

### Map a Component
```bash
npx figma connect create src/components/ui/button.tsx
```
**Use this when:** You create a new React component that matches a Figma component

### Publish Mappings to Figma
```bash
npm run figma:publish
```
**Use this when:** You want designers to see your code in Figma

---

## 💬 Ask Claude to Help

Instead of running commands manually, you can tell me:

### Token Sync
- "Pull the latest Figma tokens"
- "Sync Figma variables to Tailwind"
- "Update design tokens from Figma"

### Component Mapping
- "Create Code Connect mapping for Button"
- "Map the Card component to Figma"
- "Link Alert component with Figma"

### Generate from Figma
- "Generate Hero section from Figma node 1:234"
- "Create component from selected Figma frame"
- "Import the Navigation component from Figma"

---

## 📋 npm Scripts Available

| Command | What it Does |
|---------|-------------|
| `npm run figma:init` | Initialize Code Connect (one time) |
| `npm run figma:link` | Link a Figma file |
| `npm run figma:tokens` | Pull design tokens/variables |
| `npm run figma:publish` | Publish component mappings to Figma |
| `npm run figma:parse` | Parse codebase for components |
| `npm run figma:status` | Check connection status |

---

## 🎯 What You Get

### From Figma → Code:
- ✅ **Color tokens** → Tailwind colors
- ✅ **Spacing tokens** → Tailwind spacing
- ✅ **Typography tokens** → Tailwind fonts
- ✅ **Component props** → React props
- ✅ **Design specs** → Code comments

### From Code → Figma:
- ✅ **Component links** in Figma Dev Mode
- ✅ **Code examples** in Figma
- ✅ **Prop mappings** visible to designers
- ✅ **Usage documentation**

---

## 🔗 Your Setup

- **Figma File:** [Add your file URL here]
- **GitHub Repo:** https://github.com/pasco-pasco/design-to-code
- **Components:** 9/60 installed (Button, Input, Label, Card, Checkbox, Switch, Dialog, Alert, Skeleton)

---

## 📖 Full Documentation

See `FIGMA-CODE-CONNECT-SETUP.md` for detailed instructions.

---

## ✅ Next Step

**Tell me your Figma file URL and I'll help you:**
1. Initialize Code Connect
2. Link your design file
3. Pull your Tailwind tokens
4. Map your first component

**Ready? Share your Figma URL!** 🎨

