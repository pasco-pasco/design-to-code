import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      {/* Default Variant */}
      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>The default button variant</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </CardContent>
      </Card>

      {/* Secondary Variant */}
      <Card>
        <CardHeader>
          <CardTitle>Secondary</CardTitle>
          <CardDescription>Secondary button variant</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="lg">Large</Button>
        </CardContent>
      </Card>

      {/* Destructive Variant */}
      <Card>
        <CardHeader>
          <CardTitle>Destructive</CardTitle>
          <CardDescription>For dangerous or destructive actions</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive" size="sm">Delete</Button>
          <Button variant="destructive" size="lg">Remove</Button>
        </CardContent>
      </Card>

      {/* Outline Variant */}
      <Card>
        <CardHeader>
          <CardTitle>Outline</CardTitle>
          <CardDescription>Outlined button variant</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="outline">Outline</Button>
          <Button variant="outline" size="sm">Small</Button>
          <Button variant="outline" size="lg">Large</Button>
        </CardContent>
      </Card>

      {/* Ghost Variant */}
      <Card>
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
          <CardDescription>Subtle button variant</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="ghost">Ghost</Button>
          <Button variant="ghost" size="sm">Small</Button>
          <Button variant="ghost" size="lg">Large</Button>
        </CardContent>
      </Card>

      {/* Link Variant */}
      <Card>
        <CardHeader>
          <CardTitle>Link</CardTitle>
          <CardDescription>Styled as a link</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="link">Link Button</Button>
          <Button variant="link" size="sm">Small Link</Button>
          <Button variant="link" size="lg">Large Link</Button>
        </CardContent>
      </Card>

      {/* Icon Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Icon Buttons</CardTitle>
          <CardDescription>Buttons with icon size</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 items-center">
          <Button size="icon">🔍</Button>
          <Button variant="secondary" size="icon">⚙️</Button>
          <Button variant="outline" size="icon">📎</Button>
          <Button variant="ghost" size="icon">❤️</Button>
        </CardContent>
      </Card>

      {/* Code Connect Info */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle>✅ Figma Code Connect</CardTitle>
          <CardDescription>This component is connected to Figma</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            All 186 Button variants are mapped to Figma. Open Figma Dev Mode and select any Button variant to see the React code.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

