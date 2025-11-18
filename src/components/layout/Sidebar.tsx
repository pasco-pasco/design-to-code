import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ComponentLink {
  name: string
  path: string
  icon: string
}

const componentLinks: ComponentLink[] = [
  { name: 'Alert', path: '/components/alert', icon: '⚠️' },
  { name: 'Button', path: '/components/button', icon: '🔘' },
  { name: 'Card', path: '/components/card', icon: '🗂️' },
  { name: 'Checkbox', path: '/components/checkbox', icon: '☑️' },
  { name: 'Dialog', path: '/components/dialog', icon: '💬' },
  { name: 'Input', path: '/components/input', icon: '📝' },
  { name: 'Label', path: '/components/label', icon: '🏷️' },
  { name: 'Skeleton', path: '/components/skeleton', icon: '⏳' },
  { name: 'Switch', path: '/components/switch', icon: '🔄' },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform">
      <div className="flex h-full flex-col overflow-y-auto px-3 py-4">
        {/* Header */}
        <Link to="/" className="mb-8 px-3">
          <h1 className="text-2xl font-bold">
            shadcn<span className="text-primary">/ui</span>
          </h1>
          <p className="text-sm text-muted-foreground">Component Library</p>
        </Link>

        {/* Navigation */}
        <nav className="space-y-1">
          {/* Home Link */}
          <Link
            to="/"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              location.pathname === '/'
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <span>🏠</span>
            <span>Overview</span>
          </Link>

          {/* Divider */}
          <div className="my-4 border-t" />
          
          <div className="px-3 pb-2">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Components
            </h2>
          </div>

          {/* Component Links */}
          {componentLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                location.pathname === link.path
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t">
          <div className="px-3 py-2 text-xs text-muted-foreground">
            <p>9 components installed</p>
            <p className="mt-1">Built with React + Tailwind</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

