import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function Layout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-[220px]">
        <div className="container mx-auto max-w-5xl px-8 py-10 md:px-12 md:py-12">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
