# Branch Protection and Rulesets Configuration

This document describes the recommended branch protection rules and rulesets for the repository.

## Branches

### Main Branch
- Production environment
- Requires pull request reviews before merging
- Requires status checks to pass before merging
- CodeQL analysis required

### Dev Branch
- Development environment
- Used for integration testing
- No approval required (solo developer workflow)
- CodeQL analysis enabled

### QA Branch
- Quality Assurance environment
- Used for testing before production
- No approval required (solo developer workflow)
- CodeQL analysis enabled

## Recommended Rulesets

### For Dev Branch
```json
{
  "name": "Dev Branch Protection",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": ["refs/heads/dev"],
      "exclude": []
    }
  },
  "rules": [
    {
      "type": "required_status_checks",
      "parameters": {
        "required_status_checks": [
          {
            "context": "CodeQL"
          },
          {
            "context": "Code Review"
          }
        ],
        "strict_required_status_checks_policy": true
      }
    }
  ]
}
```

### For QA Branch
```json
{
  "name": "QA Branch Protection",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": ["refs/heads/qa"],
      "exclude": []
    }
  },
  "rules": [
    {
      "type": "required_status_checks",
      "parameters": {
        "required_status_checks": [
          {
            "context": "CodeQL"
          },
          {
            "context": "Code Review"
          }
        ],
        "strict_required_status_checks_policy": true
      }
    }
  ]
}
```

### For Main Branch
```json
{
  "name": "Main Branch Protection",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": ["refs/heads/main"],
      "exclude": []
    }
  },
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 2,
        "dismiss_stale_reviews_on_push": true,
        "require_code_owner_review": true,
        "require_last_push_approval": true
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "required_status_checks": [
          {
            "context": "CodeQL"
          },
          {
            "context": "Code Review"
          }
        ],
        "strict_required_status_checks_policy": true
      }
    },
    {
      "type": "deletion"
    }
  ]
}
```

## Setting Up Rulesets

These rulesets need to be configured at the repository level through GitHub Settings:

1. Go to Repository Settings > Rules > Rulesets
2. Click "New ruleset" > "New branch ruleset"
3. Copy the JSON configuration for each branch
4. Apply the ruleset

Note: These configurations are defined here for documentation. Actual ruleset creation requires repository admin access through the GitHub web interface or API.
