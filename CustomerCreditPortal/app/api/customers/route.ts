import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // This would typically fetch from database
    const customers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        creditLimit: 10000,
        currentBalance: 2500,
        status: 'active'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        creditLimit: 15000,
        currentBalance: 5000,
        status: 'active'
      }
    ]

    return NextResponse.json({ customers })
  } catch (error) {
    console.error('Customers API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // This would typically save to database
    const newCustomer = {
      id: Date.now(),
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({ customer: newCustomer }, { status: 201 })
  } catch (error) {
    console.error('Create Customer API Error:', error)
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 500 }
    )
  }
}