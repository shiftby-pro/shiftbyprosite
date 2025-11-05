# Production Environment Configuration

## Environment: Production (main)

### Purpose
The production environment serves live traffic and requires the highest level of scrutiny.

### Configuration
- **Branch**: `main`
- **Deployment**: Manual approval required from multiple reviewers
- **Testing**: All tests must pass
- **Access**: Limited to operations team

### Environment Variables
```
ENVIRONMENT=production
NODE_ENV=production
DEBUG=false
LOG_LEVEL=warn
```

### Deployment
Deployments to production require:
- 2 approvals from code owners
- All status checks must pass
- QA sign-off required

### Monitoring
- Full application monitoring
- Error tracking and alerting
- Performance monitoring
- Uptime monitoring

### Access Control
- Operations team has deployment access
- Requires multiple approvals
- All changes logged and audited
