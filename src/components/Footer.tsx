import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import AuthDialog from "./AuthDialog";

const Footer = () => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  return (
    <footer className="bg-mountain-dark text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4 tracking-wide">山海之間</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              在太平洋與中央山脈的懷抱中<br />
              尋找內心的寧靜
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">聯絡資訊</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>花蓮縣花蓮市海岸路 123 號</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:03-1234-5678" className="hover:text-accent transition-colors">
                  03-1234-5678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@hualien-inn.com" className="hover:text-accent transition-colors">
                  info@hualien-inn.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">快速連結</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#search-section" className="hover:text-accent transition-colors">
                  線上訂房
                </a>
              </li>
              <li>
                <a href="#story-section" className="hover:text-accent transition-colors">
                  關於我們
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  房型介紹
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  交通資訊
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setAuthDialogOpen(true)}
                  className="hover:text-accent transition-colors text-left"
                >
                  會員登入
                </button>
              </li>
              <li>
                <a href="/member-transactions" className="hover:text-accent transition-colors">
                  會員交易紀錄查詢
                </a>
              </li>
              <li>
                <a href="/admin-dashboard" className="hover:text-accent transition-colors">
                  管理者後台
                </a>
              </li>
              <li>
                <a href="/partner-dashboard" className="hover:text-accent transition-colors">
                  夥伴後台
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 山海之間民宿. All rights reserved.</p>
        </div>
      </div>

      {/* Auth Dialog */}
      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </footer>
  );
};

export default Footer;