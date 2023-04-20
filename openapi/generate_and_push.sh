#!/bin/bash

USERNAME="Giga Chkhikvadze"
USER_EMAIL="giga.chkhikvadze@email.com"

# Set the OpenAPI Generator options
CONFIG_FILE="$(pwd)/openapi/typescript-config.json"
OUTPUT_DIR=""

# Generate the client or server code
npx @openapitools/openapi-generator-cli generate -c "$CONFIG_FILE" -o "$OUTPUT_DIR"


# Set Git user
git config user.name "$USERNAME"
git config user.email "$USER_EMAIL"

# Add, commit, and push the changes
git add generated/
git commit -m "Update generated source code"
git pull --rebase origin main
git push origin HEAD