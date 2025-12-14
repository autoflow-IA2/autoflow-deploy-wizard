# 🤖 Portfólio Inteligente com Agentes de IA

> Uma interface moderna de chat construída com Lovable, alimentada por orquestração de IA via n8n e memória de longo prazo com Supabase.

[![Ver Demo Online](https://img.shields.io/badge/🟢_Demo_Online-Acessar_Projeto-2ea44f?style=for-the-badge)](https://portifolio.autoflowia2.com.br/)

---

![Status do Projeto](https://img.shields.io/badge/Status-Online-success)
![n8n](https://img.shields.io/badge/n8n-Backend_Logic-ff6b6b)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ecf8e)
![React](https://img.shields.io/badge/Frontend-Lovable%2FReact-blue)

## 📸 Demonstração
...

## 💡 Sobre o Projeto

Este projeto demonstra a criação de Agentes de IA capazes de interagir em linguagem natural. Diferente de chats comuns, este sistema possui uma arquitetura desacoplada onde a inteligência e a lógica de negócios residem em workflows de automação.

**O diferencial:** O frontend foi acelerado usando Lovable.dev, permitindo foco total na lógica complexa do backend (n8n) e na persistência de dados (Supabase).

## 🛠️ Arquitetura e Tecnologias

O fluxo de dados funciona da seguinte maneira:

1.  **Frontend (Lovable/React):** Captura a intenção do usuário e envia via API.
2.  **Orquestração (n8n):** Recebe a requisição, processa via LangChain/OpenAI e decide a ação.
3.  **Memória (Supabase):** Armazena o histórico da conversa e dados dos usuários.

### Stack Completa:
* **Frontend:** React, Vite, TypeScript, Tailwind CSS, shadcn-ui (Gerado via Lovable).
* **Backend / API:** n8n (Webhooks e Workflow de IA).
* **Database:** Supabase (PostgreSQL).

## 🚀 Funcionalidades dos Agentes

* [ ] **Memória de Conversa:** O agente lembra o que foi dito anteriormente (via Vetorização/Supabase).
* [ ] **Execução de Ferramentas:** O agente pode consultar APIs externas ou realizar cálculos.
* [ ] **Interface Responsiva:** Funciona perfeitamente em Mobile e Desktop.

## 📦 Como Rodar Localmente

### Pré-requisitos
* Node.js & npm instalados.
* Acesso à instância do n8n (para processar as requisições).

```bash
# 1. Clone o repositório
git clone <SEU_URL_DO_GITHUB>

# 2. Instale as dependências
npm install

# 3. Configure as Variáveis de Ambiente (.env)
# Você precisará da URL do seu Webhook do n8n
echo "VITE_N8N_WEBHOOK_URL=sua_url_aqui" > .env

# 4. Rode o servidor de desenvolvimento
npm run dev
