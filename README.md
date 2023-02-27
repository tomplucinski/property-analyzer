# Introduction

Monorepo for an application that evaluates multi family properties.

# Getting Started

## Local Development

1. clone this repo to your machine
2. Navigate to client directory `cd client`
3. Install dependencies `npm install` (project depends on node 16, ensure package.lock.json has no dependency churn)
4. Start project locally `npm start`

# Run Integration Tests

TBD

# Deployment

## Deploy Front End

1. Navigate to client directory `cd client`
2. Build code with most recent changes `npm run build`
3. Deploy to Firebase hosted service `firebase deploy --only hosting`

## Deploy functions

1. Navigate to server directory `cd server`
2. Deploy to Firebase functions `firebase deploy --only functions`
