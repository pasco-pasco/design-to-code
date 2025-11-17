import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

function App() {
  const [switchChecked, setSwitchChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            shadcn/ui Components Demo
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Priority Batch #1 - 9 Components Installed ✅
          </p>
        </div>

        {/* Alerts Section */}
        <div className="mb-8 space-y-4">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              All 9 priority components have been successfully installed and are ready to use.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Alert Component</AlertTitle>
            <AlertDescription>
              This is a destructive alert variant. Great for error messages!
            </AlertDescription>
          </Alert>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Button Card */}
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>Click the buttons below</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">Default Button</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
              <Button variant="outline" className="w-full">Outline</Button>
              <Button variant="ghost" className="w-full">Ghost</Button>
              <Button variant="destructive" className="w-full">Destructive</Button>
            </CardContent>
          </Card>

          {/* Input & Label Card */}
          <Card>
            <CardHeader>
              <CardTitle>Input & Label</CardTitle>
              <CardDescription>Form input components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </CardContent>
          </Card>

          {/* Checkbox & Switch Card */}
          <Card>
            <CardHeader>
              <CardTitle>Checkbox & Switch</CardTitle>
              <CardDescription>Toggle components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={checkboxChecked}
                  onCheckedChange={(checked) => setCheckboxChecked(checked as boolean)}
                />
                <Label htmlFor="terms" className="cursor-pointer">
                  Accept terms and conditions
                </Label>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Enable notifications</Label>
                <Switch 
                  id="notifications"
                  checked={switchChecked}
                  onCheckedChange={setSwitchChecked}
                />
              </div>

              <div className="text-sm text-slate-600 dark:text-slate-400">
                Checkbox: {checkboxChecked ? '✅' : '❌'}<br />
                Switch: {switchChecked ? '✅' : '❌'}
              </div>
            </CardContent>
          </Card>

          {/* Dialog Card */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialogs</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Component</DialogTitle>
                    <DialogDescription>
                      This is a modal dialog component. Great for forms, confirmations, and more!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="dialog-input">Example Input</Label>
                      <Input id="dialog-input" placeholder="Type something..." />
                    </div>
                    <Button className="w-full">Submit</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Card Component Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>This is the card you're looking at!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Cards are versatile containers for grouping related content. They include:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                <li>CardHeader</li>
                <li>CardTitle</li>
                <li>CardDescription</li>
                <li>CardContent</li>
                <li>CardFooter</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Card Footer Button</Button>
            </CardFooter>
          </Card>

          {/* Skeleton Card */}
          <Card>
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
              <CardDescription>Loading states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-20 w-full rounded-md" />
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Component List */}
        <Card>
          <CardHeader>
            <CardTitle>Installed Components (9/60)</CardTitle>
            <CardDescription>Priority Batch #1 Complete</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Button', 'Input', 'Label', 'Card', 'Checkbox', 'Switch', 'Dialog', 'Alert', 'Skeleton'].map((component) => (
                <div key={component} className="flex items-center space-x-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>{component}</span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              🎉 Ready to install more components or generate custom ones from Figma!
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default App
