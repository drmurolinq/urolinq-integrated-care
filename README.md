# Urolinq Integrated Care

Minimal Next.js scaffold for Urolinq Integrated Care with Claude (Anthropic) CLI and Vercel-ready configuration.

This repository is a starting point. It includes:

- A Next.js App Router scaffold (app/)
- A serverless API route at /api/claude to proxy requests to Anthropic (Claude) — configurable via environment variables
- A small CLI tool (scripts/cli.js) that calls Anthropic directly using ANTHROPIC_API_KEY
- Vercel deployment guidance and an example vercel.json

Security notes
- Never commit API keys. Use Vercel Environment Variables or a local .env file (kept out of git).
- Monitor usage and costs for Claude/Anthropic.

Quick start (local):

1. Install dependencies:

```bash
npm install
```

2. Create a local .env file (or use environment variables):

```env
ANTHROPIC_API_KEY=your_api_key_here
ANTHROPIC_MODEL=claude-2
ANTHROPIC_API_URL=https://api.anthropic.com/v1/complete
```

3. Run the Next.js development server:

```bash
npm run dev
```

4. Use the CLI tool:

```bash
npm run cli -- "Explain the concept of integrated care in one paragraph."
```

Deployment (Vercel):
- Create a Vercel project from this repo and add the same environment variables in the Vercel dashboard.
- Vercel will detect Next.js automatically and deploy from the main branch.

Environment variables (required):
- ANTHROPIC_API_KEY — Claude/Anthropic API key
- ANTHROPIC_MODEL — model name (optional, default: claude-2)
- ANTHROPIC_API_URL — API base URL (optional, default: https://api.anthropic.com/v1/complete)

See the CLI and API implementation for example usage of the API.
