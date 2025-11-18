import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Card</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a card with header, content, and footer.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content. This is where your main content goes.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Setup</CardTitle>
            <CardDescription>Deploy your new project in one-click</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your project is now ready to be deployed. Click the button below to deploy.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm">Your call has been confirmed.</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm">You have a new message!</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm">Your subscription is expiring soon!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View your analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Users</span>
                <span className="font-bold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Active Sessions</span>
                <span className="font-bold">456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Bounce Rate</span>
                <span className="font-bold">23%</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Details</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

