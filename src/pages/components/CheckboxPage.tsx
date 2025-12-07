import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxField } from '@/components/ui/checkbox-field'
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

      {/* CheckboxField - Matches Figma Component */}
      <Card>
        <CardHeader>
          <CardTitle>CheckboxField (Figma Component)</CardTitle>
          <CardDescription>Complete checkbox with label and description - matches Figma design</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Default variant */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Default Variant</h4>
            <CheckboxField
              label="Checkbox Text"
              description="This is a checkbox description."
            />
            <CheckboxField
              label="Checked by default"
              description="This checkbox starts checked."
              defaultChecked
            />
          </div>

          {/* Control Placement */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Control Placement</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <CheckboxField
                label="Control Start"
                description="Checkbox on the left side."
                controlPlacement="start"
              />
              <CheckboxField
                label="Control End"
                description="Checkbox on the right side."
                controlPlacement="end"
              />
            </div>
          </div>

          {/* Box Variant */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Box Variant</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <CheckboxField
                variant="box"
                label="Box Style"
                description="Card-style checkbox container."
              />
              <CheckboxField
                variant="box"
                label="Box Checked"
                description="Checked state with border highlight."
                defaultChecked
              />
            </div>
          </div>

          {/* Box Variant with Control Placement */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Box Variant + Placement</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <CheckboxField
                variant="box"
                controlPlacement="start"
                label="Box Start"
                description="Box with checkbox on the left."
              />
              <CheckboxField
                variant="box"
                controlPlacement="end"
                label="Box End"
                description="Box with checkbox on the right."
              />
            </div>
          </div>

          {/* Disabled States */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Disabled States</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <CheckboxField
                label="Disabled unchecked"
                description="Cannot interact with this checkbox."
                disabled
              />
              <CheckboxField
                label="Disabled checked"
                description="Disabled but checked state."
                disabled
                defaultChecked
              />
            </div>
          </div>

          {/* Label Only */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Label Only (No Description)</h4>
            <CheckboxField
              label="Simple checkbox with label only"
              showDescription={false}
            />
          </div>
        </CardContent>
      </Card>

      {/* Original Checkbox Primitive */}
      <Card>
        <CardHeader>
          <CardTitle>Checkbox Primitive</CardTitle>
          <CardDescription>Basic checkbox without wrapper - for custom layouts</CardDescription>
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

      {/* Multiple Checkboxes */}
      <Card>
        <CardHeader>
          <CardTitle>Multiple Checkboxes</CardTitle>
          <CardDescription>List of checkbox options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CheckboxField
            label="Subscribe to newsletter"
            description="Get weekly updates about new features."
          />
          <CheckboxField
            label="Receive product updates"
            description="Be the first to know about product changes."
          />
          <CheckboxField
            label="Allow marketing communications"
            description="We'll send you promotional offers occasionally."
          />
        </CardContent>
      </Card>

      {/* Selection Cards (Box Variant Use Case) */}
      <Card>
        <CardHeader>
          <CardTitle>Selection Cards</CardTitle>
          <CardDescription>Box variant for feature selection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CheckboxField
            variant="box"
            label="Email notifications"
            description="Receive email alerts for important updates."
            defaultChecked
          />
          <CheckboxField
            variant="box"
            label="Push notifications"
            description="Get instant notifications on your device."
          />
          <CheckboxField
            variant="box"
            label="SMS notifications"
            description="Receive text messages for critical alerts."
          />
        </CardContent>
      </Card>
    </div>
  )
}
