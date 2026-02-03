import { useState, useEffect } from 'react'
import logo from './assets/Ar-Logo.png'
import idlyImage from './assets/idly.png'
import plainDosa from './assets/plain-dosa.png'
import masalaDosa from './assets/masala-dosa.png'
import vada from './assets/vada.png'
import upma from './assets/upma.png'
import puri from './assets/puri.png'
import coffee from './assets/coffee.png'
import punugulu from './assets/punugulu.png'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      try {
        setIsScrolled(window.scrollY > 20)
        
        // Update active section based on scroll position
        const sections = ['home', 'menu', 'office', 'about', 'contact']
        const scrollPosition = window.scrollY + 100
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      } catch (error) {
        console.error('Error in scroll handler:', error)
      }
    }
    
    // Handle escape key to close mobile menu
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('keydown', handleEscape)
    handleScroll() // Set initial state
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const scrollTo = (id) => {
    try {
    const element = document.querySelector(id)
    if (element) {
      const offset = 80
      const position = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: position, behavior: 'smooth' })
      setIsMenuOpen(false)
      }
    } catch (error) {
      console.error('Error scrolling to section:', error)
    }
  }

  const menuItems = {
    morning: [
      { name: 'Idly', nameTelugu: 'ఇడ్లీ', price: '₹30', image: idlyImage },
      { name: 'Plain Dosa', nameTelugu: 'ప్లెయిన్ దోస', price: '₹30', image: plainDosa },
      { name: 'Onion/Masala Dosa', nameTelugu: 'ఉల్లిపాయ/మసాలా దోస', price: '₹35', image: masalaDosa },
      { name: 'Vada', nameTelugu: 'వడ', price: '₹35', image: vada },
      { name: 'Upma', nameTelugu: 'ఉప్మా', price: '₹35', image: upma },
      { name: 'Poori', nameTelugu: 'పూరి', price: '₹35', image: puri },
    ],
    evening: [
      { name: 'Idly', nameTelugu: 'ఇడ్లీ', price: '₹30', image: idlyImage },
      { name: 'Punugulu', nameTelugu: 'పునుగులు', price: '₹30', image: punugulu },
      { name: 'Vada', nameTelugu: 'వడ', price: '₹35', image: vada },
      { name: 'Filter Coffee', nameTelugu: 'ఫిల్టర్ కాఫీ', price: '₹25', image: coffee },
    ]
  }

  const whatsappNumber = '919923214340'
  const phoneNumber = '+91 9923214340'

  // WhatsApp SVG icon
  const WhatsAppIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-beige-50/98 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-beige-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => scrollTo('#home')} 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="h-14 w-14 rounded-xl bg-white shadow-md border border-gray-100 p-1.5 flex items-center justify-center">
                <img src={logo} alt="Arogyaharam" className="h-full w-full object-contain" />
              </div>
              <div className="text-left">
                <div className="text-base font-bold text-gray-900 font-telugu">ఆరోగ్యహరం</div>
                <div className="text-xs text-gray-600 font-medium">Arogyaharam</div>
              </div>
            </button>
            
            <div className="hidden md:flex items-center gap-8">
              {['home', 'menu', 'office', 'about', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollTo(`#${section}`)} 
                  className={`text-sm font-semibold transition-all relative ${
                    activeSection === section ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {section === 'home' ? 'Home' : section === 'menu' ? 'Menu' : section === 'office' ? 'Office Plans' : section === 'about' ? 'About' : 'Contact'}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"></span>
                  )}
              </button>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div 
              className="md:hidden py-4 border-t border-gray-200 space-y-2 animate-fadeIn"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              {[
                { id: 'home', label: 'Home' },
                { id: 'menu', label: 'Menu' },
                { id: 'office', label: 'Office Plans' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => { scrollTo(`#${item.id}`); setIsMenuOpen(false); }} 
                  className="block w-full text-left py-3 px-4 text-base text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors font-medium"
                  role="menuitem"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20 min-h-screen flex items-center" aria-label="Home section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 font-telugu leading-[1.1]">
                    ఆరోగ్యహరం
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-6 font-normal">
                    Arogyaharam
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg md:text-xl text-gray-800 font-telugu leading-relaxed font-medium">
                    శుద్ధమైన ఆహారం • తక్కువ నూనె • అమ్మ చేతి రుచి
                  </p>
                  <p className="text-base md:text-lg text-gray-600">
                    Pure food • Less oil • Homely taste
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => scrollTo('#menu')} 
                  className="bg-primary-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Today's Menu
                </button>
                <button 
                  onClick={() => scrollTo('#office')}
                  className="bg-white text-primary-600 border-2 border-primary-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-primary-50 hover:border-primary-700 transition-all shadow-sm hover:shadow-md"
                >
                  Office / College Plans
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">7+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold">Menu Items</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">2x</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold">Daily Service</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold">Fresh Daily</div>
                </div>
              </div>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                  <img 
                    src={idlyImage} 
                    alt="Idly - Traditional South Indian breakfast" 
                    className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                  <img 
                    src={masalaDosa} 
                    alt="Masala Dosa - Spiced South Indian crepe" 
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                  <img 
                    src={plainDosa} 
                    alt="Plain Dosa - Crispy South Indian crepe" 
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                  <img 
                    src={vada} 
                    alt="Vada - Savory South Indian donut" 
                    className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-white to-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Why Choose Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Built on trust, consistency, and traditional values
            </p>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary-200 transition-colors">
                <span className="text-xl sm:text-2xl">🍽️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-700 transition-colors">
                Open Kitchen
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Watch your food being prepared fresh. Complete transparency in every step.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary-200 transition-colors">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-700 transition-colors">
                Fixed Recipes
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Same taste every time. You know what to expect.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary-200 transition-colors">
                <span className="text-xl sm:text-2xl">🌅</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-700 transition-colors">
                Fresh Daily
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                No preservatives. No leftovers. Prepared fresh every morning with pure ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Today's Menu</h1>
            <p className="text-base md:text-lg text-gray-600">Same chutney & sambar for consistency</p>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-14">
            {/* Morning Menu */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Morning</h2>
                    <p className="text-base text-gray-600 mt-1 font-medium">8:00 AM - 10:30 AM</p>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {menuItems.morning.map((item, i) => (
                  <div key={`morning-${i}`} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="h-48 sm:h-56 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={`${item.name} - ${item.nameTelugu}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-lg text-base font-bold shadow-lg">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-1.5 group-hover:text-primary-700 transition-colors">
                    {item.name}
                  </h3>
                      <p className="text-sm text-gray-600 font-telugu font-medium">{item.nameTelugu}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evening Menu */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Evening</h2>
                    <p className="text-base text-gray-600 mt-1 font-medium">6:00 PM - 9:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {menuItems.evening.map((item, i) => (
                  <div key={`evening-${i}`} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="h-48 sm:h-56 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={`${item.name} - ${item.nameTelugu}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-lg text-base font-bold shadow-lg">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-1.5 group-hover:text-primary-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-telugu font-medium">{item.nameTelugu}</p>
                </div>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office / Bulk Orders Section */}
      <section id="office" className="py-16 bg-beige-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Office / College Breakfast Plans</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">Reliable, consistent, hygienic breakfast delivery for your team. Start your day right with traditional South Indian breakfast.</p>
            <div className="w-24 h-1.5 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-2xl p-6 sm:p-8 text-white">
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-semibold">Best Value</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold">₹60</span>
                  <span className="text-lg text-primary-100">/person/day</span>
                </div>
                <p className="text-primary-100 text-base mb-6">Same menu</p>
            </div>

              <div className="bg-white/10 rounded-2xl p-6 mb-6 backdrop-blur-sm">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                    <span className="text-base">Fresh prepared daily</span>
                </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Hygienic packing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Minimum 30 people</span>
                  </div>
                </div>
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in office breakfast contract for our team`}
                className="block w-full bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-center font-bold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Get Started Today
              </a>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Our Plans?</h2>
              
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-beige-50 hover:bg-primary-50 transition-all group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Fixed Timing</h3>
                    <p className="text-sm sm:text-base text-gray-600">Delivery before 8:00 AM, every day. No delays, no excuses. Your team gets breakfast on time, every time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-beige-50 hover:bg-primary-50 transition-all group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Hygienic Packing</h3>
                    <p className="text-sm sm:text-base text-gray-600">Food packed in clean, safe containers. We maintain the highest standards of hygiene and food safety.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-beige-50 hover:bg-primary-50 transition-all group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Consistent Taste</h3>
                    <p className="text-sm sm:text-base text-gray-600">Same recipes, same quality, every day. Your team will love the authentic taste they can rely on.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-beige-50 hover:bg-primary-50 transition-all group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Bulk Orders</h3>
                    <p className="text-sm sm:text-base text-gray-600">Minimum 30 people per day. Perfect for offices, colleges, and institutions looking for reliable breakfast service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <div className="text-center p-4 sm:p-6 bg-beige-50 rounded-2xl">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">30+</div>
                <div className="text-sm sm:text-base text-gray-700 font-semibold">Minimum People</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-beige-50 rounded-2xl">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">8:00 AM</div>
                <div className="text-sm sm:text-base text-gray-700 font-semibold">Delivery Time</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-beige-50 rounded-2xl">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">Daily</div>
                <div className="text-sm sm:text-base text-gray-700 font-semibold">Service</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in office breakfast contract. Please share more details.`}
                className="flex-1 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-center font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-sm sm:text-base transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <a 
                href={`tel:${phoneNumber}`}
                className="flex-1 bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-center font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base transform hover:-translate-y-0.5"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">About Arogyaharam</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">A traditional South Indian tiffin centre built on trust, consistency, and authentic flavors</p>
            <div className="w-24 h-1.5 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Hero Statement */}
          <div className="bg-gradient-to-br from-primary-50 to-beige-50 rounded-3xl p-8 md:p-12 shadow-lg border-2 border-primary-100 mb-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-telugu">ఆరోగ్యహరం</h2>
              <p className="text-xl md:text-2xl text-gray-800 mb-6">Arogyaharam</p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Built on the principles of <span className="font-bold text-primary-700">health, tradition, discipline, and systematic operations</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Our Story */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                We believe in serving food that nourishes both body and soul. Every dish is prepared with the same care and attention you would find in a traditional home kitchen, using time-tested recipes passed down through generations.
              </p>
            </div>

            {/* Why Consistency Matters */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Consistency Matters</h2>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Our customers come back because they know exactly what to expect. The same taste - every visit. This builds trust and makes Arogyaharam a reliable part of your daily routine.
              </p>
            </div>
          </div>

          {/* Why Small Menu */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why We Keep a Small Menu</h2>
            </div>
            <p className="text-base md:text-lg mb-6 text-gray-700">
              We don't offer a large menu because we believe in doing a few things exceptionally well. By focusing on traditional breakfast items, we ensure:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 bg-beige-50 rounded-2xl hover:bg-primary-50 transition-colors group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Consistent Quality</h3>
                  <p className="text-sm text-gray-600">Every single day, guaranteed</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-beige-50 rounded-2xl hover:bg-primary-50 transition-colors group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Fresh Daily</h3>
                  <p className="text-sm text-gray-600">No leftovers, no preservatives</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-beige-50 rounded-2xl hover:bg-primary-50 transition-colors group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Recipe Mastery</h3>
                  <p className="text-sm text-gray-600">Perfect execution every time</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-beige-50 rounded-2xl hover:bg-primary-50 transition-colors group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Affordable Prices</h3>
                  <p className="text-sm text-gray-600">Efficient operations keep costs low</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Core Values</h2>
              <p className="text-base md:text-lg text-gray-600">The foundation of everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-beige-50 to-primary-50 rounded-2xl hover:shadow-lg transition-all group border border-primary-100">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Health First</h3>
                <p className="text-base text-gray-700">Less oil, no preservatives, fresh ingredients daily</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-beige-50 to-primary-50 rounded-2xl hover:shadow-lg transition-all group border border-primary-100">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tradition</h3>
                <p className="text-base text-gray-700">Authentic recipes and traditional cooking methods</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-beige-50 to-primary-50 rounded-2xl hover:shadow-lg transition-all group border border-primary-100">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Discipline</h3>
                <p className="text-base text-gray-700">Fixed recipes, fixed timings, systematic operations</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-beige-50 to-primary-50 rounded-2xl hover:shadow-lg transition-all group border border-primary-100">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trust</h3>
                <p className="text-base text-gray-700">Open kitchen, transparent processes, reliable quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-beige-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Contact Us</h1>
            <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
          </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h2>
                <div className="space-y-2">
                  <p className="text-base text-gray-800 font-semibold">Malkajgiri</p>
                  <p className="text-sm text-gray-600">200-300 sq.ft Traditional Tiffin Centre</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌅</span>
                    </div>
                <div>
                      <p className="text-base font-bold text-gray-900">Morning</p>
                      <p className="text-sm text-gray-600">8:00 AM - 10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌙</span>
                </div>
      <div>
                      <p className="text-base font-bold text-gray-900">Evening</p>
                      <p className="text-sm text-gray-600">6:00 PM - 9:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

              <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <div className="space-y-3">
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="block bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-center font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base transform hover:-translate-y-0.5"
                  >
                    Call Us
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-center font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-sm sm:text-base transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                  <a 
                    href="https://g.page/r/YOUR_GOOGLE_BUSINESS_REVIEW_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-center font-semibold hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-sm sm:text-base transform hover:-translate-y-0.5"
                    aria-label="Leave us a review on Google"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Google Reviews
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Location</h2>
                <p className="text-base text-gray-600">Find us on the map</p>
              </div>
              <div className="bg-gray-200 rounded-3xl h-64 sm:h-80 md:h-96 shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Malkajgiri,+Hyderabad,+Telangana&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                  title="Arogyaharam Location - Malkajgiri"
                  aria-label="Google Maps showing Arogyaharam location in Malkajgiri"
                ></iframe>
              </div>
      </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-white p-1.5 flex items-center justify-center border border-white/30 shadow-lg">
                  <img src={logo} alt="Arogyaharam Logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold font-telugu text-white">ఆరోగ్యహరం</div>
                  <div className="text-xs text-gray-400">Arogyaharam</div>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Traditional South Indian tiffin centre serving authentic breakfast with trust and consistency.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'menu', label: 'Menu' },
                  { id: 'office', label: 'Office Plans' },
                  { id: 'about', label: 'About' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollTo(`#${item.id}`)} className="hover:text-white transition-colors text-xs sm:text-sm">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 sm:mt-1 text-xs sm:text-sm">📍</span>
                  <span className="text-xs sm:text-sm">Malkajgiri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 sm:mt-1 text-xs sm:text-sm">📞</span>
                  <a href={`tel:${phoneNumber}`} className="text-xs sm:text-sm hover:text-white transition-colors">{phoneNumber}</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 sm:mt-1 text-xs sm:text-sm">💬</span>
                  <a href={`https://wa.me/${whatsappNumber}`} className="text-xs sm:text-sm hover:text-white transition-colors">WhatsApp Available</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 sm:mt-1 text-xs sm:text-sm">🕐</span>
                  <span className="text-xs sm:text-sm">8:00 AM - 10:30 AM | 6:00 PM - 9:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-sm">&copy; 2026 Arogyaharam. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button (Mobile) */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in Arogyaharam`}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 md:hidden z-40"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}

export default App
