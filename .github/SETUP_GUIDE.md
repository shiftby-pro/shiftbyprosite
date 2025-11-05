# Repository Setup Guide

This guide will help you complete the setup of the shiftbyprosite repository with all required configurations.

## Overview

This repository has been configured with:
- ✅ CodeQL security scanning workflow
- ✅ Automated code review workflow  
- ✅ Multi-environment deployment workflow
- ✅ GitHub Copilot configuration
- ✅ Branch protection ruleset documentation

## Prerequisites

- Repository admin access
- GitHub Advanced Security enabled (for CodeQL)
- GitHub Copilot license (for Copilot features)

## Step-by-Step Setup

### Step 1: Create Required Branches

The repository needs three main branches:

```bash
# From the main branch, create dev branch
git checkout -b dev
git push origin dev

# Create qa branch from dev
git checkout -b qa
git push origin qa

# Return to main
git checkout main
```

### Step 2: Configure GitHub Environments

Environments need to be created manually in GitHub:

1. Go to **Settings → Environments**
2. Click **New environment**

#### Create "development" environment:
- Name: `development`
- Environment URL: `https://dev.shiftbypro.com` (optional)
- No protection rules needed

#### Create "qa" environment:
- Name: `qa`
- Environment URL: `https://qa.shiftbypro.com` (optional)
- Protection rules:
  - ✅ Required reviewers: Add QA team members (at least 1)
  - ✅ Wait timer: 0 minutes

#### Create "production" environment:
- Name: `production`
- Environment URL: `https://shiftbypro.com` (optional)
- Protection rules:
  - ✅ Required reviewers: Add operations team members (at least 2)
  - ✅ Wait timer: 0 minutes
  - ✅ Restrict to selected branches: only `main`

### Step 3: Apply Branch Protection Rulesets

Branch rulesets provide fine-grained control over branch protection:

1. Go to **Settings → Rules → Rulesets**
2. Click **New ruleset → New branch ruleset**

#### For Dev Branch:
- Ruleset name: `Dev Branch Protection`
- Enforcement status: Active
- Target branches: `dev`
- Rules to enable:
  - ✅ Require status checks to pass
    - Add: `CodeQL`
    - Add: `Code Review / Automated Code Review`
    - Require branches to be up to date before merging

#### For QA Branch:
- Ruleset name: `QA Branch Protection`
- Enforcement status: Active
- Target branches: `qa`
- Rules to enable:
  - ✅ Require status checks to pass
    - Add: `CodeQL`
    - Add: `Code Review / Automated Code Review`
    - Require branches to be up to date before merging

#### For Main Branch:
- Ruleset name: `Main Branch Protection`
- Enforcement status: Active
- Target branches: `main`
- Rules to enable:
  - ✅ Require a pull request before merging
    - Required approvals: 2
    - Dismiss stale pull request approvals when new commits are pushed
    - Require review from Code Owners
    - Require approval of the most recent reviewable push
  - ✅ Require status checks to pass
    - Add: `CodeQL`
    - Add: `Code Review / Automated Code Review`
    - Require branches to be up to date before merging
  - ✅ Block deletions
  - ✅ Require linear history (optional)
  - ✅ Require signed commits (optional, recommended)

See `.github/RULESETS.md` for detailed JSON configurations.

### Step 4: Enable GitHub Advanced Security Features

1. Go to **Settings → Code security and analysis**
2. Enable the following features:

#### Dependency graph
- Click **Enable** (should already be enabled)

#### Dependabot alerts
- Click **Enable**
- This alerts you to vulnerable dependencies

#### Dependabot security updates
- Click **Enable**
- Automatically creates PRs to update vulnerable dependencies

#### CodeQL analysis
- Already configured via `.github/workflows/codeql.yml`
- Verify it's listed under "Code scanning"

#### Secret scanning
- Click **Enable** (requires GitHub Advanced Security)
- Detects secrets accidentally committed to the repository

#### Secret scanning push protection
- Click **Enable** (optional but recommended)
- Prevents secrets from being pushed to the repository

