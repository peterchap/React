'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditApplication } from '@/types'

export default function CreditsPage() {
  const [credits, setCredits] = useState<CreditApplication[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch('/api/credits')
        const data = await response.json()
        setCredits(data.credits || [])
      } catch (error) {
        console.error('Failed to fetch credits:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCredits()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Credit Applications</h1>
        <div>Loading credit applications...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Credit Applications</h1>
        <Button>New Application</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {credits.map((credit) => (
          <Card key={credit.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Application #{credit.id}</span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(credit.status)}`}>
                  {credit.status}
                </span>
              </CardTitle>
              <CardDescription>
                {credit.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Customer ID:</span>
                  <span className="font-medium">{credit.customerId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Amount:</span>
                  <span className="font-medium text-lg">${credit.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Applied:</span>
                  <span className="font-medium">
                    {new Date(credit.appliedAt).toLocaleDateString()}
                  </span>
                </div>
                {credit.appliedAt && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Reviewed:</span>
                    <span className="font-medium">
                      {new Date(credit.appliedAt).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="outline">View Details</Button>
                {credit.status === 'pending' && (
                  <>
                    <Button size="sm" variant="default">Approve</Button>
                    <Button size="sm" variant="destructive">Reject</Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}