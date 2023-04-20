#!/bin/bash

OPEN_API_URL="${$OPEN_API_URL:-"https://api-dev.l3vels.xyz/docs-json}"
PACKAGE_VERSION=$PACKAGE_VERSION
COMMIT_NAME="${COMMIT_NAME:-"Update generated code"}"

USERNAME="${USERNAME:-"Giga Chkhikvadze"}"
USER_EMAIL="${USER_EMAIL:-"giga.chkhikvadze@gmail.com"}"

# Set the OpenAPI Generator options
CONFIG_FILE="$(pwd)/typescript-config.json"
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
