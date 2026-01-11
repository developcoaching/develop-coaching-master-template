# Getting Started Checklist

Use this checklist when creating a new project from this template.

## Initial Setup (Do Once)

- [ ] Clone your new repository
- [ ] Update `package.json` (name and description)
- [ ] Update `CLAUDE.md` (project description and repo URL)
- [ ] Update `README.md` (replace [Project Name])
- [ ] Run `npm install`
- [ ] Open in Claude Code and run `/pm:init`

## Start Building

- [ ] Run `/pm:prd-new your-feature-name`
- [ ] Answer the PRD questions
- [ ] Review the generated PRD in `docs/prds/`
- [ ] Ask Claude to implement based on the PRD
- [ ] Reference brand guidelines in `.claude/context/brand-guidelines.md`

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm test         # Run tests
npm run lint     # Lint code
```

## CCPM Commands (in Claude Code)

```
/pm:init                    # Verify CCPM setup
/pm:prd-new feature-name    # Create new PRD
```

## Brand Colors (Quick Reference)

- Yellow: `#fdce36`
- Orange: `#fbaa35`
- Blue: `#0069b1`
- Dark Grey: `#414042`
- Cool Grey: `#d2d2d2`

## Next Steps

1. Create your first feature PRD
2. Build with Claude Code
3. Keep PRDs updated as you add features
4. Reference brand guidelines for UI consistency

---

**Need Help?**
- Brand Guidelines: `.claude/context/brand-guidelines.md`
- Company Info: `.claude/context/company-info.md`
- Full README: `README.md`
