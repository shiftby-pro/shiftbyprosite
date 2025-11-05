# Development Environment Configuration

## Environment: Development (dev)

### Purpose
The development environment is used for active development and integration testing.

### Configuration
- **Branch**: `dev`
- **Deployment**: Automatic on merge to dev branch
- **Testing**: Integration tests run automatically
- **Access**: All developers have access

### Environment Variables
```
ENVIRONMENT=development
NODE_ENV=development
DEBUG=true
LOG_LEVEL=debug
```

### Deployment
Deployments to the dev environment happen automatically when code is merged to the `dev` branch.

### Monitoring
- Application logs available in development
- Debug mode enabled
- Error tracking enabled

### Access Control
- All team members have read/write access
- No approval required for deployments
