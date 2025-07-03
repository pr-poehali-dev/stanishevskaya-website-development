import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">SL</span>
          </div>
          <div className="text-xl font-bold text-gray-900 font-montserrat">
            Stanishevskaya Line
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Каталог
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Lookbook
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            О бренде
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Heart" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingBag" size={20} />
          </Button>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}
