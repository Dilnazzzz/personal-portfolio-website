# Multi-stage Dockerfile for Next.js on Railway
FROM node:20-bullseye-slim AS base
WORKDIR /app

FROM base AS deps
WORKDIR /app

# Install dependencies (include dev deps for build: Tailwind/PostCSS/TS)
COPY package*.json ./
RUN npm install --legacy-peer-deps

FROM deps AS builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node:20-bullseye-slim AS runner
WORKDIR /app

ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1

# Production deps only (for next start)
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev --legacy-peer-deps

# Copy build output and public assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
# Listen on 0.0.0.0 and use Railway's PORT (set PORT=3000 in Railway if you get 502)
CMD ["sh", "-c", "npx next start -H 0.0.0.0 -p ${PORT:-3000}"]
