#!/bin/bash

OPEN_API_URL=$OPEN_API_URL
PACKAGE_VERSION=$PACKAGE_VERSION

USERNAME="${USERNAME}"
USER_EMAIL="${USER_EMAIL}"

# Set the OpenAPI Generator options
CONFIG_FILE="$(pwd)/openapi/typescript-config.json"
OUTPUT_DIR="$(pwd)"

env | grep OPEN_API_URL
env | grep PACKAGE_VERSION
env | grep USERNAME
env | grep COMMIT_NAME

# Generate the client or server code
npx @openapitools/openapi-generator-cli generate -i "$OPEN_API_URL" -c "$CONFIG_FILE" -o "$OUTPUT_DIR"

# Set Git user
git config user.name "$USERNAME"
git config user.email "$USER_EMAIL"

# Add, commit, and push the changes
git add .
git commit -m "$COMMIT_NAME"
git pull --rebase origin main
git push origin HEAD
