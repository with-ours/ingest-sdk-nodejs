#!/bin/bash
set -e

# Define variables
SCHEMA_URL="https://api.oursprivacy.com/api/v1/openapi"
SCHEMA_FILE="openapi.json"

# Fetch the schema
echo "Fetching schema from $SCHEMA_URL..."
curl -s -o "$SCHEMA_FILE" "$SCHEMA_URL"

echo "Schema updated at $SCHEMA_FILE"