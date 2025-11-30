import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bed, Users, Waves, Mountain, Bath, Wind, Wifi, Coffee } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "海景雙人房",
    nameEn: "Ocean View Double",
    price: 3200,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&h=800&fit=crop",
    ],
    size: "25m²",
    bed: "Queen Size 雙人床",
    capacity: 2,
    view: "ocean",
    amenities: [
      { icon: Bath, label: "獨立浴缸" },
      { icon: Wind, label: "除濕機" },
      { icon: Wifi, label: "高速WiFi" },
      { icon: Coffee, label: "咖啡機" },
    ],
    toiletries: "日本品牌 SHIRO 備品",
    description: "面向太平洋的雙人房，每日清晨可在陽台欣賞日出美景。房內採用日式簡約設計，木質地板與白色牆面營造寧靜氛圍。",
  },
  {
    id: 2,
    name: "山景四人房",
    nameEn: "Mountain View Family",
    price: 4800,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop",
    ],
    size: "40m²",
    bed: "2 張 Queen Size 雙人床",
    capacity: 4,
    view: "mountain",
    amenities: [
      { icon: Bath, label: "大型浴缸" },
      { icon: Wind, label: "除濕機" },
      { icon: Wifi, label: "高速WiFi" },
      { icon: Coffee, label: "膠囊咖啡機" },
    ],
    toiletries: "法國品牌 L'OCCITANE 備品",
    description: "寬敞的家庭房型，坐擁中央山脈壯麗景觀。適合家庭或好友同遊，空間舒適，設備完善。",
  },
  {
    id: 3,
    name: "豪華海景套房",
    nameEn: "Deluxe Ocean Suite",
    price: 6800,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=800&fit=crop",
    ],
    size: "55m²",
    bed: "King Size 雙人床 + 和室榻榻米",
    capacity: 4,
    view: "ocean",
    amenities: [
      { icon: Bath, label: "景觀浴缸" },
      { icon: Wind, label: "冷暖空調" },
      { icon: Wifi, label: "5G WiFi" },
      { icon: Coffee, label: "義式咖啡機" },
    ],
    toiletries: "英國品牌 Aromatherapy Associates 頂級備品",
    description: "最頂級的套房選擇，擁有獨立客廳與寬敞陽台。180度海景視野，房內設有日式和室空間，完美結合現代奢華與傳統禪意。",
  },
  {
    id: 4,
    name: "山景雙人房",
    nameEn: "Mountain View Twin",
    price: 2800,
    image: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
    ],
    size: "22m²",
    bed: "2 張單人床",
    capacity: 2,
    view: "mountain",
    amenities: [
      { icon: Bath, label: "淋浴設備" },
      { icon: Wind, label: "除濕機" },
      { icon: Wifi, label: "高速WiFi" },
      { icon: Coffee, label: "茶具組" },
    ],
    toiletries: "台灣在地品牌 茶籽堂 備品",
    description: "溫馨的雙床房型，適合好友或家人同遊。窗外可欣賞層疊山巒，清晨山嵐繚繞，感受大自然的寧靜氣息。",
  },
];

const RoomsSection = () => {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRoomClick = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-mist-light to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">Rooms</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            房型介紹
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <Card 
              key={room.id} 
              className="overflow-hidden group hover:shadow-elegant transition-all duration-500 cursor-pointer"
              onClick={() => handleRoomClick(room)}
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* View more indicator */}
                <div className="absolute inset-0 bg-mountain-dark/0 group-hover:bg-mountain-dark/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary-foreground/90 rounded-full px-4 py-2 text-sm font-medium text-primary">
                      查看更多照片 →
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary-foreground/90 text-primary">
                    {room.view === "ocean" ? (
                      <><Waves className="w-3 h-3 mr-1" /> 海景</>
                    ) : (
                      <><Mountain className="w-3 h-3 mr-1" /> 山景</>
                    )}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Room Title */}
                <div>
                  <h3 className="text-2xl font-light text-foreground mb-1">{room.name}</h3>
                  <p className="text-sm text-muted-foreground tracking-wide">{room.nameEn}</p>
                </div>

                {/* Room Info */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.capacity} 位</span>
                  </div>
                  <span>{room.size}</span>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                      <amenity.icon className="w-4 h-4 text-accent" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>

                {/* Toiletries */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">
                    🧴 {room.toiletries}
                  </p>
                </div>

                {/* Price and Booking */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">每晚</p>
                    <p className="text-2xl font-light text-foreground">
                      NT$ {room.price.toLocaleString()}
                    </p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    查看詳情
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Room Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            {selectedRoom && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-light tracking-wide">
                    {selectedRoom.name}
                  </DialogTitle>
                  <p className="text-muted-foreground">{selectedRoom.nameEn}</p>
                </DialogHeader>

                {/* Image Carousel */}
                <div className="mt-6">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedRoom.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video overflow-hidden rounded-lg">
                            <img
                              src={image}
                              alt={`${selectedRoom.name} - ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    {selectedRoom.gallery.length} 張照片
                  </p>
                </div>

                {/* Room Details */}
                <div className="space-y-6 mt-6">
                  {/* Description */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">房間介紹</h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {selectedRoom.description}
                    </p>
                  </div>

                  {/* Room Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">房間大小</p>
                      <p className="font-medium text-foreground">{selectedRoom.size}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">床型</p>
                      <p className="font-medium text-foreground text-sm">{selectedRoom.bed}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">入住人數</p>
                      <p className="font-medium text-foreground">{selectedRoom.capacity} 位</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">景觀</p>
                      <p className="font-medium text-foreground">
                        {selectedRoom.view === "ocean" ? "海景" : "山景"}
                      </p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">房間設施</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {selectedRoom.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                          <amenity.icon className="w-4 h-4 text-accent" />
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Toiletries */}
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">備品資訊</h4>
                    <p className="text-foreground/80">🧴 {selectedRoom.toiletries}</p>
                  </div>

                  {/* Booking Section */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">每晚房價</p>
                      <p className="text-3xl font-light text-foreground">
                        NT$ {selectedRoom.price.toLocaleString()}
                      </p>
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsDialogOpen(false);
                        document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      立即預訂此房型
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default RoomsSection;