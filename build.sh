#!/usr/bin/env bash -x
rm -rf dist
npm run build
netlify deploy --prod