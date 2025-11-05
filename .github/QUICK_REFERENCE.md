# Quick Reference Guide

## Branch Strategy

```
main (production) ← qa ← dev ← feature branches
```

## Environment URLs (Placeholder - Update with actual URLs)
- **Development**: https://dev.shiftbypro.com
- **QA**: https://qa.shiftbypro.com  
- **Production**: https://shiftbypro.com

## Common Commands

### Starting New Work
```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
# Make changes...
git add .
git commit -m "Your commit message"
git push origin feature/your-feature-name
# Create PR to dev branch
```

### Promoting to QA
```bash
# After dev testing is complete
# Create PR from dev → qa in GitHub UI
# Wait for checks to pass (CodeQL, Code Review)
# Merge (no approval required for solo developer)
```

### Deploying to Production
```bash
# After QA testing is complete
# Create PR from qa → main in GitHub UI
# Get 2 approvals including code owner
# Merge
```

## Required Approvals

| Branch | Required Approvals | Required Checks |
|--------|-------------------|-----------------|
| dev    | None (solo developer) | CodeQL, Code Review |
| qa     | None (solo developer) | CodeQL, Code Review |
| main   | 2 (incl. code owner) | CodeQL, Code Review |

## Workflows

### Automatic Workflows
- **CodeQL**: Runs on push/PR to main, dev, qa + weekly Monday scans
- **Code Review**: Runs on all PRs
- **Deploy**: Runs on push to dev, qa, main branches

### Manual Workflows
- **Setup Repository Configuration**: Run once after repo setup

## Environment Protection

| Environment | Protection Rules |
|-------------|-----------------|
| development | None - auto-deploy |
| qa          | 1 required reviewer (QA team) |
| production  | 2 required reviewers (Ops team) |

## Security Features Enabled

- ✅ CodeQL Security Scanning
- ✅ Dependabot Alerts (configure in Settings)
- ✅ Secret Scanning (configure in Settings)
- ✅ Code Review Automation
- ✅ Branch Protection Rulesets

## Useful Links

- [Full Setup Guide](.github/SETUP_GUIDE.md)
- [Detailed README](.github/README.md)
- [Rulesets Documentation](.github/RULESETS.md)
- [GitHub Actions](../../actions)
- [Repository Settings](../../settings)

## Team Contacts

- **DevOps**: Responsible for CI/CD and infrastructure
- **QA Team**: Responsible for QA environment approvals
- **Operations**: Responsible for production deployments
- **Security**: Responsible for security reviews and CodeQL

## Troubleshooting

**Q: My PR doesn't have required checks**  
A: Ensure the workflows exist and branch protection is configured

**Q: CodeQL fails on my PR**  
A: Check the CodeQL logs in Actions tab and fix security issues

**Q: I can't merge to main**  
A: Ensure you have 2 approvals including code owner + all checks pass

**Q: Deployment didn't trigger**  
A: Check Actions tab for workflow run status and logs

## Next Steps After Setup

1. ✅ Complete manual configuration steps in SETUP_GUIDE.md
2. ✅ Test the workflow with a sample PR
3. ✅ Configure team permissions
4. ✅ Add actual deployment scripts to deploy.yml
5. ✅ Set up monitoring and alerting
6. ✅ Train team on the new workflow

---

**Need Help?** Check the full documentation in `.github/` directory or contact the DevOps team.
