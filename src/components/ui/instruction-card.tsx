import * as React from "react"
import { ChevronDown, Zap, MoreHorizontal, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "./input"
import { Button } from "./button"

/**
 * InstructionCard Component
 * 
 * A collapsible card component for displaying instruction steps with:
 * - Header with status indicator and controls
 * - Content area with input fields
 * - Footer with action buttons
 * 
 * Props:
 * - title: The instruction type (e.g., "Wait for")
 * - defaultExpanded: Whether the card starts expanded (default: true)
 */

interface InstructionCardProps {
  title?: string
  defaultExpanded?: boolean
}

export function InstructionCard({ 
  title = "Wait for", 
  defaultExpanded = true 
}: InstructionCardProps) {
  // State to track if the card is expanded or collapsed
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)

  return (
    <div className="w-full max-w-[616px] rounded-lg overflow-hidden border border-slate-200">
      {/* 
        HEADER SECTION 
        - Light gray background (slate-50)
        - Contains: collapse arrow, status badge, menu button
      */}
      <div className="bg-slate-50 border-b border-slate-200 px-1 py-0 h-8 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left side: Collapse arrow + Status badge */}
          <div className="flex items-center gap-0">
            {/* Collapse/Expand Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-slate-100 rounded transition-colors"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              <ChevronDown 
                className={cn(
                  "h-4 w-4 text-slate-900 transition-transform duration-200",
                  isExpanded ? "rotate-0" : "-rotate-90"
                )}
              />
            </button>

            {/* Status Badge with Icon */}
            <div className="flex items-center gap-1 px-1">
              <div className="flex items-center justify-center w-[10.67px] h-[10.67px]">
                <Zap className="h-2.5 w-2.5 text-emerald-600 fill-emerald-200" />
              </div>
              <span className="text-xs font-semibold text-slate-900">
                {title}
              </span>
            </div>
          </div>

          {/* Right side: Menu button */}
          <button 
            className="p-1 hover:bg-slate-100 rounded transition-colors"
            aria-label="More options"
          >
            <MoreHorizontal className="h-4 w-4 text-slate-500" />
          </button>
        </div>
      </div>

      {/* 
        CONTENT SECTION 
        - Slightly darker gray background (slate-100)
        - Contains: Two input fields side by side
        - Uses smooth height animation when collapsing/expanding
      */}
      <div 
        className={cn(
          "bg-slate-100 border-b border-slate-200 transition-all duration-200 ease-in-out overflow-hidden",
          isExpanded ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-3">
          <div className="grid grid-cols-2 gap-3">
            {/* Left Input: "Wait for" */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-900">
                Wait for
              </label>
              <Input 
                placeholder="Placeholder" 
                className="h-6 text-xs bg-white border-slate-200"
              />
            </div>

            {/* Right Input: "Condition" */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-900">
                Condition
              </label>
              <Input 
                placeholder="Placeholder" 
                className="h-6 text-xs bg-white border-slate-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 
        FOOTER SECTION 
        - Matches header background (slate-50)
        - Contains: "+ Add or" button
      */}
      <div className="bg-slate-50 px-2 py-0 h-8 flex items-center">
        <Button 
          variant="ghost" 
          size="sm"
          className="h-6 px-1 text-xs font-semibold text-slate-900 hover:bg-slate-100"
        >
          <Plus className="h-4 w-4" />
          Add or
        </Button>
      </div>
    </div>
  )
}

