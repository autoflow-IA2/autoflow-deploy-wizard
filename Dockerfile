FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Estágio de produção
FROM node:18-alpine

WORKDIR /app

# Instalar serve
RUN npm install -g serve

# Copiar build
COPY --from=builder /app/dist ./dist

# IMPORTANTE: Easypanel precisa da porta 3000 por padrão
ENV PORT=3000
EXPOSE 3000

# Servir na porta 3000
CMD ["serve", "-s", "dist", "-l", "3000", "--no-clipboard"]
