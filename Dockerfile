# Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependências (todas, para conseguir buildar)
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Estágio de produção
FROM node:18-alpine

WORKDIR /app

# Instalar serve globalmente
RUN npm install -g serve

# Copiar apenas os arquivos buildados
COPY --from=builder /app/dist ./dist
# Se React CRA: COPY --from=builder /app/build ./build

# Porta configurável via variável de ambiente
ENV PORT=3000
EXPOSE 3000

# Comando para servir (ajuste 'dist' para 'build' se necessário)
CMD ["serve", "-s", "dist", "-l", "3000"]
