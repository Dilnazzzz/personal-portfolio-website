# Multi-stage Dockerfile for Next.js on Railway
FROM node:20-bullseye-slim AS base

ENV NODE_ENV=production
WORKDIR /app

FROM base AS deps
WORKDIR /app

# Install dependencies (no lockfile committed is fine; Docker will generate one in the image)
COPY package.json ./
RUN npm install --legacy-peer-deps

FROM deps AS builder
WORKDIR /app
COPY . .
# Build the Next.js app
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    NEXT_TELEMETRY_DISABLED=1

# Copy only the necessary files from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]

