#!/bin/bash
set -e

# Define variables
SCHEMA_URL="https://api.oursprivacy.com/api/v1/openapi"
SCHEMA_DIR="./schema"
SCHEMA_FILE="$SCHEMA_DIR/openapi.json"

# Create the schema directory if it doesn't exist
mkdir -p "$SCHEMA_DIR"

# Fetch the schema
echo "Fetching schema from $SCHEMA_URL..."
curl -s -o "$SCHEMA_FILE" "$SCHEMA_URL"

echo "Schema updated at $SCHEMA_FILE"