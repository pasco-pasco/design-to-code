import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function SwitchPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Switch</h1>
        <p className="text-base text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Switch</CardTitle>
          <CardDescription>Switch with label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="cursor-pointer">
              Airplane Mode
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Switches</CardTitle>
          <CardDescription>List of switch options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="cursor-pointer">
              Push Notifications
            </Label>
            <Switch id="notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="location" className="cursor-pointer">
              Location Services
            </Label>
            <Switch id="location" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="analytics" className="cursor-pointer">
              Analytics
            </Label>
            <Switch id="analytics" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing" className="cursor-pointer">
              Marketing Emails
            </Label>
            <Switch id="marketing" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled Switch</CardTitle>
          <CardDescription>Switch in disabled state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="disabled" disabled />
            <Label htmlFor="disabled" className="text-muted-foreground">
              Disabled switch
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked" className="text-muted-foreground">
              Disabled and checked
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

