import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const menuItems = [
    { label: 'Home', page: 'home' },
    { label: 'A Associação', page: 'institutional' },
    { label: 'Setor de Bioenergia', page: 'bioenergy' },
    { label: 'Associados', page: 'home' },
    { label: 'Mercado e Indicadores', page: 'home' },
    {
      label: 'Produtos',
      submenu: [
        { label: 'Álcool (Etanol)', page: 'ethanol' },
      ]
    },
    { label: 'Consecana', page: 'consecana' },
    { label: 'Notícias', page: 'home' },
    { label: 'Eventos', page: 'home' },
    { label: 'Publicações', page: 'home' },
    { label: 'Downloads', page: 'home' },
    { label: 'Contato', page: 'home' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ALCOPAR</h1>
              <p className="text-xs text-gray-600">Bioenergia Paraná</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {('submenu' in item && item.submenu) ? (
                  <>
                    <button className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer bg-transparent border-none flex items-center gap-1">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.page}
                          onClick={() => handleNavigation(subitem.page)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium bg-transparent border-none first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subitem.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.page)}
                    className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer bg-transparent border-none"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Área do Associado
            </button>
          </nav>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {('submenu' in item && item.submenu) ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer bg-transparent border-none text-left w-full flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openSubmenu === item.label && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-green-200">
                          {item.submenu.map((subitem) => (
                            <button
                              key={subitem.page}
                              onClick={() => handleNavigation(subitem.page)}
                              className="text-sm text-gray-600 hover:text-green-600 transition-colors font-medium cursor-pointer bg-transparent border-none text-left w-full"
                            >
                              {subitem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.page)}
                      className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer bg-transparent border-none text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium w-full">
                Área do Associado
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
