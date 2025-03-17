#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Sync the build directory with S3
echo "Deploying to S3..."
aws s3 sync build/ s3://duobit.pl --delete

echo "Deployment complete!" 