# shiftbyprosite

Enterprise-ready repository with automated workflows and multi-environment deployment.

## Features

- ✅ **CodeQL Security Scanning**: Automated security analysis on all branches
- ✅ **Automated Code Review**: AI-powered code review on pull requests
- ✅ **GitHub Copilot**: AI-assisted coding enabled
- ✅ **Multi-Environment Deployment**: Dev, QA, and Production environments
- ✅ **Branch Protection**: Comprehensive rulesets for all environments

## Environments

- **Development** (`dev` branch): Active development and integration testing
- **QA** (`qa` branch): Quality assurance and pre-production testing  
- **Production** (`main` branch): Live production environment

## Quick Start

### Development Workflow

1. Create a feature branch from `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit

3. Push and create a pull request to `dev`

4. Wait for automated checks (CodeQL, Code Review)

5. Merge (no approval required for solo developer)

### Deployment Pipeline

```
feature → dev → qa → main (production)
```

Each environment has automated deployment configured.

## GitHub Configuration

See [`.github/README.md`](.github/README.md) for detailed information about:
- Workflows and automation
- Environment configurations
- Branch protection rulesets
- Security scanning
- Code review process

## Contributing

Please follow the development workflow outlined above. All pull requests require:
- Passing CodeQL security checks
- Automated code review
- Production (main branch) requires 2 approvals including code owner
- Dev and QA branches: No approval required (solo developer workflow)

## License

Copyright © 2024 ShiftBy Pro