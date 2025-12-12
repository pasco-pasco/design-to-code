import { InstructionCard } from '@/components/ui/instruction-card'

// This page demonstrates the InstructionCard component created from Figma design
export function InstructionCardsPage() {
  return (
    <div className="space-y-10">
      {/* Page Header Section */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Instruction cards</h1>
        <p className="text-base text-muted-foreground">
          Displays instruction cards with header, content, and footer.
        </p>
      </div>

      {/* InstructionCard Example - Converted from Figma Design */}
      <div className="space-y-4">
        <InstructionCard title="Wait for" defaultExpanded={true} />
        
        {/* 
          Try clicking the arrow icon to collapse/expand the card!
          
          Features implemented:
          ✅ Collapsible header with animated chevron
          ✅ Status badge with bolt icon (placeholder for custom icon)
          ✅ Two input fields for "Wait for" and "Condition"
          ✅ Footer with "+ Add or" button
          ✅ Matches Figma design colors (slate-50 header/footer, slate-100 content)
          ✅ Uses your existing design tokens where possible
        */}
      </div>
    </div>
  )
}
