# Deploy AutoFlow no EasyPanel

Este guia explica como fazer deploy da landing page AutoFlow no EasyPanel usando GitHub.

## Pré-requisitos

1. Conta no GitHub
2. Acesso ao EasyPanel
3. VPS configurada com EasyPanel

## Passos para Deploy

### 1. Conectar ao GitHub

1. No Lovable, clique em **GitHub → Connect to GitHub**
2. Autorize o Lovable GitHub App
3. Selecione sua conta/organização GitHub
4. Clique em **Create Repository** para gerar o repositório

### 2. Configurar no EasyPanel

1. Acesse seu painel EasyPanel
2. Clique em **Create New App**
3. Selecione **GitHub** como source
4. Conecte sua conta GitHub se ainda não conectou
5. Selecione o repositório do projeto AutoFlow
6. Configure as seguintes opções:

#### Configurações Básicas:
- **App Name**: `autoflow`
- **Source**: GitHub Repository
- **Branch**: `main` (ou branch principal)
- **Build Command**: `npm run build`
- **Start Command**: `npm run dev` (para desenvolvimento) ou use servidor estático
- **Port**: `8080`

#### Variáveis de Ambiente:
Nenhuma necessária para este projeto básico.

#### Build Settings:
- **Node Version**: `18` ou superior
- **Package Manager**: `npm`
- **Build Path**: `dist`

### 3. Deploy Automático

O EasyPanel irá:
1. Clonar o repositório
2. Instalar dependências (`npm install`)
3. Executar build (`npm run build`)
4. Servir os arquivos estáticos

### 4. Configuração de Domínio

1. No painel do EasyPanel, vá para **Domains**
2. Adicione seu domínio personalizado
3. Configure o SSL (Let's Encrypt automático)

## Estrutura do Projeto

```
autoflow/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AgentCard.tsx
│   │   └── AgentsSection.tsx
│   ├── pages/
│   │   └── Index.tsx
│   └── index.css
├── public/
├── dist/ (gerado no build)
└── package.json
```

## Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Troubleshooting

### Build Falha
- Verifique se todas as dependências estão no package.json
- Confirme que não há erros de TypeScript
- Verifique os logs no EasyPanel

### App não Carrega
- Confirme que a porta está correta (8080)
- Verifique se o build foi gerado na pasta `dist`
- Confirme se o servidor está apontando para os arquivos corretos

### Deploy Não Atualiza
- Force um novo deploy no EasyPanel
- Verifique se o webhook do GitHub está funcionando
- Confirme que as mudanças foram pushadas para o branch correto

## Performance

O projeto está otimizado para:
- ✅ Carregamento rápido
- ✅ Responsivo (mobile-first)
- ✅ SEO otimizado
- ✅ Animações suaves
- ✅ Bundle pequeno

## Suporte

Para problemas específicos do EasyPanel, consulte:
- Documentação oficial do EasyPanel
- Logs do aplicativo no painel
- Suporte do EasyPanel

Para problemas do código:
- Verifique os logs do navegador (F12)
- Teste localmente com `npm run dev`
- Verifique o build com `npm run build`