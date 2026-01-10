export default {
  name: 'prd-new',
  description: 'Create a new Product Requirements Document',
  prompt: `You are helping create a new Product Requirements Document (PRD) for a Develop Coaching project.

**Context:**
- Read .claude/context/brand-guidelines.md for brand colors, fonts, and style
- Read .claude/context/company-info.md for company background
- This is a construction business coaching tool for UK and Australian markets

**Your task:**

1. Ask the user for:
   - Feature name (if not provided in command)
   - Brief description of what they want to build
   - Target users (business owners, coaches, both?)
   - Key requirements

2. Create a PRD file at: docs/prds/[feature-name]-prd.md

3. The PRD should include:
   - **Feature Name**
   - **Overview** - What problem does this solve?
   - **Target Users** - Who is this for?
   - **User Stories** - As a [user], I want [goal], so that [benefit]
   - **Requirements**
     - Functional requirements
     - Non-functional requirements (performance, accessibility, etc.)
   - **Design Guidelines**
     - Reference brand colors from brand-guidelines.md
     - UI/UX considerations
   - **Technical Considerations**
     - Tech stack recommendations
     - API requirements
     - Data storage needs
   - **Success Metrics** - How will we measure success?
   - **Out of Scope** - What we're NOT building

4. After creating the PRD, offer to:
   - Create initial file structure
   - Set up basic components
   - Start development

**Brand Integration:**
Always reference the Develop Coaching brand guidelines when suggesting UI elements, color schemes, or design patterns.`,
};
