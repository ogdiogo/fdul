# Glosadores e Associados - Implantação no Render

Este documento contém instruções para implantar o site "Glosadores e Associados" na plataforma Render.

## Passos para Implantação

### 1. Crie uma conta no Render

- Acesse [render.com](https://render.com) e crie uma conta gratuita
- Você pode se cadastrar usando GitHub, GitLab ou e-mail

### 2. Crie um Novo Web Service

- No dashboard do Render, clique em "New +" e selecione "Web Service"
- Você pode conectar diretamente a um repositório Git ou fazer upload manual

#### Para conectar a um repositório Git (recomendado)

1. Crie um repositório no GitHub ou GitLab
2. Faça upload dos arquivos do seu projeto para esse repositório
3. No Render, selecione esse repositório para implantação

#### Para fazer upload manual (sem usar Git)

1. No Render, escolha a opção "Upload Files"
2. Faça upload do ZIP do projeto (depois de extrair e ajustar conforme estas instruções)

### 3. Configuração do Web Service

Preencha os campos solicitados pelo Render:

- **Nome**: glosadores-associados (ou outro nome de sua escolha)
- **Ambiente**: Node
- **Região**: Escolha a mais próxima de seus usuários (ex: Frankfurt para Europa)
- **Branch**: main (ou master, dependendo do seu repositório)
- **Comando de build**: `npm install && npm run build`
- **Comando de start**: `NODE_ENV=production node dist/index.js`

### 4. Plano e Publicação

- Selecione o plano gratuito (Free)
- Clique em "Create Web Service"

O Render iniciará o processo de implantação, que pode levar alguns minutos. Quando concluído, o site estará disponível em um domínio `.onrender.com`.

## Arquivos de Configuração

Os seguintes arquivos já foram inclusos neste projeto para facilitar a implantação no Render:

- `render.yaml`: Configuração declarativa para o Render
- `.env`: Configuração de variáveis de ambiente
- `Procfile`: Comandos para iniciar a aplicação

## Observações Importantes

- O site usará a porta fornecida pelo Render automaticamente (variável de ambiente PORT)
- O plano gratuito do Render pode fazer o site "dormir" após 15 minutos de inatividade
- O primeiro acesso após um período de inatividade pode ser um pouco mais lento

## Personalizando o Domínio

Se desejar usar um domínio personalizado em vez do domínio padrão `.onrender.com`:

1. Compre um domínio em um provedor como Namecheap, GoDaddy, etc.
2. No dashboard do Render, acesse seu serviço web
3. Vá para a guia "Settings" e depois "Custom Domain"
4. Siga as instruções para configurar os registros DNS

Observação: Adicionar um domínio personalizado pode exigir um plano pago no Render.
