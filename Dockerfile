FROM node:lts AS builder

WORKDIR /my-space

ENV NEXT_PUBLIC_PROVIDER=self-host
ENV NEXT_PUBLIC_HOST=http://localhost:3000
ENV NWAKATIME_API=waka_b91b3f14-9a75-4e06-a514-b8bd3751f79f
ENV GITHUB_TOKEN=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
ENV TMDB_READ_API=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzUwYTZiNzZkZDg2ZDM0N2MwNmY0Y2JlZWZiZDRjMSIsInN1YiI6IjY1ZTdlOWFjNDJmMTlmMDE2NDhjYTliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DmeiRlpwyOm4RCPqSJ0GEOzcrk7rchUJYtrROMiKgaM
ENV TMDB_LIST_ID=8293065
ENV SPOTIFY_KEY=0950dc4429d645f5b921caac648de8dd
ENV SPOTIFY_SECRET=ed8539af51ba407fb5dd5d91463a44b5
ENV SPOTIFY_REFRESH_TOKEN=AQC20Qb2a7JGTlfyoX0a-MA9RzlaiA3gCE4c_Myu5loVySHcVdDQvN6JqB4KHWyjn002HAKjRuOtC0ABPpPUnK1YJryqhtIsswyf0jDhjfthBARdZr5Zi5tg8VDgJVMnB60
ENV LITERAL_EMAIL=inderjotsingh141@gmail.com
ENV LITERAL_PASSWORD=aG.fkx8pBzjpX!P
ENV LITERAL_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWQiOiJjbHRpZ2NraWw0MDYxOTBoeW9hbTJrbzF5diIsInR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJ0aW1lc3RhbXAiOjE3MDk4OTU2MDU4MjEsImlhdCI6MTcwOTg5NTYwNSwiZXhwIjoxNzI1NjIwNDA1fQ.YUVJSU6I5slQFKW_hu3W40orzzmnbgximYNBmZRWwXo
ENV LITERAL_PROFILE_ID=cltigckil406190hyoam2ko1yv
ENV UPSTASH_REDIS_REST_URL="https://us1-safe-foxhound-41977.upstash.io"
ENV UPSTASH_REDIS_REST_TOKEN="AaP5ASQgZDA1ZmNlY2ItODU0NS00NDBjLWEwMjctZmQ1MTE2ZDk5MjRjMzU5YWU5OWU0NzRiNGY0Y2E2M2MwZTU2NmM5ZjgwMGY="
ENV DIRECT_URL=postgresql://www_owner:kzGAvysT31PN@ep-weathered-art-a4hzfekg-pooler.us-east-1.aws.neon.tech/www?sslmode=require
ENV DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMDIzZGE2ZWMtODcyOC00OGFmLWJmMzQtY2I4ZDYyZDdmYzJkIiwidGVuYW50X2lkIjoiZjE2M2IwMGRiMmMwZjc5NmYyZDU0YjZjYmU1ZGMwMTYyOTNkNDFlNjRlZTk1ODAwNzEyY2Y4YmNiM2MzZDJiOSIsImludGVybmFsX3NlY3JldCI6IjQyZjk4ZjJiLTNjYTctNGFmNy1iMTI3LWFhMDcwOWMzNDVkNCJ9.yL3tAzmdCLhIxNRF2_H3E7I1KOX-3Qwr_O5k_X49vHI"
ENV RESEND_KEY=re_8xAH5NeD_2UKAqU3SeqMXyM3mPSMVpPKM
ENV NEXT_PUBLIC_PROVIDER=self-host

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
COPY . .

RUN pnpm install 

RUN pnpm run build

FROM node:lts  AS runner
WORKDIR /my-space

ENV NEXT_PUBLIC_PROVIDER=self-host
ENV NEXT_PUBLIC_HOST=http://localhost:3000
ENV NWAKATIME_API=waka_b91b3f14-9a75-4e06-a514-b8bd3751f79f
ENV GITHUB_TOKEN=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
ENV TMDB_READ_API=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzUwYTZiNzZkZDg2ZDM0N2MwNmY0Y2JlZWZiZDRjMSIsInN1YiI6IjY1ZTdlOWFjNDJmMTlmMDE2NDhjYTliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DmeiRlpwyOm4RCPqSJ0GEOzcrk7rchUJYtrROMiKgaM
ENV TMDB_LIST_ID=8293065
ENV SPOTIFY_KEY=0950dc4429d645f5b921caac648de8dd
ENV SPOTIFY_SECRET=ed8539af51ba407fb5dd5d91463a44b5
ENV SPOTIFY_REFRESH_TOKEN=AQC20Qb2a7JGTlfyoX0a-MA9RzlaiA3gCE4c_Myu5loVySHcVdDQvN6JqB4KHWyjn002HAKjRuOtC0ABPpPUnK1YJryqhtIsswyf0jDhjfthBARdZr5Zi5tg8VDgJVMnB60
ENV LITERAL_EMAIL=inderjotsingh141@gmail.com
ENV LITERAL_PASSWORD=aG.fkx8pBzjpX!P
ENV LITERAL_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWQiOiJjbHRpZ2NraWw0MDYxOTBoeW9hbTJrbzF5diIsInR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJ0aW1lc3RhbXAiOjE3MDk4OTU2MDU4MjEsImlhdCI6MTcwOTg5NTYwNSwiZXhwIjoxNzI1NjIwNDA1fQ.YUVJSU6I5slQFKW_hu3W40orzzmnbgximYNBmZRWwXo
ENV LITERAL_PROFILE_ID=cltigckil406190hyoam2ko1yv
ENV UPSTASH_REDIS_REST_URL="https://us1-safe-foxhound-41977.upstash.io"
ENV UPSTASH_REDIS_REST_TOKEN="AaP5ASQgZDA1ZmNlY2ItODU0NS00NDBjLWEwMjctZmQ1MTE2ZDk5MjRjMzU5YWU5OWU0NzRiNGY0Y2E2M2MwZTU2NmM5ZjgwMGY="
ENV DIRECT_URL=postgresql://www_owner:kzGAvysT31PN@ep-weathered-art-a4hzfekg-pooler.us-east-1.aws.neon.tech/www?sslmode=require
ENV DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMDIzZGE2ZWMtODcyOC00OGFmLWJmMzQtY2I4ZDYyZDdmYzJkIiwidGVuYW50X2lkIjoiZjE2M2IwMGRiMmMwZjc5NmYyZDU0YjZjYmU1ZGMwMTYyOTNkNDFlNjRlZTk1ODAwNzEyY2Y4YmNiM2MzZDJiOSIsImludGVybmFsX3NlY3JldCI6IjQyZjk4ZjJiLTNjYTctNGFmNy1iMTI3LWFhMDcwOWMzNDVkNCJ9.yL3tAzmdCLhIxNRF2_H3E7I1KOX-3Qwr_O5k_X49vHI"
ENV RESEND_KEY=re_8xAH5NeD_2UKAqU3SeqMXyM3mPSMVpPKM
ENV NEXT_PUBLIC_PROVIDER=self-host


RUN npm i sharp 
RUN npm i -g pm2 



COPY --from=builder /my-space/package.json .
COPY --from=builder /my-space/pnpm-lock.yaml .
COPY --from=builder /my-space/next.config.js ./
COPY --from=builder /my-space/public ./public
COPY --from=builder /my-space/.next/standalone ./
COPY --from=builder /my-space/.next/static ./.next/static


EXPOSE 3000
CMD ["pm2-runtime", "server.js"]
