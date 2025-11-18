import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'

const installedComponents = [
  { name: 'Alert', path: '/components/alert', description: 'Display alert messages with different variants' },
  { name: 'Button', path: '/components/button', description: 'Interactive buttons with multiple variants and sizes' },
  { name: 'Card', path: '/components/card', description: 'Container component for grouping related content' },
  { name: 'Checkbox', path: '/components/checkbox', description: 'Checkbox input with customizable states' },
  { name: 'Dialog', path: '/components/dialog', description: 'Modal dialog for important information or actions' },
  { name: 'Input', path: '/components/input', description: 'Text input field with various types' },
  { name: 'Label', path: '/components/label', description: 'Label component for form inputs' },
  { name: 'Skeleton', path: '/components/skeleton', description: 'Loading skeleton for better UX' },
  { name: 'Switch', path: '/components/switch', description: 'Toggle switch for boolean values' },
]

export function Home() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">shadcn/ui Components</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A collection of beautifully designed, accessible components built with React and Tailwind CSS.
        </p>
      </div>

      {/* Success Alert */}
      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          All 9 priority components have been successfully installed and are ready to use.
        </AlertDescription>
      </Alert>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Components Installed</CardDescription>
            <CardTitle className="text-4xl">9</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Priority Batch #1</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Components Remaining</CardDescription>
            <CardTitle className="text-4xl">51</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">More to come</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Code Connect</CardDescription>
            <CardTitle className="text-4xl">✅</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Figma integration active</p>
          </CardContent>
        </Card>
      </div>

      {/* Components Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Installed Components</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {installedComponents.map((component) => (
            <Link key={component.path} to={component.path}>
              <Card className="h-full transition-colors hover:bg-accent cursor-pointer">
                <CardHeader>
                  <CardTitle>{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
          <CardDescription>Built with modern tools and best practices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• React 18 with TypeScript</li>
                <li>• Vite for fast development</li>
                <li>• React Router for navigation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Styling</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Tailwind CSS v3</li>
                <li>• Tailwind Slate color palette</li>
                <li>• CSS variables for theming</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Components</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• shadcn/ui component library</li>
                <li>• Radix UI primitives</li>
                <li>• Accessible by default</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Integration</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Figma Code Connect</li>
                <li>• GitHub version control</li>
                <li>• Design system tokens</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

