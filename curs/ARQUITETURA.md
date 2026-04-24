# 🏗️ Arquitetura do Social Media Downloader

## Diagrama Geral do Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                     NAVEGADOR DO USUÁRIO                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          HTML/CSS/JavaScript (index.html)            │   │
│  │                                                      │   │
│  │  [Input URL] → [Botão Analisar] → [Resultado]       │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTP (JSON)
                       ↓
┌──────────────────────────────────────────────────────────────┐
│              SERVIDOR FLASK (Python)                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  /api/analyze  → Identifica rede social              │   │
│  │  /api/download → Processa download                   │   │
│  │  /api/health   → Status do servidor                  │   │
│  └──────────────────────────────────────────────────────┘   │
│                       ↓                                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │      Classe: SocialMediaDownloader                   │   │
│  │                                                      │   │
│  │  • extract_instagram()                              │   │
│  │  • extract_tiktok()                                 │   │
│  │  • extract_twitter()                                │   │
│  │  • extract_youtube()                                │   │
│  │  • identify_platform()                              │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

## Fluxo de Requisição

```
USUÁRIO INSERE URL
        │
        ↓
┌─────────────────────┐
│  index.html        │
│  addEventListener  │  (Escuta clique do botão)
└─────────────────────┘
        │
        ↓
┌─────────────────────────────────────────┐
│  Validação da URL                       │
│  - Não vazio?                           │
│  - Contém protocolo?                    │
└─────────────────────────────────────────┘
        │
        ↓
┌─────────────────────────────────────────┐
│  POST /api/analyze                      │
│  Corpo: { "url": "https://..." }        │
└─────────────────────────────────────────┘
        │
        ↓
┌─────────────────────────────────────────┐
│  Backend: identify_platform()           │
│  Verifica qual rede social              │
└─────────────────────────────────────────┘
        │
        ↓
┌─────────────────────────────────────────┐
│  Chama método específico:               │
│  • extract_instagram()                  │
│  • extract_tiktok()                     │
│  • etc.                                 │
└─────────────────────────────────────────┘
        │
        ↓
┌─────────────────────────────────────────┐
│  Retorna JSON com análise               │
│  { type, id, method }                   │
└─────────────────────────────────────────┘
        │
        ↓
┌─────────────────────────────────────────┐
│  POST /api/download                     │
│  Corpo: { "url": "https://..." }        │
└─────────────────────────────────────────┘
        │
        ↓
┌─────────────────────────────────────────┐
│  Retorna instruções para download       │
│  { status, analysis, instructions }     │
└─────────────────────────────────────────┘
        │
        ↓
┌─────────────────────────────────────────┐
│  Frontend exibe resultado                │
│  - Rede social detectada                │
│  - Dados extraídos                      │
│  - Próximos passos                      │
└─────────────────────────────────────────┘
```

## Estrutura de Dados (JSON)

### Request para /api/analyze

```json
{
  "url": "https://instagram.com/p/ABC123xyz/"
}
```

### Response de /api/analyze

```json
{
  "type": "instagram",
  "post_id": "ABC123xyz",
  "method": "Seria necessário instagrapi ou Instagram Graph API"
}
```

### Response de /api/download

```json
{
  "status": "ready",
  "analysis": {
    "type": "instagram",
    "post_id": "ABC123xyz",
    "method": "Seria necessário instagrapi ou Instagram Graph API"
  },
  "instructions": "Para instagram:\n1. Usar a biblioteca recomendada\n2. Fazer requisição com autenticação\n3. Extrair URL da mídia\n4. Fazer download do arquivo\n5. Servir ao cliente"
}
```

## Padrões de URL por Rede Social

```
Instagram:
  https://instagram.com/p/ABC123xyz/
  https://instagram.com/reel/ABC123xyz/
  Pattern: /p/ ou /reel/ + ID

TikTok:
  https://tiktok.com/@username/video/123456789
  https://vm.tiktok.com/ABC123/
  Pattern: /video/ + ID

Twitter/X:
  https://twitter.com/username/status/123456789
  https://x.com/username/status/123456789
  Pattern: /status/ + ID

YouTube:
  https://youtube.com/watch?v=dQw4w9WgXcQ
  https://youtu.be/dQw4w9WgXcQ
  https://youtube.com/shorts/dQw4w9WgXcQ
  Pattern: v=ID ou /shorts/ID
```

## Extração com Regex

```python
# Instagram: Extrair ID do post
import re
url = "https://instagram.com/p/ABC123xyz/"
match = re.search(r'/p/([a-zA-Z0-9_-]+)', url)
post_id = match.group(1)  # ABC123xyz

# TikTok: Extrair ID do vídeo
url = "https://tiktok.com/@user/video/123456789"
match = re.search(r'/video/(\d+)', url)
video_id = match.group(1)  # 123456789

# YouTube: Extrair ID do vídeo
url = "https://youtube.com/watch?v=dQw4w9WgXcQ"
match = re.search(r'v=([a-zA-Z0-9_-]{11})', url)
video_id = match.group(1)  # dQw4w9WgXcQ
```

## Configuração CORS (Cross-Origin Resource Sharing)

```python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite requisições de qualquer origem
```

Por quê? O frontend (em `index.html`) e backend (em `localhost:5000`) 
estão em portas diferentes, então CORS é necessário.

## Tratamento de Erros

```
┌─────────────────────────────────────┐
│  Tentar processar URL               │
└─────────────────────────────────────┘
        │
        ├─→ Não é uma rede suportada
        │   └─→ return { error: "Rede social não suportada" }
        │
        ├─→ URL inválida
        │   └─→ return { error: "URL inválida" }
        │
        └─→ Erro ao conectar com API
            └─→ return { error: "Falha na conexão" }
```

## Segurança

### Validação de Entrada
```python
# ✅ BOM
url = data.get('url', '').strip()
if not url or not url.startswith(('http://', 'https://')):
    return {'error': 'URL inválida'}

# ❌ RUIM
url = data.get('url')
# Usar diretamente sem validar
```

### Prevenção de Injection
```python
# ✅ BOM - Usar regex com padrões específicos
match = re.search(r'instagram\.com/p/([a-zA-Z0-9_-]+)', url)

# ❌ RUIM - Substituição direta
url = url.replace('instagram.com', 'meu-servidor.com')
```

### Rate Limiting (Proteção contra Abuso)
```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

@app.route('/api/download')
@limiter.limit("5 per minute")
def download_content():
    # Máximo 5 requisições por minuto por IP
    pass
```

## Próximos Passos para Produção

```
Desenvolvimento         →  Testes  →  Deploy
     ↓
  Local                    ↓           ↓
- Flask dev server    - Unit tests  - Gunicorn
- SQLite BD           - Integration - PostgreSQL
- Upload local        - Load test   - AWS S3
                                    - HTTPS
                                    - Monitoramento
```

---

**Conceito-chave**: Separação entre **apresentação** (HTML/CSS/JS), 
**lógica** (Python/Flask) e **dados** (URLs extraídas).

Isso torna o código mais **modular**, **testável** e **escalável**.
