# [Project Name]

> Template created from develop-coaching-master-template

## Quick Start

1. Update `CLAUDE.md` with repository URL
2. Update `package.json` name and description
3. Update this README with project details
4. Run `/pm:init` to verify CCPM setup
5. Create your first PRD: `/pm:prd-new [feature-name]`

## Develop Coaching Project

Part of the Develop Coaching suite of tools for UK and Australian construction business owners.

Brand guidelines and company info available in `.claude/context/`

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS (configured with Develop Coaching brand colors)
- **Package Manager**: npm

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## CCPM Commands

This template includes Claude Code Project Manager (CCPM) for PRD-driven development:

- `/pm:init` - Verify CCPM setup
- `/pm:prd-new [feature-name]` - Create a new PRD

## Project Structure

```
.
├── .claude/
│   ├── context/
│   │   ├── brand-guidelines.md
│   │   └── company-info.md
│   └── skills/
│       ├── pm.mjs
│       ├── init.mjs
│       └── prd-new.mjs
├── docs/
│   └── prds/              # Product Requirements Documents
├── CLAUDE.md              # Claude Code instructions
├── package.json
└── README.md
```

## Brand Guidelines

See `.claude/context/brand-guidelines.md` for:
- Brand colors (Yellow: #fdce36, Orange: #fbaa35, Blue: #0069b1)
- Typography (Source Sans Pro)
- Logo usage
- Design principles

## License

Private - Develop Coaching

## Contact

- Email: greg@developcoaching.co.uk
- Phone: 0208 610 9674
