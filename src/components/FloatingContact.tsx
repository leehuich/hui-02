import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the floating button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const contactOptions = [
    {
      icon: Phone,
      label: "電話聯繫",
      value: "03-1234-5678",
      href: "tel:03-1234-5678",
    },
    {
      icon: MessageCircle,
      label: "LINE 客服",
      value: "@hualien-inn",
      href: "https://line.me/",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@hualien-inn.com",
      href: "mailto:info@hualien-inn.com",
    },
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Contact Options Card */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 md:right-8 z-50 w-80 shadow-elegant animate-scale-in">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-foreground">聯繫我們</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="bg-accent/10 rounded-lg p-2 group-hover:bg-accent/20 transition-colors">
                  <option.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{option.label}</p>
                  <p className="text-xs text-muted-foreground">{option.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground text-center">
                服務時間：09:00 - 21:00
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 md:right-8 z-50 h-14 w-14 rounded-full shadow-elegant bg-accent hover:bg-accent/90 text-accent-foreground animate-float"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </>
  );
};

export default FloatingContact;