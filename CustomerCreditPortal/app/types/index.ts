export interface User {
  id: number
  email: string
  name: string
  image?: string
  emailVerified?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Customer {
  id: number
  userId?: number
  name: string
  email: string
  phone?: string
  address?: string
  creditLimit: number
  currentBalance: number
  status: 'active' | 'inactive' | 'suspended'
  createdAt: Date
  updatedAt: Date
}

export interface CreditApplication {
  id: number
  customerId: number
  amount: number
  type: 'new_application' | 'credit_increase' | 'credit_renewal'
  status: 'pending' | 'approved' | 'rejected' | 'under_review'
  reason?: string
  appliedAt: Date
  reviewedAt?: Date
  reviewedBy?: number
  notes?: string
}

export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

export interface AuthSession {
  user: {
    id: string
    email: string
    name: string
    image?: string
  }
  expires: string
}