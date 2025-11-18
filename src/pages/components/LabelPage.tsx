import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function LabelPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Label</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Renders an accessible label associated with controls.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Label</CardTitle>
          <CardDescription>Label with input</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Label with Checkbox</CardTitle>
          <CardDescription>Label associated with checkbox</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" />
            <Label htmlFor="terms2" className="cursor-pointer">
              I accept the terms and conditions
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Form with Multiple Labels</CardTitle>
          <CardDescription>Complete form example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email2">Email Address</Label>
            <Input id="email2" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Your message here..." />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

