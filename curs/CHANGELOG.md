# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-XX

### Added
- ✨ Backend Flask com suporte para Instagram, TikTok, Twitter e YouTube
- ✨ Interface web moderna e responsiva
- ✨ Extração de URLs usando Regex
- ✨ Documentação completa em ARQUITETURA.md
- 📖 README com guia passo a passo
- 🤝 Arquivo CONTRIBUINDO.md para colaboradores
- 🔒 Arquivo .gitignore para Git

### Fixed
- 🐛 Tratamento de erro ao URL não reconhecida

### Security
- 🔐 Validação de entrada de URLs
- 🔐 CORS configurado apenas para localhost em dev

---

## Como Versionamento Semântico Funciona

**MAJOR.MINOR.PATCH** (ex: 1.2.3)

- **MAJOR** (1.0.0 → 2.0.0): Mudanças quebram compatibilidade
- **MINOR** (1.0.0 → 1.1.0): Nova feature compatível
- **PATCH** (1.0.0 → 1.0.1): Bug fix

### Exemplos:
- `feat: adiciona suporte Pinterest` → Minor
- `fix: corrige regex Instagram` → Patch
- `feat!: muda API completamente` → Major

---

## Convenção de Commits

Use prefixos para organizar o changelog:

```
feat:  Nova feature
fix:   Bug fix
docs:  Documentação
style: Formatação (sem lógica)
test:  Testes
perf:  Performance
chore: Tarefas gerais
refactor: Refatoração de código
```

Exemplo: `git commit -m "feat: adiciona suporte para Pinterest"`

---

## Template para Novas Versões

```markdown
## [X.X.X] - YYYY-MM-DD

### Added
- ✨ (novas features)

### Changed
- 🔄 (mudanças em features existentes)

### Deprecated
- ⚠️ (features que serão removidas)

### Removed
- 🗑️ (features removidas)

### Fixed
- 🐛 (bug fixes)

### Security
- 🔐 (correções de segurança)
```

---

**Última atualização: 2024-01-XX**
