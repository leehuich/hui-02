import { useEffect, useRef, useState } from "react";
import { Heart, Home, Mountain } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="story-section"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-background to-mist-light"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Japanese-style section title */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
              主人的故事
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
          </div>

          {/* Story content with image and text layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Owner Photo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={ownerPhoto}
                  alt="民宿主人 林先生"
                  className="w-full h-auto object-cover"
                />
                {/* Photo overlay decoration */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-mountain-dark/60 to-transparent p-6">
                  <p className="text-primary-foreground text-lg font-light">林先生 & 一家人</p>
                  <p className="text-primary-foreground/80 text-sm">山海之間 創辦人</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-ocean-blue/10 rounded-full -z-10" />
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-soft space-y-6">
                {/* Quote */}
                <div className="border-l-4 border-accent pl-6 italic text-foreground/80">
                  "在這片山海之間，我找到了生命的答案"
                </div>

                {/* Story paragraphs */}
                <p className="text-lg leading-relaxed text-foreground/80">
                  十年前的那個夏天，我帶著一顆疲憊的心，從台北來到花蓮。原本只是想暫時逃離都市的喧囂，卻沒想到，這一待就是十年。
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/80">
                  每天清晨，當第一道陽光灑在太平洋上，我都會在陽台泡一杯茶，看著遠方的山與海。那份寧靜，讓我重新找回了自己。
                </p>

                <p className="text-lg leading-relaxed text-foreground/80">
                  我一直很喜歡日本的待客之道——用心款待每一位客人，把民宿當作自己的家。所以我將對日本美學的熱愛，融入這座民宿的每個角落。
                </p>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl font-light text-foreground mb-8 text-center">我們的旅程</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phase 1 */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-2">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-medium text-foreground">2014 年</h4>
                <p className="text-muted-foreground leading-relaxed">
                  離開台北，來到花蓮。在這裡遇見了生命中最美的風景，決定留下來。
                </p>
              </div>

              {/* Phase 2 */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-blue/10 rounded-full mb-2">
                  <Home className="w-8 h-8 text-ocean-blue" />
                </div>
                <h4 className="text-xl font-medium text-foreground">2016 年</h4>
                <p className="text-muted-foreground leading-relaxed">
                  在海岸路找到這棟老房子，花了一年時間改造，融入日式美學元素。
                </p>
              </div>

              {/* Phase 3 */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bamboo-green/10 rounded-full mb-2">
                  <Mountain className="w-8 h-8 text-bamboo-green" />
                </div>
                <h4 className="text-xl font-medium text-foreground">2017 至今</h4>
                <p className="text-muted-foreground leading-relaxed">
                  開門迎客，至今已接待超過 3000 組旅客，每一份相遇都是緣分。
                </p>
              </div>
            </div>

            {/* Closing message */}
            <div className="mt-12 pt-8 border-t text-center">
              <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl mx-auto mb-6">
                山海之間不只是一間民宿，更是一個讓心靈休息的地方。我們用心準備每個細節，
                希望每位來到這裡的朋友，都能找到屬於自己的寧靜時光。
              </p>
              
              {/* Signature */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-xl text-foreground font-light">歡迎你來，慢慢感受花蓮的美好</p>
                <p className="text-lg text-muted-foreground">— 林先生 敬上</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;