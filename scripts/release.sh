#!/usr/bin/env bash
set -e

# 1. Show current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version is: $CURRENT_VERSION"

# 2. Prompt for the next version
read -rp "Enter the next version (e.g., 1.0.1): " NEXT_VERSION

# 3. Prompt for release notes
echo "Enter release notes (press ENTER, then CTRL+D when done):"
RELEASE_NOTES=$(cat)

# 4. Update package.json with the new version
node <<EOF
const fs = require('fs');
const path = 'package.json';
const pkg = JSON.parse(fs.readFileSync(path, 'utf8'));
pkg.version = '${NEXT_VERSION}';
fs.writeFileSync(path, JSON.stringify(pkg, null, 2) + '\\n');
EOF

echo "Updated package.json to version ${NEXT_VERSION}"

# 5. Update or create CHANGELOG.md
if [ ! -f CHANGELOG.md ]; then
  echo "# Changelog" > CHANGELOG.md
fi

{
  echo ""
  echo "## [${NEXT_VERSION}] - $(date +%Y-%m-%d)"
  echo ""
  echo "${RELEASE_NOTES}"
} >> CHANGELOG.md

# 6. Commit changes and create a Git tag with the release notes
git add package.json CHANGELOG.md
git commit -m "chore: release v${NEXT_VERSION}

${RELEASE_NOTES}"
git tag -a "v${NEXT_VERSION}" -m "${RELEASE_NOTES}"

# 7. Push the commit and tag
git push origin main
git push origin "v${NEXT_VERSION}"

# 8. Publish to npm
echo "Publishing to npm..."
npm publish

echo "Release v${NEXT_VERSION} published successfully!"