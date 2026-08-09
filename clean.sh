#!/usr/bin/env bash

# --------------------------------------
# Simple local "clean" script for S3
# Deletes all objects from a non-versioned bucket
# --------------------------------------

BUCKET_NAME="disaenz-portfolio"
REGION="us-east-2"

# Ensure AWS CLI is available
if ! command -v aws &> /dev/null; then
  echo "Error: AWS CLI not found. Please install and configure it first." >&2
  exit 1
fi

# Delete everything
echo "🧹 Emptying bucket (non-versioned): $BUCKET_NAME"
aws s3 rm "s3://${BUCKET_NAME}/" \
  --region "$REGION" \
  --recursive

echo "✅ Bucket \"$BUCKET_NAME\" is now empty."
