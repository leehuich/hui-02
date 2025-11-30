import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "陳小姐",
    date: "2024年11月",
    rating: 5,
    comment: "超棒的住宿體驗！房間乾淨舒適，日式風格很有味道。主人很親切，推薦的在地美食都很好吃。下次還會再來！",
    image: "https://ui-avatars.com/api/?name=Chen&background=random",
  },
  {
    id: 2,
    name: "王先生",
    date: "2024年10月",
    rating: 5,
    comment: "位置很方便，離七星潭很近。房間景觀超美，早上在陽台看日出太幸福了。備品用的是日本品牌，很用心！",
    image: "https://ui-avatars.com/api/?name=Wang&background=random",
  },
  {
    id: 3,
    name: "林太太",
    date: "2024年10月",
    rating: 5,
    comment: "帶小孩來住很適合，房間空間大又舒服。主人推薦的親子行程很棒，孩子玩得很開心。民宿的設計很美，拍照超好看！",
    image: "https://ui-avatars.com/api/?name=Lin&background=random",
  },
  {
    id: 4,
    name: "張先生",
    date: "2024年9月",
    rating: 5,
    comment: "這是我在花蓮住過最棒的民宿！從設計到服務都很用心，可以感受到主人對細節的堅持。山景房的視野超讚！",
    image: "https://ui-avatars.com/api/?name=Zhang&background=random",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-mist-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            旅客評價
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
          
          {/* Overall Rating */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-3xl font-light text-foreground">5.0</p>
              <p className="text-sm text-muted-foreground">來自 50+ 則評價</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>查看更多 Google 評價</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;