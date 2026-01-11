# [Project Name]

> Template created from develop-coaching-master-template

**→ See [GETTING-STARTED.md](GETTING-STARTED.md) for a simple checklist!**

## Quick Start

### After Creating from Template:

**Step 1: Clone Your New Repository**
```bash
git clone https://github.com/YOUR-USERNAME/your-new-project.git
cd your-new-project
```

**Step 2: Update Project Details**

Edit `package.json`:
- Change `"name"` from `"project-name-changeme"` to your project name
- Update `"description"` with your project description

Edit `CLAUDE.md`:
- Replace `[Update this with your project description]` with your project details
- Update repository URL to your new repo

Edit this `README.md`:
- Replace `[Project Name]` with your actual project name
- Update project-specific details

**Step 3: Verify CCPM Setup**

Open your project in Claude Code and run:
```
/pm:init
```

This verifies all CCPM files are in place and working.

**Step 4: Create Your First Feature**

Plan your first feature with a PRD:
```
/pm:prd-new feature-name
```

Answer the prompts to create a comprehensive Product Requirements Document.

**Step 5: Install Dependencies & Start Coding**
```bash
npm install
npm run dev
```

Your project will be running at `http://localhost:3000`

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

## CCPM Workflow

This template includes Claude Code Project Manager (CCPM) for PRD-driven development.

### Commands:

- `/pm:init` - Verify CCPM setup (run once after cloning)
- `/pm:prd-new [feature-name]` - Create a new PRD

### Typical Development Workflow:

1. **Plan**: `/pm:prd-new my-feature` - Create PRD for your feature
2. **Review**: Review the generated PRD in `docs/prds/my-feature-prd.md`
3. **Build**: Ask Claude to implement based on the PRD
4. **Test**: Verify functionality and brand consistency
5. **Commit**: Commit your changes
6. **Repeat**: Start next feature with new PRD

### Why Use PRDs?

- **Clarity**: Clear requirements before coding
- **Brand Consistency**: PRDs reference brand guidelines automatically
- **Documentation**: Built-in project documentation
- **Communication**: Share plans with stakeholders

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
