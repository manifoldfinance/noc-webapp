#!/usr/bin/env bash -x
rm -rf dist
mkdir -p public/.well-known
mkdir -p dist/.well-known
date "+%Y-%m-%dT%H:%M:%S%z" > dist/build_id.txt

npm run build

echo "Deploying to netlify..."
netlify deploy --prod
sleep 1
exit 0
