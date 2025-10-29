# Publishing Guide - Node.js SDK

This document describes how to build, version, and publish the OursPrivacy Node.js TypeScript SDK to npm.

## Overview

- **Package Name**: `ours-ingest-sdk`
- **Target Registry**: npm (https://www.npmjs.com/)
- **Current Status**: ✅ Published (https://www.npmjs.com/package/ours-ingest-sdk)
- **Build System**: TypeScript + tsup bundler
- **Publishing**: Automated via release script

## Prerequisites

### Tools Required
- Node.js 16+ and npm/yarn
- TypeScript compiler
- Access to npm account with publishing permissions

### Authentication Setup
1. **npm Login**:
   ```bash
   npm login
   # Use developers@zeytech.com account or authorized account
   ```

2. **Verify access**:
   ```bash
   npm whoami
   npm access list packages ours-ingest-sdk
   ```

## Version Management

### Current Version
Check current version in `package.json`:
```json
{
  "name": "ours-ingest-sdk",
  "version": "1.0.0"
}
```

### Automated Versioning
The repository includes `scripts/release.sh` which handles version management:

```bash
# Run the release script
bash ./scripts/release.sh
```

The script will:
1. Show current version
2. Prompt for next version
3. Prompt for release notes
4. Update `package.json`
5. Update `CHANGELOG.md`
6. Commit changes and create git tag
7. Push to GitHub
8. Publish to npm

## Building the Package

### Local Development Build
```bash
# Install dependencies
yarn install
# or
npm install

# Build the package
npm run build
```

### Build Process
The build uses `tsup` to create multiple formats:
- **CommonJS**: `./dist/index.js`
- **ESM**: `./dist/esm/index.js`
- **IIFE**: `./dist/index.global.js`
- **Type Definitions**: `./dist/index.d.ts`

## Publishing Process

### Automated Publishing (Recommended)

Use the provided release script:

```bash
# Make sure you're on the main branch
git checkout main
git pull origin main

# Run the release script
bash ./scripts/release.sh

# Follow the prompts:
# 1. Enter new version (e.g., 1.0.1)
# 2. Enter release notes
# 3. Script handles the rest automatically
```

### Manual Publishing (Alternative)

1. **Update version**:
   ```bash
   npm version patch  # or minor, major
   ```

2. **Build package**:
   ```bash
   npm run build
   ```

3. **Test package locally**:
   ```bash
   npm pack
   # This creates ours-ingest-sdk-X.X.X.tgz
   
   # Test in another project
   npm install /path/to/ours-ingest-sdk-X.X.X.tgz
   ```

4. **Publish to npm**:
   ```bash
   npm publish
   ```

## Release Workflow

### Standard Release Process

1. **Prepare Release**:
   - Ensure all changes are committed
   - Update documentation if needed
   - Run tests: `npm test`

2. **Run Release Script**:
   ```bash
   bash ./scripts/release.sh
   ```

3. **Provide Release Information**:
   - **Version**: Follow semantic versioning (1.0.1, 1.1.0, 2.0.0)
   - **Release Notes**: Describe changes, fixes, new features

4. **Verify Publication**:
   - Check https://www.npmjs.com/package/ours-ingest-sdk
   - Test installation: `npm install ours-ingest-sdk`

### Version Guidelines

Follow semantic versioning:
- **Patch** (1.0.1): Bug fixes, small updates
- **Minor** (1.1.0): New features, backwards compatible
- **Major** (2.0.0): Breaking changes

## Code Generation

This SDK is auto-generated from OpenAPI specifications:

```bash
# Fetch latest schema
bash ./scripts/fetch-schema.sh

# Regenerate code
bash ./scripts/codegen.sh
```

The codegen process uses Docker with OpenAPI Generator:
```bash
docker run --rm \
    -v "${PWD}:/local" \
    openapitools/openapi-generator-cli generate \
    -i "/local/openapi.json" \
    -c "/local/config-typescript.yml" \
    -o "/local"
```

## Package Configuration

### Key Package Properties
```json
{
  "name": "ours-ingest-sdk",
  "version": "1.0.0",
  "description": "Node.js client for ours-ingest-sdk",
  "author": "Ours Privacy",
  "license": "MIT",
  "main": "./dist/index.js",
  "module": "./dist/esm/index.js",
  "typings": "./dist/index.d.ts"
}
```

### Build Configuration
- **tsup**: Handles bundling for multiple formats
- **TypeScript**: Provides type safety and definitions
- **Dual Package**: Supports both CommonJS and ESM

## Testing

### Run Tests
```bash
npm test
# or
yarn test
```

### Type Checking
```bash
npm run type-check
```

## Scripts Overview

| Script | Purpose | Command |
|--------|---------|---------|
| `build` | Build all formats | `npm run build` |
| `test` | Run test suite | `npm test` |
| `type-check` | TypeScript validation | `npm run type-check` |
| `release` | Automated release | `bash ./scripts/release.sh` |
| `codegen` | Regenerate from OpenAPI | `bash ./scripts/codegen.sh` |
| `fetch-schema` | Update OpenAPI schema | `bash ./scripts/fetch-schema.sh` |

## Troubleshooting

### Common Issues

1. **"Package name taken"**: Package already published with this name
2. **"Authentication failed"**: Run `npm login` with correct credentials
3. **"Version already exists"**: Increment version number
4. **Build failures**: Check TypeScript errors with `npm run type-check`

### Verification Steps
```bash
# Check npm authentication
npm whoami

# Test package installation
npm install ours-ingest-sdk

# Verify package contents
npm pack && tar -tf ours-ingest-sdk-*.tgz
```

## Security Notes

- Never commit npm auth tokens
- Use `npm audit` to check for vulnerabilities
- Review dependencies regularly
- Use 2FA on npm account

## CI/CD Integration

Consider setting up GitHub Actions for automated publishing:

```yaml
# .github/workflows/publish.yml
name: Publish Package
on:
  push:
    tags:
      - 'v*'
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Support

- **Documentation**: https://docs.oursprivacy.com/docs/nodejs#/
- **npm Package**: https://www.npmjs.com/package/ours-ingest-sdk
- **Issues**: https://github.com/with-ours/ingest-sdk-nodejs/issues
- **Repository**: https://github.com/with-ours/ingest-sdk-nodejs