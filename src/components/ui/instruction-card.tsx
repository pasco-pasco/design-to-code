import * as React from "react"
import { ChevronDown, MoreHorizontal, Plus } from "lucide-react"
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
              <div className="flex items-center justify-center w-4 h-4">
                {/* Custom Programming Icon SVG - Gear with settings */}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path d="M8.66667 13.7953C8.06333 14.214 7.09333 13.99 6.88333 13.122C6.84072 12.9461 6.75719 12.7828 6.63953 12.6453C6.52187 12.5079 6.37341 12.4001 6.20623 12.3308C6.03906 12.2616 5.85789 12.2328 5.67748 12.2468C5.49706 12.2607 5.3225 12.3171 5.168 12.4113C4.13933 13.038 2.96133 11.8607 3.588 10.8313C3.68207 10.6769 3.73837 10.5024 3.75232 10.3222C3.76628 10.1419 3.7375 9.96082 3.66831 9.79375C3.59913 9.62667 3.49151 9.47828 3.35418 9.36063C3.21686 9.24298 3.05371 9.1594 2.878 9.11667C1.70733 8.83267 1.70733 7.16733 2.878 6.88333C3.05387 6.84072 3.21719 6.75719 3.35467 6.63953C3.49215 6.52187 3.5999 6.37341 3.66916 6.20623C3.73843 6.03906 3.76723 5.85789 3.75325 5.67748C3.73926 5.49706 3.68287 5.3225 3.58867 5.168C2.962 4.13933 4.13933 2.96133 5.16867 3.588C5.83533 3.99333 6.69933 3.63467 6.88333 2.878C7.16733 1.70733 8.83267 1.70733 9.11667 2.878C9.15928 3.05387 9.24281 3.21719 9.36047 3.35467C9.47813 3.49215 9.62659 3.5999 9.79377 3.66916C9.96094 3.73843 10.1421 3.76723 10.3225 3.75325C10.5029 3.73926 10.6775 3.68287 10.832 3.58867C11.8607 2.962 13.0387 4.13933 12.412 5.16867C12.3179 5.3231 12.2616 5.49756 12.2477 5.67785C12.2337 5.85814 12.2625 6.03918 12.3317 6.20625C12.4009 6.37333 12.5085 6.52172 12.6458 6.63937C12.7831 6.75702 12.9463 6.8406 13.122 6.88333C14.1167 7.12467 14.266 8.36267 13.5713 8.90333" fill="#A7F3D0"/>
                  <path d="M8.66667 13.7953C8.06333 14.214 7.09333 13.99 6.88333 13.122C6.84072 12.9461 6.75719 12.7828 6.63953 12.6453C6.52187 12.5079 6.37341 12.4001 6.20623 12.3308C6.03906 12.2616 5.85789 12.2328 5.67748 12.2468C5.49706 12.2607 5.3225 12.3171 5.168 12.4113C4.13933 13.038 2.96133 11.8607 3.588 10.8313C3.68207 10.6769 3.73837 10.5024 3.75232 10.3222C3.76628 10.1419 3.7375 9.96082 3.66831 9.79375C3.59913 9.62667 3.49151 9.47828 3.35418 9.36063C3.21686 9.24298 3.05371 9.1594 2.878 9.11667C1.70733 8.83267 1.70733 7.16733 2.878 6.88333C3.05387 6.84072 3.21719 6.75719 3.35467 6.63953C3.49215 6.52187 3.5999 6.37341 3.66916 6.20623C3.73843 6.03906 3.76723 5.85789 3.75325 5.67748C3.73926 5.49706 3.68287 5.3225 3.58867 5.168C2.962 4.13933 4.13933 2.96133 5.16867 3.588C5.83533 3.99333 6.69933 3.63467 6.88333 2.878C7.16733 1.70733 8.83267 1.70733 9.11667 2.878C9.15928 3.05387 9.24281 3.21719 9.36047 3.35467C9.47813 3.49215 9.62659 3.5999 9.79377 3.66916C9.96094 3.73843 10.1421 3.76723 10.3225 3.75325C10.5029 3.73926 10.6775 3.68287 10.832 3.58867C11.8607 2.962 13.0387 4.13933 12.412 5.16867C12.3179 5.3231 12.2616 5.49756 12.2477 5.67785C12.2337 5.85814 12.2625 6.03918 12.3317 6.20625C12.4009 6.37333 12.5085 6.52172 12.6458 6.63937C12.7831 6.75702 12.9463 6.8406 13.122 6.88333C14.1167 7.12467 14.266 8.36267 13.5713 8.90333" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8Z" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.3334 14.6667L14.6667 12.6667L11.3334 10.6667V14.6667Z" fill="#A7F3D0" stroke="#059669" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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

