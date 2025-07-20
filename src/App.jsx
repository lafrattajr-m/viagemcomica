import './App.css'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import { 
  TrendingUp, 
  MapPin, 
  Building2, 
  DollarSign, 
  Users, 
  Star, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Home,
  Briefcase,
  Target
} from 'lucide-react'

// Importar imagens
import joaoPessoaAerial from './assets/joao-pessoa-aerial.webp'
import luxuryInterior from './assets/luxury-interior.webp'
import citySkyline from './assets/city-skyline.jpg'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    valorInvestimento: '',
    tipoInvestimento: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData)
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-lafratta-navy text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-[var(--lafratta-lime)]" />
            <span className="text-xl font-bold">LAFRATTA JR</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm">CRECI PB: 17102-F</span>
            <Button 
              variant="outline" 
              className="border-[var(--lafratta-lime)] text-[var(--lafratta-lime)] hover:bg-[var(--lafratta-lime)] hover:text-[var(--lafratta-navy)]"
            >
              <Phone className="h-4 w-4 mr-2" />
              (83) 9.9357-8751
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${joaoPessoaAerial})` }}
        >
          <div className="absolute inset-0 bg-[var(--lafratta-navy)] bg-opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-[var(--lafratta-lime)] text-[var(--lafratta-navy)] text-lg px-6 py-2">
            Oportunidade Exclusiva
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme Seu Capital em
            <span className="text-[var(--lafratta-lime)]"> Patrimônio Sólido</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Descubra por que investidores experientes estão direcionando seus recursos 
            para João Pessoa e como você pode aproveitar esse momento único de crescimento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-[var(--lafratta-gold)] hover:bg-yellow-500 text-[var(--lafratta-navy)] font-bold px-8 py-4 text-lg"
              onClick={() => document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' })}
            >
              Quero Receber Oportunidades Exclusivas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--lafratta-navy)] px-8 py-4 text-lg"
            >
              Saiba Mais
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--lafratta-lime)]">15+</div>
              <div className="text-sm opacity-80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--lafratta-lime)]">500+</div>
              <div className="text-sm opacity-80">Investidores Assessorados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--lafratta-lime)]">R$ 200M+</div>
              <div className="text-sm opacity-80">Patrimônio Gerenciado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--lafratta-navy)] mb-4">
              5 Razões Irrefutáveis para Investir em João Pessoa Agora
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra por que a capital paraibana é o destino preferido dos investidores inteligentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[var(--lafratta-lime)] mb-4" />
                <CardTitle className="text-[var(--lafratta-navy)]">Crescimento Econômico Acelerado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  João Pessoa registrou crescimento de 8,2% no PIB nos últimos dois anos, 
                  superando a média nacional e impulsionando a demanda por imóveis de qualidade.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <MapPin className="h-12 w-12 text-[var(--lafratta-lime)] mb-4" />
                <CardTitle className="text-[var(--lafratta-navy)]">Localização Estratégica Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Posicionada como portal de entrada do Nordeste, entre Recife e Natal, 
                  com infraestrutura moderna que atrai empresas e novos moradores.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-[var(--lafratta-lime)] mb-4" />
                <CardTitle className="text-[var(--lafratta-navy)]">Valorização Excepcional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Imóveis com valorização média de 12% ao ano nos últimos cinco anos. 
                  Investidores de 2019 já viram seus investimentos valorizarem mais de 60%.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-[var(--lafratta-lime)] mb-4" />
                <CardTitle className="text-[var(--lafratta-navy)]">Diversidade de Oportunidades</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Desde apartamentos de luxo na orla até empreendimentos comerciais, 
                  oferecemos um portfólio diversificado para cada perfil de investidor.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-[var(--lafratta-lime)] mb-4" />
                <CardTitle className="text-[var(--lafratta-navy)]">Assessoria Especializada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Acesso a oportunidades exclusivas, análise detalhada de mercado e 
                  acompanhamento personalizado em cada etapa do investimento.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dados e Estatísticas */}
      <section className="py-20 bg-[var(--lafratta-navy)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Os Números Que Comprovam: João Pessoa é o Destino Certo
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Dados concretos que demonstram o potencial de investimento na capital paraibana
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--lafratta-lime)] mb-2">2,1%</div>
              <div className="text-lg font-semibold mb-2">Crescimento Populacional Anual</div>
              <div className="text-sm opacity-80">+150 mil novos habitantes até 2030</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--lafratta-lime)] mb-2">R$ 2,8B</div>
              <div className="text-lg font-semibold mb-2">Investimentos em Infraestrutura</div>
              <div className="text-sm opacity-80">Projetos públicos e privados em andamento</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--lafratta-lime)] mb-2">7,8%</div>
              <div className="text-lg font-semibold mb-2">Taxa de Desemprego</div>
              <div className="text-sm opacity-80">Uma das menores do Nordeste</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--lafratta-lime)] mb-2">12%</div>
              <div className="text-lg font-semibold mb-2">Valorização Anual Média</div>
              <div className="text-sm opacity-80">Últimos 5 anos no mercado imobiliário</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Investimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--lafratta-navy)] mb-4">
              Seu Portfólio Ideal: Oportunidades para Cada Perfil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversas modalidades de investimento para maximizar seus retornos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--lafratta-lime)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Home className="h-12 w-12 text-[var(--lafratta-lime)]" />
                  <Badge className="bg-[var(--lafratta-lime)] text-[var(--lafratta-navy)]">8-12% a.a.</Badge>
                </div>
                <CardTitle className="text-[var(--lafratta-navy)]">Apartamentos de Alto Padrão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Imóveis premium em bairros nobres como Manaíra, Tambaú e Cabo Branco. 
                  Rentabilidade através de locação com potencial de valorização de 15% anuais.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Renda passiva consistente
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Localização privilegiada
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Alta liquidez
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--lafratta-lime)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Building2 className="h-12 w-12 text-[var(--lafratta-lime)]" />
                  <Badge className="bg-[var(--lafratta-gold)] text-[var(--lafratta-navy)]">40-60% ROI</Badge>
                </div>
                <CardTitle className="text-[var(--lafratta-navy)]">Empreendimentos na Planta</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Oportunidade de adquirir imóveis com desconto de até 30% do valor final, 
                  com financiamento facilitado e retorno excepcional.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Desconto significativo
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Financiamento facilitado
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Alto potencial de retorno
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--lafratta-lime)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Briefcase className="h-12 w-12 text-[var(--lafratta-lime)]" />
                  <Badge className="bg-[var(--lafratta-lime)] text-[var(--lafratta-navy)]">10-14% a.a.</Badge>
                </div>
                <CardTitle className="text-[var(--lafratta-navy)]">Imóveis Comerciais</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Salas comerciais e lojas em centros empresariais. Contratos de longo prazo 
                  garantem rentabilidade estável com valorização patrimonial adicional.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Contratos de longo prazo
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Rentabilidade estável
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Valorização patrimonial
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--lafratta-lime)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <MapPin className="h-12 w-12 text-[var(--lafratta-lime)]" />
                  <Badge className="bg-[var(--lafratta-gold)] text-[var(--lafratta-navy)]">20-35% a.a.</Badge>
                </div>
                <CardTitle className="text-[var(--lafratta-navy)]">Terrenos Estratégicos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Lotes em regiões de expansão urbana com potencial excepcional de valorização. 
                  Ideal para crescimento patrimonial de longo prazo.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Menor investimento inicial
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Alto potencial de valorização
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-[var(--lafratta-lime)] mr-2" />
                    Longo prazo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre o Especialista */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={luxuryInterior} 
                alt="Marcos Lafratta Jr - Especialista em Investimento Imobiliário"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <Badge className="mb-4 bg-[var(--lafratta-lime)] text-[var(--lafratta-navy)]">
                Especialista Certificado
              </Badge>
              
              <h2 className="text-4xl font-bold text-[var(--lafratta-navy)] mb-6">
                Marcos Lafratta Jr: Sua Garantia de Sucesso
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Com mais de 15 anos dedicados ao mercado imobiliário paraibano, Marcos Lafratta Jr 
                construiu uma reputação sólida baseada em resultados excepcionais para seus clientes investidores.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[var(--lafratta-gold)] mr-3" />
                  <span>CRECI-PB: 17102-F - Registro Profissional Ativo</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[var(--lafratta-gold)] mr-3" />
                  <span>500+ Investidores Assessorados com Sucesso</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[var(--lafratta-gold)] mr-3" />
                  <span>R$ 200+ Milhões em Patrimônio Gerenciado</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[var(--lafratta-gold)] mr-3" />
                  <span>Especialização em Análise de Investimentos</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-[var(--lafratta-navy)] hover:bg-blue-900 text-white"
                onClick={() => document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' })}
              >
                Quero Falar com o Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Captação */}
      <section id="formulario" className="py-20 bg-[var(--lafratta-navy)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Receba Oportunidades Exclusivas de Investimento
              </h2>
              <p className="text-xl opacity-90">
                Preencha o formulário e tenha acesso prioritário às melhores oportunidades do mercado
              </p>
            </div>
            
            <Card className="bg-white text-[var(--lafratta-navy)]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                      <Input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone/WhatsApp *</label>
                      <Input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(83) 9.9999-9999"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Valor Disponível para Investimento</label>
                      <select
                        name="valorInvestimento"
                        value={formData.valorInvestimento}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--lafratta-lime)] focus:border-transparent"
                      >
                        <option value="">Selecione uma faixa</option>
                        <option value="ate-100k">Até R$ 100.000</option>
                        <option value="100k-300k">R$ 100.000 - R$ 300.000</option>
                        <option value="300k-500k">R$ 300.000 - R$ 500.000</option>
                        <option value="500k-1m">R$ 500.000 - R$ 1.000.000</option>
                        <option value="acima-1m">Acima de R$ 1.000.000</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Investimento de Interesse</label>
                    <select
                      name="tipoInvestimento"
                      value={formData.tipoInvestimento}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--lafratta-lime)] focus:border-transparent"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="apartamentos">Apartamentos de Alto Padrão</option>
                      <option value="na-planta">Empreendimentos na Planta</option>
                      <option value="comerciais">Imóveis Comerciais</option>
                      <option value="terrenos">Terrenos Estratégicos</option>
                      <option value="todos">Todos os Tipos</option>
                    </select>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-[var(--lafratta-gold)] hover:bg-yellow-500 text-[var(--lafratta-navy)] font-bold px-12 py-4 text-lg"
                    >
                      Quero Receber Oportunidades Exclusivas
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-[var(--lafratta-lime)]" />
                <span className="text-xl font-bold">LAFRATTA JR</span>
              </div>
              <p className="text-gray-400 mb-4">
                Especialista em investimentos imobiliários em João Pessoa. 
                Transformando capital em patrimônio sólido há mais de 15 anos.
              </p>
              <p className="text-sm text-gray-500">CRECI PB: 17102-F</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-[var(--lafratta-lime)]" />
                  <span>(83) 9.9357-8751</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[var(--lafratta-lime)]" />
                  <span>marcos@lafrattajr.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-[var(--lafratta-lime)]" />
                  <span>João Pessoa, PB</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Importantes</h3>
              <div className="space-y-2">
                <a href="https://lafrattajr.com" className="block text-gray-400 hover:text-[var(--lafratta-lime)] transition-colors">
                  Site Principal
                </a>
                <a href="#" className="block text-gray-400 hover:text-[var(--lafratta-lime)] transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-gray-400 hover:text-[var(--lafratta-lime)] transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Lafratta Jr. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