### Step 5: Enable GitHub Copilot

#### For Organizations:
1. Go to organization **Settings → Copilot**
2. Enable GitHub Copilot
3. Add repository to allowed repositories
4. Assign Copilot seats to team members

#### For Personal Repositories:
1. Ensure you have a GitHub Copilot subscription
2. GitHub Copilot will automatically work for enabled repositories

### Step 6: Test the Configuration

#### Test 1: Create a test pull request to dev
```bash
git checkout dev
git checkout -b test/workflow-validation
echo "Test" > test.txt
git add test.txt
git commit -m "Test workflow"
git push origin test/workflow-validation
```
- Create PR to `dev` branch
- Verify CodeQL workflow runs
- Verify Code Review workflow runs

#### Test 2: Verify environment deployment
- Merge a PR to `dev` branch
- Check Actions tab to verify deployment workflow runs
- Verify "Deploy to Development" job executes

#### Test 3: Test promotion workflow
- Create PR from `dev` to `qa`
- Verify all checks run
- Get QA approval
- Merge and verify QA deployment

### Step 7: Create CODEOWNERS File (Optional)

Create `.github/CODEOWNERS` to specify code owners:

```
# Default owners for everything
* @your-team/developers

# Specific owners for workflows
/.github/workflows/ @your-team/devops

# Specific owners for environments
/.github/environments/ @your-team/ops
```

### Step 8: Configure Team Permissions

1. Go to **Settings → Collaborators and teams**
2. Add teams with appropriate permissions:
   - **Developers**: Write access
   - **QA Team**: Triage or Write access
   - **Operations**: Maintain or Admin access

## Verification Checklist

Use this checklist to verify everything is set up correctly:

- [ ] `dev` branch exists
- [ ] `qa` branch exists
- [ ] `main` branch exists
- [ ] `development` environment created
- [ ] `qa` environment created with reviewers
- [ ] `production` environment created with reviewers
- [ ] Dev branch ruleset applied and active
- [ ] QA branch ruleset applied and active
- [ ] Main branch ruleset applied and active
- [ ] CodeQL workflow runs on push/PR
- [ ] Code review workflow runs on PR
- [ ] Deployment workflow exists for all environments
- [ ] Dependabot alerts enabled
- [ ] Secret scanning enabled
- [ ] GitHub Copilot enabled
- [ ] Test PR created and workflows verified
- [ ] Team permissions configured

## Workflow Overview

Once setup is complete, the standard workflow is:

```
feature branch → dev → qa → main (production)
```

1. Developers create feature branches from `dev`
2. PRs to `dev` require passing checks (CodeQL, Code Review)
3. Merged to `dev` triggers automatic deployment to development
4. PR from `dev` to `qa` requires passing checks (CodeQL, Code Review)
5. Merged to `qa` triggers automatic deployment to QA environment
6. PR from `qa` to `main` requires 2 approvals + code owner review + passing checks
7. Merged to `main` triggers automatic deployment to production

## Troubleshooting

### CodeQL workflow fails
- Ensure GitHub Advanced Security is enabled
- Check workflow logs for specific errors
- Verify the language matrix includes your project's languages

### Deployment workflow doesn't run
- Check that environments are created in GitHub Settings
- Verify branch names match exactly (case-sensitive)
- Check Actions permissions in Settings → Actions

### Branch protection not working
- Verify rulesets are in "Active" state, not "Disabled"
- Check that branch names in rulesets match exactly
- Ensure you're not a repository admin (admins can bypass some rules)

## Support

For issues or questions:
- Review `.github/README.md` for configuration details
- Check GitHub Actions logs for workflow failures
- Contact your DevOps team for assistance

## Next Steps

After completing this setup:
1. Review and customize workflow configurations as needed
2. Add project-specific deployment steps to deploy.yml
3. Configure monitoring and alerting for production
4. Set up automated testing workflows
5. Document any project-specific configurations

---

**Last Updated**: 2024
**Maintained by**: ShiftBy Pro DevOps Team
