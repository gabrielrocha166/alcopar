import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', page: 'home' },
    { label: 'A Associação', page: 'institutional' },
    { label: 'Setor de Bioenergia', page: 'bioenergy' },
    { label: 'Associados', page: 'home' },
    { label: 'Mercado e Indicadores', page: 'home' },
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
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
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
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer bg-transparent border-none text-left"
                >
                  {item.label}
                </button>
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
