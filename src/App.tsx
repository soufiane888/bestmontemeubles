import React, { useState } from 'react';
import logo from './images/logo.png';
import bestmontemeubles6 from './images/bestmontemeubles6.png';
import bestmontemeubles5 from './images/bestmontemeubles5.png';
import { Phone, Mail, MapPin, Star, ArrowRight, Menu, ShieldCheck, ThumbsUp, X} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-50 shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">  
            <img src={logo} alt="Logo du site" width={150} />
              {/* <span className="text-xl font-semibold text-gray-900">Bestmontemeuble</span> */}
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Accueil</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">Qui sommes-nous</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600">Pourquoi nous choisir</a>
              <a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Témoignages</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
              <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                0750068342
              </a>
            </div>
            <button 
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
            </div>
            </div>
            {/* Menu mobile */}
        <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 py-3 space-y-3">
            <a href="#" onClick={closeMenu} className="block text-gray-600 hover:text-blue-600 py-2">Accueil</a>
            <a href="#about" onClick={closeMenu} className="block text-gray-600 hover:text-blue-600 py-2">Qui sommes-nous</a>
            <a href="#services" onClick={closeMenu} className="block text-gray-600 hover:text-blue-600 py-2">Pourquoi nous choisir</a>
            <a href="#blog" onClick={closeMenu} className="block text-gray-600 hover:text-blue-600 py-2">Blog</a>
            <a href="#testimonials" onClick={closeMenu} className="block text-gray-600 hover:text-blue-600 py-2">Témoignages</a>
            <a href="#contact" onClick={closeMenu} className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-center">
              Devis gratuit
            </a>
          </div>
         
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 h-screen">
        <div className="absolute inset-0">
          <img 
            src={bestmontemeubles5}
            alt="Monte-meuble en action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-600/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Best Monte Meubles</h1>

            <h2 className="text-4xl font-bold mb-6 leading-tight">Votre mobilier prend de la hauteur, nous prenons soin du reste.</h2>
            <p className="text-2xl mb-8 text-gray-200">Le monte-meuble pro, rapide et sécurisé à Paris & IDF.</p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-green-700 text-white px-8 py-4 rounded-md inline-flex items-center transition-colors">
                Devis gratuit <ArrowRight className="ml-2" />
              </a>
              <a href="#about" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-md inline-flex items-center transition-colors">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Qui sommes-nous */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Qui sommes-nous ?</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chez BEST MONTE MEUBLES, nous mettons à votre disposition des équipements de qualité pour faciliter le transport de vos meubles en hauteur, partout en région parisienne. Que vous soyez un particulier ou un professionnel, notre matériel vous permet d’intervenir en toute sécurité, même dans les zones difficiles d’accès : cours intérieures, étages élevés, rues étroites, etc.
                Nous proposons une large gamme de monte-meubles adaptés à chaque situation, capables d’atteindre jusqu’au 7ème étage. Échelles élévatrices, monte-matériaux ou monte-meubles avec technicien : nos solutions sont conçues pour s’adapter à tous les types d’accessibilité, à Paris comme en banlieue.
                Faites confiance à notre expertise pour un déménagement rapide, efficace et sans risques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous nous engageons à fournir un service de qualité supérieure, adapté à vos besoins spécifiques,
                avec une attention particulière portée à la sécurité et à la satisfaction client.
              </p>
            </div>
            <div className="relative left-20">
              <img 
                src={bestmontemeubles6}
                alt="Équipe Best Monte Meuble"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-14 bg-green-500 text-white p-6 rounded-lg">
                <p className="text-xl font-bold">Une expertise</p>
                <p className="text-sm">de plusieurs années</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Pourquoi nous choisir ?</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                {/* <Truck className="w-8 h-8 text-purple-600" /> */}
                <ShieldCheck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Qualité</h3>
              <p className="text-gray-600">Monte-meubles dernière génération pour une efficacité maximale et une sécurité optimale</p>
            </div>
            <div className="bg-yellow-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <ThumbsUp className="w-8 h-8 text-red-600"/>
                {/* <CheckCircle className="w-8 h-8 text-purple-600" /> */}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Expertise reconnue</h3>
              <p className="text-gray-600">Plusieurs années d'expérience et des milliers de clients satisfaits en Île-de-France</p>
            </div>
            <div className="bg-red-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Couverture complète</h3>
              <p className="text-gray-600">Intervention dans toute l'Île-de-France avec rapidité et flexibilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog - Nos interventions */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Nos dernières interventions</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">Découvrez nos réalisations récentes à travers la région Île-de-France</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Intervention monte-meuble Paris"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Déménagement à Paris 18ème</h3>
                <p className="text-gray-600 mb-4">Installation d'un canapé d'angle au 6ème étage sans ascenseur</p>
                <p className="text-sm text-gray-500">Réalisé le 15 mars 2024</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Intervention monte-meuble Neuilly"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Livraison à Neuilly-sur-Seine</h3>
                <p className="text-gray-600 mb-4">Montée d'une armoire design par monte-meuble</p>
                <p className="text-sm text-gray-500">Réalisé le 10 mars 2024</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Intervention monte-meuble Versailles"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Déménagement à Versailles</h3>
                <p className="text-gray-600 mb-4">Transport sécurisé d'un piano par monte-meuble</p>
                <p className="text-sm text-gray-500">Réalisé le 5 mars 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ce que disent nos clients</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie M.",
                text: "Service impeccable ! L'équipe a été très professionnelle et efficace. Je recommande vivement leurs services pour tout type de déménagement.",
                rating: 5
              },
              {
                name: "Pierre D.",
                text: "Rapide, ponctuel et soigneux. Le monte-meuble a permis de déménager mon canapé au 5ème étage sans ascenseur en toute sécurité.",
                rating: 5
              },
              {
                name: "Marie L.",
                text: "Excellent rapport qualité-prix. Équipe très sympathique et professionnelle. Ils ont su gérer mon déménagement avec expertise.",
                rating: 5
              }
            ].map((avis, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(avis.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{avis.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">{avis.name[0]}</span>
                  </div>
                  <p className="ml-4 font-semibold text-gray-900">{avis.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">Demandez un devis gratuit</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Contactez-nous pour obtenir un devis personnalisé pour vos besoins de déménagement vertical.
                Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="text-lg font-semibold">0750068352</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-semibold">bestmontemeubles@yahoo.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Zone d'intervention</p>
                    <p className="text-lg font-semibold">Île-de-France</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">Adresse</label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-green-700 text-white px-8 py-4 rounded-md inline-flex items-center justify-center transition-colors"
                  >
                    Envoyer la demande
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <span className="ml-2 text-xl font-semibold">Best Monte Meuble</span>
              </div>
              <p className="text-gray-400">
                Votre spécialiste du monte-meuble en Île-de-France depuis plus.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Accueil</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-400">Qui sommes-nous</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-purple-400">Pourquoi nous choisir</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-purple-400">Blog</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-purple-400">Témoignages</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2 text-purple-400" /> 07 50 06 83 52
                </p>
                <p className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2 text-purple-400" /> bestmontemeubles@yahoo.com
                </p>
                <p className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2 text-purple-400" /> Île-de-France
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Horaires</h3>
              <div className="text-gray-400">
                <p className="mb-2">Lundi - Vendredi : 8h - 19h</p>
                <p className="mb-2">Samedi : 9h - 18h</p>
                <p>Dimanche : Sur rendez-vous</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Best Monte Meuble. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;