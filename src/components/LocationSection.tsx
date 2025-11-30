import { MapPin, Store, UtensilsCrossed, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const nearbyPlaces = [
  {
    icon: Store,
    name: "7-11 便利商店",
    distance: "步行 5 分鐘",
    description: "日常採購、ATM 提款",
  },
  {
    icon: Waves,
    name: "七星潭海灘",
    distance: "車程 8 分鐘",
    description: "欣賞日出、漫步海邊",
  },
  {
    icon: UtensilsCrossed,
    name: "東大門夜市",
    distance: "車程 15 分鐘",
    description: "在地美食、小吃",
  },
  {
    icon: MapPin,
    name: "太魯閣國家公園",
    distance: "車程 30 分鐘",
    description: "壯麗峽谷、自然步道",
  },
];

const LocationSection = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">Location</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            位置與周邊
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Container */}
          <div className="rounded-2xl overflow-hidden shadow-elegant h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57920.89765919663!2d121.56836487832033!3d23.991500800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689f8b14d26227%3A0xf3d2ebf6b25c991f!2z6Iqx6JOu57i36aeF!5e0!3m2!1szh-TW!2stw!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="民宿位置地圖"
            />
          </div>

          {/* Nearby Places */}
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-6 shadow-soft">
              <h3 className="text-xl font-light text-foreground mb-2">民宿地址</h3>
              <p className="text-muted-foreground flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <span>花蓮縣花蓮市海岸路 123 號</span>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-foreground mb-4">周邊景點</h3>
              <div className="grid gap-4">
                {nearbyPlaces.map((place, index) => (
                  <Card key={index} className="hover:shadow-soft transition-shadow">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="bg-accent/10 rounded-lg p-3">
                        <place.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-foreground">{place.name}</h4>
                          <span className="text-sm text-accent">{place.distance}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{place.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;