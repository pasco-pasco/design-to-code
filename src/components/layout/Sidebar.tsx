import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ComponentLink {
  name: string
  path: string
}

const componentLinks: ComponentLink[] = [
  { name: 'Alert', path: '/components/alert' },
  { name: 'Button', path: '/components/button' },
  { name: 'Card', path: '/components/card' },
  { name: 'Checkbox', path: '/components/checkbox' },
  { name: 'Dialog', path: '/components/dialog' },
  { name: 'Input', path: '/components/input' },
  { name: 'Label', path: '/components/label' },
  { name: 'Skeleton', path: '/components/skeleton' },
  { name: 'Switch', path: '/components/switch' },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[220px] border-r border-border bg-background">
      <div className="flex h-full flex-col overflow-y-auto px-3 py-6">
        {/* Header */}
        <Link to="/" className="mb-6 px-3">
          <h1 className="text-lg font-semibold tracking-tight">
            shadcn/ui
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">Component Library</p>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {/* Home Link */}
          <Link
            to="/"
            className={cn(
              'block rounded-md px-3 py-1.5 text-sm transition-colors',
              location.pathname === '/'
                ? 'bg-muted font-medium text-foreground'
                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            )}
          >
            Overview
          </Link>

          {/* Components Section */}
          <div className="pt-6">
            <h2 className="mb-2 px-3 text-xs font-semibold tracking-tight text-muted-foreground">
              Components
            </h2>
            <div className="space-y-0.5">
              {componentLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block rounded-md px-3 py-1.5 text-sm transition-colors',
                    location.pathname === link.path
                      ? 'bg-muted font-medium text-foreground'
                      : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-4">
          <div className="px-3 text-[11px] text-muted-foreground/70 space-y-0.5">
            <p>9 components</p>
            <p>React + Tailwind</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
