# 🤝 Contribuindo

Obrigado por ter interesse em contribuir! Aqui estão as diretrizes.

## Como Contribuir

### 1. Fork o Repositório
```bash
# Clique em "Fork" no GitHub
```

### 2. Clone seu Fork
```bash
git clone https://github.com/SEU_USUARIO/social-media-downloader.git
cd social-media-downloader
```

### 3. Crie uma Branch
```bash
# Para feature nova
git checkout -b feature/minha-feature

# Para bug fix
git checkout -b fix/meu-bug
```

### 4. Faça as Alterações
- Mantenha o código limpo
- Siga o PEP 8 para Python
- Adicione comentários quando necessário

### 5. Commit
```bash
git add .
git commit -m "Descrição clara da mudança"
# Exemplos:
# "feat: adiciona suporte para Pinterest"
# "fix: corrige erro de CORS"
# "docs: atualiza README"
```

### 6. Push para sua Branch
```bash
git push origin feature/minha-feature
```

### 7. Abra um Pull Request
- Descreva as mudanças claramente
- Referencie issues relacionadas (se houver)

## Padrões de Código

### Python
```python
# Use type hints
def extract_instagram(url: str) -> dict:
    """Extrai informações do Instagram."""
    pass

# Docstrings
def minha_funcao():
    """
    Descrição breve.
    
    Returns:
        dict: Descrição do retorno
    """
    pass
```

### JavaScript
```javascript
// Use async/await
async function analyzeURL(url) {
    try {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            body: JSON.stringify({ url })
        });
        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
    }
}
```

## Bugs e Features

### Reportar Bug
1. Abra uma Issue com título descritivo
2. Descreva o comportamento esperado vs atual
3. Adicione prints ou logs se possível
4. Liste seu ambiente (OS, Python version, etc)

### Sugerir Feature
1. Abra uma Issue com a sugestão
2. Descreva o caso de uso
3. Explique por que seria útil
4. Sugira implementação (se souber)

## Revisão de Código

Seu PR será revisado considerando:
- ✅ Código funciona corretamente
- ✅ Segue os padrões do projeto
- ✅ Tem testes (se aplicável)
- ✅ Documentação está clara
- ✅ Sem quebra de compatibilidade

## Dúvidas?

- Abra uma Issue com a tag `question`
- Comente no Pull Request
- Entre em contato via Issues

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a MIT License.

---

**Obrigado por contribuir! 🙌**
