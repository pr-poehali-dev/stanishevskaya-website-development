import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight font-montserrat">
              Женственность
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">
                в каждой детали
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Премиум-одежда для современных женщин, которые ценят стиль и
              качество. Каждая вещь создана с любовью в Москве.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-6 text-lg font-semibold"
              >
                Смотреть коллекцию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg font-semibold"
              >
                Lookbook
                <Icon name="Eye" size={20} className="ml-2" />
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={16} />
                <span>Бесплатная доставка</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" size={16} />
                <span>Эко-материалы</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1594736797933-d0ad9ac2e5ca?w=400&h=600&fit=crop"
                    alt="Модель 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-lg mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop"
                    alt="Модель 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop"
                    alt="Модель 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop"
                    alt="Модель 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
