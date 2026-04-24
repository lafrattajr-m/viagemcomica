"""
Servidor Flask - Baixador de Vídeos e Fotos de Redes Sociais
Exemplo educativo mostrando os conceitos principais
"""

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import requests
import re
import json
from urllib.parse import urlparse
import os
from io import BytesIO

app = Flask(__name__)
CORS(app)

# ============================================
# ESTRATÉGIAS DE EXTRAÇÃO POR REDE SOCIAL
# ============================================

class SocialMediaDownloader:
    """Classe que centraliza a lógica de extração"""
    
    @staticmethod
    def extract_instagram(url):
        """
        Extrai informações do Instagram
        
        Nota: No mundo real, você usaria a biblioteca 'instagrapi'
        pip install instagrapi
        """
        try:
            # Exemplo simplificado - mostra o conceito
            post_id = url.split('/')[-2]
            return {
                'type': 'instagram',
                'post_id': post_id,
                'method': 'Seria necessário instagrapi ou Instagram Graph API'
            }
        except Exception as e:
            return {'error': str(e)}
    
    @staticmethod
    def extract_tiktok(url):
        """
        Extrai vídeo do TikTok
        
        Nota: Usar biblioteca 'TikTokApi' ou similar
        pip install TikTok-Api
        """
        try:
            # Padrão regex para encontrar o ID do vídeo
            match = re.search(r'tiktok\.com/@[\w\.]+/video/(\d+)', url)
            if match:
                video_id = match.group(1)
                return {
                    'type': 'tiktok',
                    'video_id': video_id,
                    'method': 'Biblioteca externa recomendada'
                }
        except Exception as e:
            return {'error': str(e)}
    
    @staticmethod
    def extract_twitter(url):
        """
        Extrai mídia do Twitter/X
        
        Nota: Usar 'tweepy' ou Twitter API v2
        pip install tweepy
        """
        try:
            # Padrão para tweets com mídia
            match = re.search(r'twitter\.com/\w+/status/(\d+)', url)
            if match:
                tweet_id = match.group(1)
                return {
                    'type': 'twitter',
                    'tweet_id': tweet_id,
                    'method': 'Tweepy ou Twitter API v2'
                }
        except Exception as e:
            return {'error': str(e)}
    
    @staticmethod
    def extract_youtube(url):
        """
        Extrai informações do YouTube
        
        Nota: Usar 'yt-dlp' para downloads
        pip install yt-dlp
        """
        try:
            # Padrão para vários formatos de YouTube
            patterns = [
                r'youtube\.com/watch\?v=([a-zA-Z0-9_-]{11})',
                r'youtu\.be/([a-zA-Z0-9_-]{11})',
                r'youtube\.com/shorts/([a-zA-Z0-9_-]{11})'
            ]
            
            for pattern in patterns:
                match = re.search(pattern, url)
                if match:
                    video_id = match.group(1)
                    return {
                        'type': 'youtube',
                        'video_id': video_id,
                        'method': 'yt-dlp é a melhor solução'
                    }
        except Exception as e:
            return {'error': str(e)}
    
    @classmethod
    def identify_platform(cls, url):
        """Identifica qual rede social é e chama o método apropriado"""
        url = url.strip().lower()
        
        if 'instagram' in url:
            return cls.extract_instagram(url)
        elif 'tiktok' in url:
            return cls.extract_tiktok(url)
        elif 'twitter' in url or 'x.com' in url:
            return cls.extract_twitter(url)
        elif 'youtube' in url or 'youtu.be' in url:
            return cls.extract_youtube(url)
        else:
            return {'error': 'Rede social não suportada'}


# ============================================
# ROTAS DA API
# ============================================

@app.route('/api/analyze', methods=['POST'])
def analyze_url():
    """
    Endpoint que recebe uma URL e retorna informações
    sobre como baixar o conteúdo
    """
    data = request.json
    url = data.get('url', '')
    
    if not url:
        return jsonify({'error': 'URL não fornecida'}), 400
    
    result = SocialMediaDownloader.identify_platform(url)
    return jsonify(result)


@app.route('/api/download', methods=['POST'])
def download_content():
    """
    Endpoint que simula o download
    (Em produção, faria o download real)
    """
    data = request.json
    url = data.get('url', '')
    
    analysis = SocialMediaDownloader.identify_platform(url)
    
    # Simulação de resposta
    response = {
        'status': 'ready',
        'analysis': analysis,
        'instructions': f"""
        Para {analysis.get('type', 'essa rede social')}:
        1. Usar a biblioteca recomendada
        2. Fazer requisição com autenticação
        3. Extrair URL da mídia
        4. Fazer download do arquivo
        5. Servir ao cliente
        """
    }
    
    return jsonify(response)


@app.route('/api/health', methods=['GET'])
def health():
    """Verificar se o servidor está rodando"""
    return jsonify({'status': 'ok', 'message': 'Servidor pronto para downloads'}), 200


if __name__ == '__main__':
    print("""
    ╔════════════════════════════════════════════════╗
    ║   Social Media Downloader - Servidor Flask     ║
    ║   Rodando em http://localhost:5000             ║
    ╚════════════════════════════════════════════════╝
    
    Endpoints disponíveis:
    - POST /api/analyze  → Analisa URL
    - POST /api/download → Baixa conteúdo
    - GET  /api/health   → Status do servidor
    """)
    app.run(debug=True, port=5000)
