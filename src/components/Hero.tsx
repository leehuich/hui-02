import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import AuthDialog from "./AuthDialog";

const Hero = () => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const scrollToSearch = () => {
    document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mountain-dark/50 via-mountain-dark/30 to-mountain-dark/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="space-y-6">
          {/* Japanese vertical text style title */}
          <h1 className="text-5xl md:text-7xl font-light text-primary-foreground tracking-wider drop-shadow-lg">
            山海之間
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light tracking-wide drop-shadow">
            花蓮 · 日式美學民宿
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
            在太平洋與中央山脈的懷抱中，尋找內心的寧靜
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
            <Button
              size="lg"
              variant="default"
              onClick={scrollToSearch}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg shadow-lg"
            >
              立即訂房
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setAuthDialogOpen(true)}
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90 border-border/50 px-8 py-6 text-lg shadow-lg"
            >
              <User className="mr-2 h-5 w-5" />
              會員登入
            </Button>
          </div>
        </div>
      </div>

      {/* Auth Dialog */}
      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </section>
  );
};

export default Hero;