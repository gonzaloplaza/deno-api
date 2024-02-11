FROM denoland/deno:alpine-1.40.4

LABEL Maintainer="Gonzalo Plaza <gonzalo@verize.com>" \
      Description="Lightweight container with Deno 1.40 based on Alpine Linux"

# Environment variables
ENV ENV=production
ENV PORT=3000
ENV DENO_DIR=/app/vendor

# Configure user
RUN addgroup -S webuser \
    && adduser -S webuser -G webuser

WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
ADD src/ ./src/
COPY deno.json deno.lock ./

# Cache the dependencies as a layer (the following two steps are re-run only when deno.lock is modified).
RUN deno cache --reload --lock=deno.lock ./src/main.ts

# Give Permissions 
RUN chown -R webuser:webuser /app

# Expose the port nginx is reachable on
EXPOSE ${PORT}

# Set the user
USER webuser

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "src/main.ts"]