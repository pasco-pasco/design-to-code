import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Input</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a form input field or a component that looks like an input field.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Input</CardTitle>
          <CardDescription>Standard text input</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text">Text</Label>
            <Input id="text" placeholder="Enter text" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Input Types</CardTitle>
          <CardDescription>Different input types with labels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">Number</Label>
            <Input id="number" type="number" placeholder="123" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <Input id="search" type="search" placeholder="Search..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input id="url" type="url" placeholder="https://example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Input with disabled attribute</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled Input</Label>
            <Input id="disabled" placeholder="Disabled" disabled />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

