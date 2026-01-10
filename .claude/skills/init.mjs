export default {
  name: 'init',
  description: 'Initialize CCPM setup and verify configuration',
  prompt: `You are helping initialize the Claude Code Project Manager (CCPM) for this repository.

**Your task:**

1. Verify the following files exist:
   - .claude/skills/pm.mjs
   - .claude/skills/init.mjs
   - .claude/skills/prd-new.mjs
   - .claude/context/brand-guidelines.md
   - .claude/context/company-info.md
   - CLAUDE.md

2. Check CLAUDE.md contains:
   - Repository URL
   - Project description
   - Link to brand guidelines

3. Display a summary:
   ✓ Files found
   ✗ Missing files

4. If everything is set up correctly, confirm:
   "CCPM is ready! Use /pm:prd-new [feature-name] to create your first PRD."

5. If files are missing, offer to create them.`,
};
