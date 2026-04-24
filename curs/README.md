# 📥 Social Media Downloader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-2.3.3-green.svg)](https://flask.palletsprojects.com/)
[![Status](https://img.shields.io/badge/Status-Ativo-brightgreen.svg)](#)

Um projeto educativo que ensina como criar um **baixador de vídeos e fotos** de redes sociais usando Python, Flask e JavaScript vanilla.

**Perfeito para aprender:** APIs REST, Web Scraping, Frontend/Backend, Regex, CORS e muito mais! 🎓

---

## 🌟 Features

- ✅ Suporte para **Instagram, TikTok, Twitter/X e YouTube**
- ✅ Interface web **moderna e responsiva**
- ✅ Backend **robusto em Flask**
- ✅ Extração de URLs com **Regex**
- ✅ **CORS configurado** para comunicação entre frontend e backend
- ✅ Documentação **completa e educativa**
- ✅ Fácil de **expandir com novas redes sociais**

---

## 📸 Preview

![Interface do Social Media Downloader](https://via.placeholder.com/600x400?text=Social+Media+Downloader)

*Uma interface bonita e intuitiva para analisar URLs de redes sociais.*

---

## 🚀 Quick Start

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/SEU_USUARIO/social-media-downloader.git
cd social-media-downloader
```

### 2️⃣ Instale as Dependências

```bash
pip install -r requirements.txt
```

### 3️⃣ Inicie o Servidor

```bash
python downloader_server.py
```

Você verá:
```
╔════════════════════════════════════════════════╗
║   Social Media Downloader - Servidor Flask     ║
║   Rodando em http://localhost:5000             ║
╚════════════════════════════════════════════════╝
```

### 4️⃣ Abra no Navegador

Simplesmente abra o arquivo `index.html` no seu navegador ou use:

```bash
# No mesmo diretório
python -m http.server 8000
# Depois acesse: http://localhost:8000
```

---

## 📚 Documentação

| Arquivo | Descrição |
|---------|-----------|
| **[README.md](README.md)** | Guia completo com exemplos |
| **[ARQUITETURA.md](ARQUITETURA.md)** | Diagramas e explicação técnica |
| **[CONTRIBUINDO.md](CONTRIBUINDO.md)** | Como contribuir ao projeto |
| **[CHANGELOG.md](CHANGELOG.md)** | Histórico de versões |

---

## 🎯 Como Funciona

### Fluxo Básico

```
Usuário insere URL
    ↓
Frontend valida e envia para Backend
    ↓
Backend identifica rede social
    ↓
Extrai ID usando Regex
    ↓
Retorna informações extraídas
    ↓
Frontend exibe resultado
```

### Exemplo Prático

```python
# URL do Instagram
https://instagram.com/p/ABC123xyz/

# Código extrai:
{
  "type": "instagram",
  "post_id": "ABC123xyz",
  "method": "Use instagrapi library"
}
```

---

## 🛠️ Tecnologias

### Backend
- **Flask 2.3.3** - Microframework web
- **Flask-CORS** - Suporte a CORS
- **Python 3.8+** - Linguagem

### Frontend
- **HTML5** - Estrutura
- **CSS3** - Estilo (com Flexbox/Grid)
- **JavaScript (Vanilla)** - Interatividade
- **Fetch API** - Comunicação com backend

### Ferramentas
- **Regex** - Extração de padrões
- **JSON** - Troca de dados

---

## 📁 Estrutura do Projeto

```
social-media-downloader/
├── downloader_server.py      # 🐍 Backend Flask
├── index.html                # 🎨 Interface web
├── requirements.txt          # 📦 Dependências Python
├── .gitignore               # 🚫 Arquivos ignorados no Git
├── LICENSE                   # 📄 MIT License
├── README.md                 # 📖 Este arquivo
├── ARQUITETURA.md           # 🏗️ Documentação técnica
├── CONTRIBUINDO.md          # 🤝 Guia de contribuição
└── CHANGELOG.md             # 📝 Histórico de versões
```

---

## 🎓 O que você Aprende

### Conceitos Técnicos
- ✅ RESTful APIs
- ✅ Python + Flask
- ✅ Regex (Expressões Regulares)
- ✅ CORS (Cross-Origin Resource Sharing)
- ✅ Fetch API
- ✅ JSON
- ✅ Frontend/Backend separation

### Boas Práticas
- ✅ Validação de entrada
- ✅ Tratamento de erros
- ✅ Código modular e reutilizável
- ✅ Documentação clara
- ✅ Git workflow

---

## 🔌 Extensões Suportadas

Fácil adicionar novas redes sociais! Veja como:

```python
# No downloader_server.py

@staticmethod
def extract_facebook(url):
    """Extrai dados do Facebook"""
    match = re.search(r'facebook\.com/.+/videos/(\d+)', url)
    if match:
        video_id = match.group(1)
        return {
            'type': 'facebook',
            'video_id': video_id,
            'method': 'facebook-sdk'
        }

# No método identify_platform():
elif 'facebook' in url:
    return cls.extract_facebook(url)
```

---

## ⚠️ Importante

### ⚖️ Considerações Legais

Este é um **projeto educativo**. Ao usar para download de conteúdo:

- ✅ **Permitido**: Baixar seu próprio conteúdo
- ❌ **Proibido**: Violar direitos autorais
- ⚠️ **Verificar**: Termos de Serviço de cada rede

### 🔐 Segurança

- Nunca armazene credenciais em código
- Use variáveis de ambiente (`.env`)
- Valide sempre inputs do usuário
- Implemente rate limiting em produção

---

## 🚀 Próximos Passos

### Para Aprender
1. Estude o código em `downloader_server.py`
2. Leia `ARQUITETURA.md` para entender o fluxo
3. Teste com diferentes URLs
4. Adicione uma nova rede social

### Para Produção
1. Implementar downloads reais com bibliotecas apropriadas
2. Adicionar autenticação de usuários
3. Implementar banco de dados
4. Deploy em servidor (Heroku, AWS, etc)
5. Adicionar testes automatizados

---

## 🤝 Como Contribuir

Adoraríamos sua contribuição! Veja [CONTRIBUINDO.md](CONTRIBUINDO.md) para:

- 🐛 Reportar bugs
- ✨ Sugerir features
- 🔧 Enviar Pull Requests
- 📖 Melhorar documentação

### Rápido Contribuir

```bash
# 1. Fork o repositório
# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/social-media-downloader.git

# 3. Crie uma branch
git checkout -b feature/minha-feature

# 4. Faça alterações e commit
git add .
git commit -m "feat: descrição clara"

# 5. Push e abra Pull Request
git push origin feature/minha-feature
```

---

## 💬 Dúvidas?

- 📖 Leia a [documentação](ARQUITETURA.md)
- 🐛 Abra uma [Issue](../../issues)
- 💡 Sugira uma [Feature](../../issues/new)

---

## 📄 Licença

Este projeto está sob a **MIT License** - veja [LICENSE](LICENSE) para detalhes.

Você é livre para usar, modificar e distribuir este projeto! 🎉

---

## ⭐ Apoie o Projeto

Se este projeto foi útil, considere:

- ⭐ Dar uma estrela no GitHub
- 🍴 Fazer um fork
- 💬 Compartilhar feedback
- 🤝 Contribuir com código

---

## 👨‍💻 Desenvolvido com ❤️

Projeto educativo criado para ensinar desenvolvimento web e web scraping.

**Mantenedor**: [Seu Nome](https://github.com/seu-usuario)

---

## 📚 Recursos Úteis

- [Flask Documentation](https://flask.palletsprojects.com/)
- [Python Regex Tutorial](https://www.regular-expressions.info/)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Instagrapi Library](https://subzerofx.github.io/instagrapi/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)

---

**Última atualização**: Janeiro 2024 | **Versão**: 1.0.0

