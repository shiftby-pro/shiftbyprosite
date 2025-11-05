# GitHub Configuration

This directory contains GitHub-specific configurations for the shiftbyprosite repository.

## Overview

This repository is configured with:
- ✅ CodeQL security scanning
- ✅ Automated code review
- ✅ GitHub Copilot integration
- ✅ Multi-environment deployment (dev, qa, production)
- ✅ Branch protection rulesets

## Workflows

### CodeQL Analysis (`workflows/codeql.yml`)
Automated security scanning that runs:
- On push to main, dev, and qa branches
- On pull requests to main, dev, and qa branches
- Weekly on Mondays at midnight (scheduled scan)

### Code Review (`workflows/code-review.yml`)
Automated code review that runs on pull requests to provide:
- File change summaries
- Automated review comments
- PR validation

### Deployment (`workflows/deploy.yml`)
Automated deployment workflow for:
- **Development**: Auto-deploys on push to `dev` branch
- **QA**: Auto-deploys on push to `qa` branch
- **Production**: Auto-deploys on push to `main` branch
- Manual deployment via workflow dispatch

## Environments

Three environments are configured:

### Development (`environments/dev.md`)
- Branch: `dev`
- Purpose: Active development and integration testing
- Access: All developers
- Approval: Not required

### QA (`environments/qa.md`)
- Branch: `qa`
- Purpose: Quality assurance and pre-production testing
- Access: QA team and developers
- Approval: Required from QA team

### Production (`environments/production.md`)
- Branch: `main`
- Purpose: Live production environment
- Access: Operations team only
- Approval: Required from multiple reviewers (2 approvals)

## Branch Protection Rulesets

Rulesets are documented in `RULESETS.md`. To apply them:

1. Navigate to Repository Settings → Rules → Rulesets
2. Create new branch rulesets for each environment
3. Use the JSON configurations provided in RULESETS.md

### Dev Branch Rules
- No approval required (solo developer)
- CodeQL must pass
- Code Review must pass

### QA Branch Rules
- No approval required (solo developer)
- CodeQL and Code Review must pass

### Main Branch Rules
- 2 approving reviews required
- Code owner review required
- Last push approval required
- CodeQL and Code Review must pass
- Deletion protection enabled

## GitHub Copilot

GitHub Copilot is enabled for this repository. See `copilot-config.md` for details.

Features available:
- Code completions
- AI-powered suggestions
- Copilot Chat
- Pull request summaries
- Automated code reviews

## Getting Started

### For Developers

1. Create a feature branch from `dev`:
   ```bash
   git checkout dev
   git pull
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit

3. Create a pull request to `dev` branch

4. Wait for CodeQL and Code Review checks to pass

5. Get approval from a reviewer

6. Merge to `dev`

### For QA

1. When ready for QA testing, create a PR from `dev` to `qa`

2. All checks must pass

3. QA team reviews and approves

4. Merge to `qa` for QA environment deployment

### For Production Release

1. When QA testing is complete, create a PR from `qa` to `main`

2. All checks must pass

3. Requires 2 approvals including code owner

4. Merge to `main` for production deployment

## Security

- CodeQL scans run automatically on all branches
- Security alerts are reported in the Security tab
- All dependencies are scanned for vulnerabilities

## Support

For issues or questions about the GitHub configuration, please contact the DevOps team.
