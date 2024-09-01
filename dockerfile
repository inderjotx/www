FROM node:18-alpine AS builder
WORKDIR /my-space

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install 
COPY . .
RUN pnpm run build

FROM node:18-alpine AS runner
RUN npm install sharp 
WORKDIR /my-space
COPY --from=builder /my-space/package.json .
COPY --from=builder /my-space/pnpm-lock.yaml .
COPY --from=builder /my-space/next.config.mjs ./
COPY --from=builder /my-space/public ./public
COPY --from=builder /my-space/.next ./.next
EXPOSE 3000
ENTRYPOINT ["node",  "./.next/standalone/server.js"]