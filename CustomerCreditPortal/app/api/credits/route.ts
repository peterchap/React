import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // This would typically fetch from database
    const credits = [
      {
        id: 1,
        customerId: 1,
        amount: 5000,
        type: 'credit_increase',
        status: 'approved',
        appliedAt: '2024-01-15T10:00:00Z',
        approvedAt: '2024-01-16T14:30:00Z'
      },
      {
        id: 2,
        customerId: 2,
        amount: 7500,
        type: 'new_application',
        status: 'pending',
        appliedAt: '2024-01-20T09:15:00Z'
      }
    ]

    return NextResponse.json({ credits })
  } catch (error) {
    console.error('Credits API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch credits' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // This would typically save to database
    const newCredit = {
      id: Date.now(),
      ...body,
      status: 'pending',
      appliedAt: new Date().toISOString()
    }

    return NextResponse.json({ credit: newCredit }, { status: 201 })
  } catch (error) {
    console.error('Create Credit API Error:', error)
    return NextResponse.json(
      { error: 'Failed to create credit application' },
      { status: 500 }
    )
  }
}