#!/usr/bin/env bash
set -e

# Location of your OpenAPI schema and Docker image
SCHEMA_FILE="openapi.json"
OPENAPI_IMAGE="openapitools/openapi-generator-cli"

docker run --rm \
    -v "${PWD}:/local" \
    "${OPENAPI_IMAGE}" generate \
    -i "/local/${SCHEMA_FILE}" \
    -c "/local/config/config-typescript.yml" \
    -o "/local"
