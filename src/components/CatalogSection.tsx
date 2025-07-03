import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Платье с запахом",
    price: "12 900",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    category: "Платья",
  },
  {
    id: 2,
    name: "Костюм Премиум",
    price: "24 900",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0ad9ac2e5ca?w=400&h=600&fit=crop",
    category: "Костюмы",
  },
  {
    id: 3,
    name: "Блуза шёлковая",
    price: "8 900",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
    category: "Блузы",
  },
  {
    id: 4,
    name: "Пальто Классик",
    price: "18 900",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop",
    category: "Верхняя одежда",
  },
  {
    id: 5,
    name: "Юбка Миди",
    price: "9 900",
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d4e?w=400&h=600&fit=crop",
    category: "Юбки",
  },
  {
    id: 6,
    name: "Кардиган Люкс",
    price: "15 900",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    category: "Кардиганы",
  },
];

export default function CatalogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Новая Коллекция
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя мир современной элегантности и непринуждённого
            стиля
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Все", "Платья", "Костюмы", "Блузы", "Верхняя одежда"].map(
            (category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }
              >
                {category}
              </Button>
            ),
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl bg-white"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                      Новинка
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 hover:bg-white"
                    >
                      <Icon name="Heart" size={20} className="text-gray-600" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price} ₽
                    </span>
                    <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white">
                      На Wildberries
                      <Icon name="ExternalLink" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
          >
            Посмотреть все товары
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
