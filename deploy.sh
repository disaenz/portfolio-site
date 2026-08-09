#!/usr/bin/env bash

BUCKET_NAME="disaenz-portfolio"
BUILD_DIR="dist"
REGION="us-east-2"
DOMAIN="daniel-saenz.com"

# 1) Preconditions
if ! command -v aws &> /dev/null; then
  echo "Error: AWS CLI not found. Aborting." >&2
  exit 1
fi

# 2) Build the app
echo "🔨 Building the project…"
npm run build

# 3) Sync to S3
echo "🚀 Syncing to s3://${BUCKET_NAME}/"
aws s3 sync "${BUILD_DIR}/" "s3://${BUCKET_NAME}/" \
  --region "$REGION" \
  --delete \
  --cache-control "max-age=0,no-cache,no-store,must-revalidate"

# 4) Dynamically fetch the CloudFront Distribution ID
echo "🔍 Looking up CloudFront distribution for ${DOMAIN}…"
DISTRIBUTION_ID=$(aws cloudfront list-distributions \
  --query "DistributionList.Items[?contains(Aliases.Items, '${DOMAIN}')].Id | [0]" \
  --output text)

if [[ -z "$DISTRIBUTION_ID" || "$DISTRIBUTION_ID" == "None" ]]; then
  echo "Error: could not find a CloudFront distribution for ${DOMAIN}" >&2
  exit 1
fi
echo "→ Found distribution ID: $DISTRIBUTION_ID"

# 5) Invalidate CloudFront cache so updates appear immediately
echo "🗑️  Creating CloudFront invalidation…"
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --region us-east-1

echo "🎉 Deployment complete! Site should be live at https://${DOMAIN}/"