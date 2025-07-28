export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to Customer Credit Portal</h2>
        <p className="text-muted-foreground mb-4">
          This is a Next.js application built for Vercel deployment with PostgreSQL integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded border p-4">
            <h3 className="font-medium mb-2">Credit Management</h3>
            <p className="text-sm text-muted-foreground">
              Manage customer credit lines and applications.
            </p>
          </div>
          <div className="rounded border p-4">
            <h3 className="font-medium mb-2">Customer Portal</h3>
            <p className="text-sm text-muted-foreground">
              Customer access to credit information and services.
            </p>
          </div>
          <div className="rounded border p-4">
            <h3 className="font-medium mb-2">Authentication</h3>
            <p className="text-sm text-muted-foreground">
              Secure OAuth authentication with multiple providers.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Technical Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="font-medium">Frontend</div>
            <div className="text-muted-foreground">Next.js 14+</div>
            <div className="text-muted-foreground">React</div>
            <div className="text-muted-foreground">TypeScript</div>
          </div>
          <div>
            <div className="font-medium">Styling</div>
            <div className="text-muted-foreground">Tailwind CSS</div>
            <div className="text-muted-foreground">shadcn/ui</div>
          </div>
          <div>
            <div className="font-medium">Database</div>
            <div className="text-muted-foreground">PostgreSQL</div>
            <div className="text-muted-foreground">Drizzle ORM</div>
          </div>
          <div>
            <div className="font-medium">Deployment</div>
            <div className="text-muted-foreground">Vercel</div>
            <div className="text-muted-foreground">Serverless</div>
          </div>
        </div>
      </div>
    </div>
  )
}