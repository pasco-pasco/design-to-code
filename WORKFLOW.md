# Design-to-Code Workflow

## 🎯 Overview
This project uses **shadcn/ui** as the foundation for basic components (Button, Badge, etc.) and **Figma** for custom design components.

## 📋 Component Strategy

### **Tier 1: shadcn/ui Base Components (Install First)**
Use shadcn/ui for these standard components - they're battle-tested and accessible:

```bash
# Core UI Components (Priority Order)
npx shadcn@latest add button
npx shadcn@latest add badge
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add switch
npx shadcn@latest add dialog
npx shadcn@latest add alert
npx shadcn@latest add avatar
npx shadcn@latest add separator
npx shadcn@latest add skeleton
```

### **Tier 2: Custom Figma Components**
Generate these from Figma designs when you need brand-specific styling:
- Hero sections
- Feature cards
- Testimonials
- Pricing tables
- Navigation bars
- Footers
- Custom layouts

---

## 🔄 Complete Workflow

### **Step 1: Install shadcn/ui Component**
```bash
npx shadcn@latest add [component-name]
```
This creates the component in `src/components/ui/`

### **Step 2: Customize with Figma Design (Optional)**
If you have a Figma design for this component:

1. Select component in Figma Desktop
2. Tell Claude: "Generate custom styles for [component] based on Figma"
3. Claude will:
   - Extract design tokens (colors, spacing, typography)
   - Update the shadcn component with custom styles
   - Maintain accessibility and functionality

### **Step 3: Test in Browser**
```bash
npm run dev
```
- View at http://localhost:5173
- Test all states (hover, active, disabled)
- Test responsiveness

### **Step 4: Commit & Push**
```bash
# Manual approach
git add .
git commit -m "Add [Component] component"
git push

# OR ask Claude:
"Commit and push the [Component] component"
```

### **Step 5: Create PR (When Feature Complete)**
Ask Claude: "Create a PR for the [feature] components"

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   └── custom/          # Custom Figma components
│       ├── Hero.tsx
│       ├── FeatureCard.tsx
│       └── ...
├── lib/
│   └── utils.ts         # Utility functions (cn, etc.)
└── App.tsx              # Main app
```

---

## 🎨 Figma-to-Code Workflow

### **For Complex/Custom Components:**

**Command:**
```
"Generate [ComponentName] from the selected Figma frame"
```

**Claude will:**
1. ✅ Extract design from Figma Desktop MCP
2. ✅ Check if shadcn component exists as base
3. ✅ Generate React + Tailwind code
4. ✅ Create component file in `src/components/custom/`
5. ✅ Test in browser
6. ✅ Screenshot comparison with Figma
7. ✅ Commit & push (if requested)

---

## 📝 Component Tracking System

### **Create Components Checklist:**
Keep track of your 60 components from the list:

#### ✅ Installed (shadcn/ui)
- [ ] Accordion
- [ ] Alert Dialog
- [ ] Alert
- [ ] Avatar
- [ ] Badge
- [ ] Breadcrumb
- [ ] Button Group
- [ ] Button
- [ ] Calendar
- [ ] Card
- [ ] Carousel
- [ ] Chart
- [ ] Checkbox
- [ ] Collapsible
- [ ] Combobox
- [ ] Command
- [ ] Context Menu
- [ ] Data Table
- [ ] Date Picker
- [ ] Dialog
- [ ] Drawer
- [ ] Dropdown Menu
- [ ] Empty
- [ ] Field
- [ ] Form
- [ ] Hover Card
- [ ] Input Group
- [ ] Input OTP
- [ ] Input
- [ ] Item
- [ ] Kbd
- [ ] Label
- [ ] Menubar
- [ ] Native Select
- [ ] Navigation Menu
- [ ] Pagination
- [ ] Popover
- [ ] Progress
- [ ] Radio Group
- [ ] Resizable
- [ ] Scroll Area
- [ ] Select
- [ ] Separator
- [ ] Sheet
- [ ] Sidebar
- [ ] Skeleton
- [ ] Slider
- [ ] Sonner
- [ ] Spinner
- [ ] Switch
- [ ] Table
- [ ] Tabs
- [ ] Textarea
- [ ] Toast
- [ ] Toggle Group
- [ ] Toggle
- [ ] Tooltip
- [ ] Typography

#### 🎨 Custom (from Figma)
- [ ] [Add custom components here]

---

## 🚀 Quick Commands

### **Install Multiple Components at Once:**
```bash
npx shadcn@latest add button badge card input label
```

### **Ask Claude for Batch Installation:**
```
"Install button, badge, card, input, and label from shadcn"
```

### **Generate Custom Component:**
```
"Generate [ComponentName] from Figma and test it"
```

### **Complete Feature Workflow:**
```
"Generate [ComponentName] from Figma, test it, and create a PR"
```

---

## 💡 Best Practices

### **DO:**
- ✅ Use shadcn/ui for standard components first
- ✅ Customize with Figma designs when needed
- ✅ Test in browser before committing
- ✅ Keep component list updated
- ✅ Commit frequently with clear messages
- ✅ Create PRs when features are complete

### **DON'T:**
- ❌ Build common components from scratch
- ❌ Skip browser testing
- ❌ Commit without testing
- ❌ Mix styling approaches (stay consistent with Tailwind)

---

## 🔗 Resources

- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [shadcn/ui CLI](https://ui.shadcn.com/docs/cli)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Your Component List](/Users/pascalchenier/Desktop/component list.txt)

---

## 📊 Progress Tracking

**Total Components:** 60  
**Installed:** 0  
**Custom Generated:** 0  
**Complete:** 0%

Update this as you progress!

