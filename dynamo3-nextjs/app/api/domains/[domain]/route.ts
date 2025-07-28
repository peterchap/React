import { NextRequest, NextResponse } from 'next/server';

interface RouteParams {
  params: Promise<{ domain: string }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { domain } = await params;

    // In a real application, this would connect to a database
    // or external API to fetch domain information
    // For now, we'll return mock data or proxy to the external API
    
    if (!domain) {
      return NextResponse.json(
        { error: 'Domain parameter is required' },
        { status: 400 }
      );
    }

    // Proxy to the external API (same as the original React app)
    try {
      const apiUrl = `https://gktm4kzdw7.execute-api.eu-west-1.amazonaws.com/domains/${domain}`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('External API request failed');
      }
      
      const data = await response.json();
      
      return NextResponse.json(data);
    } catch {
      // Return mock data if external API fails
      return NextResponse.json({
        name: domain,
        domain: domain,
        create_date: '2024-01-01',
        domain_age: '1 year',
        Country: 'Unknown',
        A: '0.0.0.0',
        ns: 'ns1.example.com',
        nsdomain: 'example.com',
        tld: domain.split('.').pop() || 'com',
        ip_quality: 'Unknown',
        domain_quality: 'Unknown',
        mailbox_provider: 'Unknown',
        'provider type': 'Unknown',
        industry: 'Unknown',
        mx: 'mail.example.com',
        mxdomain: 'example.com',
        spf: 'Unknown',
        mail: 'Unknown',
        www: 'Unknown',
        ptr: 'Unknown',
        parked: 'Unknown',
        language: 'Unknown',
        title: 'Domain Information',
        description: 'Mock domain data',
        risk_level: 'Low'
      });
    }
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}