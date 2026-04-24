# 📤 UPLOAD DIRETO NO GITHUB (SEM GIT)

Você não precisa de Git instalado! Faça upload direto pelo site do GitHub!

---

## 🎯 3 Passos Simples

### **1️⃣ Criar o Repositório**

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `curs`
   - **Description**: `Social Media Downloader - Projeto educativo`
   - **Public**: ✅ Marque
3. Clique: **"Create repository"**

---

### **2️⃣ Fazer Upload dos Arquivos**

Após criar o repositório, você verá uma página com instruções.

**Procure por: "uploading an existing file"** ou **"add file"**

Clique em: **"upload files"** ou **"add file → Upload files"**

---

### **3️⃣ Selecionar Arquivos**

Selecione ESTES 9 ARQUIVOS:

```
✅ downloader_server.py
✅ index.html
✅ requirements.txt
✅ README.md (é o README_GITHUB.md renomeado!)
✅ ARQUITETURA.md
✅ CONTRIBUINDO.md
✅ CHANGELOG.md
✅ LICENSE
✅ .gitignore
```

**TAMBÉM FAÇA UPLOAD DA PASTA:**
```
✅ .github/ (a pasta inteira com workflows e template)
```

---

## ⚠️ IMPORTANTE: Renomear README

**Antes de fazer upload:**

No seu computador, renomeie:
- `README_GITHUB.md` → `README.md`

**Windows:**
- Clique direito no arquivo
- **Renomear**
- Mude para: `README.md`

**Mac/Linux:**
- Clique direito no arquivo
- **Renomear**
- Mude para: `README.md`

---

## 🚀 Passo a Passo Detalhado (COM PRINTS)

### Tela 1: Criar Repositório

```
URL: https://github.com/new

┌─────────────────────────────────┐
│ Create a new repository          │
├─────────────────────────────────┤
│ Repository name: curs           │
│ Description: Social Media...    │
│ ○ Public  ● Private             │
│                                 │
│ ☑ Public (marque!)              │
│                                 │
│ [ Create repository ]           │
└─────────────────────────────────┘
```

### Tela 2: Após Criar

Você verá:
```
Quick setup
https://github.com/seu_usuario/curs.git

...or upload an existing repository from the command line

(Procure por "uploading an existing file")
```

**Clique em: "upload an existing file"** ou **"add file → Upload files"**

### Tela 3: Upload

```
┌──────────────────────────────────┐
│ Drag files here to upload        │
│                                  │
│   ou   [ Choose your files ]     │
└──────────────────────────────────┘
```

**Clique em: "Choose your files"**

Selecione os 9 arquivos + pasta .github

---

## 📋 Arquivos a Enviar (Checklist)

RENOMEADOS OU ORIGINAIS:

✅ downloader_server.py
✅ index.html
✅ requirements.txt
✅ README.md (era README_GITHUB.md - **RENOMEAR!**)
✅ ARQUITETURA.md
✅ CONTRIBUINDO.md
✅ CHANGELOG.md
✅ LICENSE
✅ .gitignore
✅ .github/ (pasta com:)
   ├── workflows/
   │   └── python-app.yml
   └── pull_request_template.md

---

## ❌ NÃO ENVIAR

Não faça upload destes arquivos (são apenas para referência):

- RESUMO_COMPLETO.txt
- PASSOS_PARA_FUNCIONAR.txt
- COMO_RODAR_LOCALMENTE.md
- COPIAR_COLAR.txt
- CHECKLIST_UPLOAD.txt
- PARA_UPLOAD_CURS.md
- _LEIA_ISTO_PRIMEIRO.txt
- QUICK_START_GITHUB.md
- GITHUB_UPLOAD.md
- 00_LEIA_PRIMEIRO.md
- README_GITHUB.md (já foi renomeado para README.md)
- README.md (original - use a versão GitHub)

---

## 🎬 Vídeo do Processo (Sem Git)

Se preferir, o processo é bem visual:

1. Ir para https://github.com/new
2. Preencher formulário
3. Clicar "Create repository"
4. Clicar "add file → Upload files"
5. Arrastar/selecionar 9 arquivos + pasta
6. Clicar "Commit changes"
7. **Pronto!** ✅

---

## ✨ Pronto!

Seu repositório estará em:

```
https://github.com/seu_usuario/curs
```

---

## 🎯 Resumo Visual

```
Seu Computador          GitHub Website
     │                       │
     ├─ downloader_server.py │
     ├─ index.html           │
     ├─ requirements.txt      │
     ├─ README.md            │
     ├─ ARQUITETURA.md       │
     ├─ CONTRIBUINDO.md      │
     ├─ CHANGELOG.md         │
     ├─ LICENSE              │
     ├─ .gitignore           │
     └─ .github/ (pasta)     │
          │                   │
          └──────→ Upload ───→ GitHub
                             (sem Git!)
```

---

## ⚠️ Cuidado Com

### Arquivo .gitignore

O arquivo `.gitignore` começa com **ponto (.)**.

**Cuidado**: Algumas pastas/sistemas não mostram arquivos que começam com ponto.

**Solução**: Verifique se o arquivo está lá na pasta.

Se não conseguir fazer upload do `.gitignore`:
1. Você pode criar ele DEPOIS no GitHub (criar novo arquivo)
2. Copie o conteúdo de .gitignore
3. Crie um arquivo vazio chamado `.gitignore`
4. Cole o conteúdo

---

## 📞 Problemas Comuns

### "Não consigo fazer upload"

Certifique-se de que:
- [ ] Você criou o repositório
- [ ] O repositório está **Public** ✅
- [ ] Você está logado no GitHub
- [ ] Está na página certa (seu repositório)

### "Não consigo fazer upload da pasta .github"

GitHub não permite upload de pastas diretamente pelo navegador.

**Solução**: Crie a pasta DENTRO do GitHub:
1. Clique em **"Add file → Create new file"**
2. Digite: `.github/workflows/python-app.yml`
3. Copie o conteúdo do arquivo
4. Clique: **"Commit new file"**
5. Repita para: `.github/pull_request_template.md`

### "Aparece mensagem de erro"

Tente:
- Recarregar a página (F5)
- Fazer upload de 2-3 arquivos por vez
- Usar outro navegador

---

## 🎉 Depois de Fazer Upload

Seu repositório estará em:

```
https://github.com/seu_usuario/curs
```

Você pode:
- ⭐ Ver seu código online
- 🍴 Compartilhar o link
- 📖 Ver o README.md renderizado
- 📊 Ver as estatísticas

---

## 📝 Checklist Final

- [ ] Criei repositório em GitHub
- [ ] Repository name é "curs"
- [ ] Está como "Public"
- [ ] Renomeei README_GITHUB.md para README.md
- [ ] Selecionei todos os 9 arquivos
- [ ] Fiz upload (com ou sem .github)
- [ ] Verifiquei que ficou no GitHub
- [ ] Consegui acessar: https://github.com/seu_usuario/curs

---

## ✨ Pronto!

Sem Git, sem linha de comando, sem nada complicado!

Just upload and done! 🚀

