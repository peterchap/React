# Deployment Guide - Customer Credit Portal

## Quick Deploy to Vercel

### 1. Prerequisites
- Vercel account
- PostgreSQL database (Vercel Postgres, Supabase, or other)
- GitHub repository

### 2. One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/customer-credit-portal)

### 3. Manual Deployment Steps

#### Step 1: Prepare Database
1. Set up PostgreSQL database (recommended: Vercel Postgres)
2. Note the connection string

#### Step 2: Environment Variables
Set these in Vercel dashboard:

```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database

# NextAuth
NEXTAUTH_SECRET=your-very-secure-random-string-here
NEXTAUTH_URL=https://your-app.vercel.app

# OAuth Providers (Optional - for authentication)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MICROSOFT_CLIENT_ID=your-microsoft-client-id
MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
```

#### Step 3: Deploy
```bash
# Via Vercel CLI
npm i -g vercel
vercel --prod

# Or connect GitHub repo to Vercel dashboard
```

## Database Migration

After deployment, run database migrations:

```bash
# Install Drizzle Kit
npm install -g drizzle-kit

# Generate and push schema
drizzle-kit push:pg --config=drizzle.config.ts
```

## Production Checklist

- [ ] Database configured and accessible
- [ ] Environment variables set
- [ ] OAuth providers configured (if using auth)
- [ ] Domain configured (if custom domain)
- [ ] SSL certificate active
- [ ] Database migrations run
- [ ] Application tested in production

## Monitoring & Maintenance

### Vercel Analytics
- Enable Vercel Analytics in dashboard
- Monitor performance and usage

### Database Monitoring
- Set up database monitoring
- Configure backup strategy
- Monitor connection limits

### Error Tracking
Consider integrating:
- Sentry for error tracking
- Vercel Analytics for performance
- Database monitoring tools

## Scaling Considerations

### Database
- Use connection pooling (built into Drizzle config)
- Consider read replicas for high traffic
- Implement proper indexing

### API Routes
- Implement rate limiting
- Add caching where appropriate
- Monitor API performance

### Frontend
- Leverage Next.js static generation
- Implement proper error boundaries
- Optimize images and assets

## Security

### Production Security Checklist
- [ ] Environment variables secured
- [ ] Database access restricted
- [ ] HTTPS enforced
- [ ] Rate limiting implemented
- [ ] Input validation in place
- [ ] OAuth callbacks secured
- [ ] Session security configured

## Troubleshooting

### Common Issues

**Build Failures:**
- Check TypeScript errors
- Verify all imports
- Ensure environment variables available at build time

**Database Connection:**
- Verify DATABASE_URL format
- Check network access from Vercel
- Confirm database is running

**Authentication Issues:**
- Verify OAuth callback URLs
- Check NEXTAUTH_URL matches deployment URL
- Confirm OAuth provider settings

### Support Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team/)
- [NextAuth.js Docs](https://next-auth.js.org/)