import { Button } from '@/components/ui/button'
import { ButtonField } from '@/components/ui/button-field'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ButtonPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-base text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      {/* ButtonField - Matches Figma Component */}
      <Card>
        <CardHeader>
          <CardTitle>ButtonField (Figma Component)</CardTitle>
          <CardDescription>Enhanced button with icons and loading states - matches Figma design</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Usage */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Basic Usage</h4>
            <div className="flex flex-wrap gap-4">
              <ButtonField label="Click me" />
              <ButtonField label="Secondary" variant="secondary" />
              <ButtonField label="Outline" variant="outline" />
              <ButtonField label="Destructive" variant="destructive" />
            </div>
          </div>

          {/* With Icons */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">With Icons</h4>
            <div className="flex flex-wrap gap-4">
              <ButtonField 
                label="Leading Icon" 
                leadingIcon={<span>📧</span>}
              />
              <ButtonField 
                label="Trailing Icon" 
                trailingIcon={<span>→</span>}
              />
              <ButtonField 
                label="Both Icons" 
                leadingIcon={<span>💾</span>}
                trailingIcon={<span>✓</span>}
                variant="secondary"
              />
            </div>
          </div>

          {/* Loading States */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Loading States</h4>
            <div className="flex flex-wrap gap-4">
              <ButtonField label="Loading" loading />
              <ButtonField label="Saving..." loading variant="secondary" />
              <ButtonField label="Processing" loading variant="outline" />
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Sizes</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonField label="Small" size="sm" leadingIcon={<span>⚡</span>} />
              <ButtonField label="Default" leadingIcon={<span>⚡</span>} />
              <ButtonField label="Large" size="lg" leadingIcon={<span>⚡</span>} />
            </div>
          </div>

          {/* Full Width */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Full Width</h4>
            <ButtonField 
              label="Full Width Button" 
              fullWidth
              trailingIcon={<span>→</span>}
            />
            <ButtonField 
              label="Full Width Secondary" 
              fullWidth
              variant="secondary"
              leadingIcon={<span>🔍</span>}
            />
          </div>

          {/* Disabled States */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Disabled States</h4>
            <div className="flex flex-wrap gap-4">
              <ButtonField label="Disabled" disabled />
              <ButtonField 
                label="Disabled with Icon" 
                disabled 
                leadingIcon={<span>🔒</span>}
              />
            </div>
          </div>
        </CardContent>
      </Card>

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

