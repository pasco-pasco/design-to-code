import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CheckboxPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-base text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Checkbox</CardTitle>
          <CardDescription>Checkbox with label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              Accept terms and conditions
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Checkboxes</CardTitle>
          <CardDescription>List of checkbox options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter" className="cursor-pointer">
              Subscribe to newsletter
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="updates" />
            <Label htmlFor="updates" className="cursor-pointer">
              Receive product updates
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="cursor-pointer">
              Allow marketing communications
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled Checkbox</CardTitle>
          <CardDescription>Checkbox in disabled state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="text-muted-foreground">
              Disabled option
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked" className="text-muted-foreground">
              Disabled and checked
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

