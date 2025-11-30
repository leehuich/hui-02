import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, TrendingUp, Mail, Code, FileText, ExternalLink, Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Booking {
  id: string;
  guestName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  amount: number;
  status: "confirmed" | "checked-in" | "checked-out";
  email: string;
  phone: string;
}

interface Member {
  id: string;
  name: string;
  email: string;
  points: number;
  tier: "bronze" | "silver" | "gold";
  joinDate: string;
  totalSpent: number;
}

const AdminDashboard = () => {
  // Mock bookings data
  const [bookings] = useState<Booking[]>([
    {
      id: "B001",
      guestName: "王小明",
      roomType: "豪華雙人房",
      checkIn: "2024-01-15",
      checkOut: "2024-01-17",
      amount: 8000,
      status: "checked-out",
      email: "wang@example.com",
      phone: "0912345678"
    },
    {
      id: "B002",
      guestName: "李美麗",
      roomType: "標準單人房",
      checkIn: "2024-01-20",
      checkOut: "2024-01-22",
      amount: 4500,
      status: "checked-in",
      email: "li@example.com",
      phone: "0923456789"
    },
    {
      id: "B003",
      guestName: "張大華",
      roomType: "家庭房",
      checkIn: "2024-01-25",
      checkOut: "2024-01-28",
      amount: 12000,
      status: "confirmed",
      email: "zhang@example.com",
      phone: "0934567890"
    }
  ]);

  // Mock members data
  const [members] = useState<Member[]>([
    {
      id: "M001",
      name: "王小明",
      email: "wang@example.com",
      points: 850,
      tier: "gold",
      joinDate: "2023-06-15",
      totalSpent: 45000
    },
    {
      id: "M002",
      name: "李美麗",
      email: "li@example.com",
      points: 420,
      tier: "silver",
      joinDate: "2023-09-20",
      totalSpent: 22000
    },
    {
      id: "M003",
      name: "張大華",
      email: "zhang@example.com",
      points: 180,
      tier: "bronze",
      joinDate: "2023-12-10",
      totalSpent: 8000
    }
  ]);

  // Filter states
  const [dateFilter, setDateFilter] = useState("");
  const [roomTypeFilter, setRoomTypeFilter] = useState("all");
  const [amountFilter, setAmountFilter] = useState("");

  // SEO settings
  const [metaDescription, setMetaDescription] = useState("舒適溫馨的民宿，位於市中心，交通便利");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  // Marketing automation
  const [birthdayDiscount, setBirthdayDiscount] = useState("20");
  const [reviewIncentive, setReviewIncentive] = useState("15");

  // Tracking codes
  const [fbPixel, setFbPixel] = useState("");
  const [gaCode, setGaCode] = useState("");

  // Filter bookings
  const filteredBookings = bookings.filter(booking => {
    let matches = true;
    
    if (dateFilter && !booking.checkIn.includes(dateFilter)) {
      matches = false;
    }
    
    if (roomTypeFilter !== "all" && booking.roomType !== roomTypeFilter) {
      matches = false;
    }
    
    if (amountFilter && booking.amount < parseInt(amountFilter)) {
      matches = false;
    }
    
    return matches;
  });

  const getTierBadge = (tier: string) => {
    const colors = {
      bronze: "bg-amber-700",
      silver: "bg-slate-400",
      gold: "bg-yellow-500"
    };
    return <Badge className={colors[tier as keyof typeof colors]}>{tier.toUpperCase()}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      confirmed: "bg-blue-500",
      "checked-in": "bg-green-500",
      "checked-out": "bg-gray-500"
    };
    return <Badge className={colors[status as keyof typeof colors]}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">管理者後台</h1>
          <p className="text-muted-foreground">完整的營運管理與行銷工具</p>
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="bookings">訂房管理</TabsTrigger>
            <TabsTrigger value="members">會員系統</TabsTrigger>
            <TabsTrigger value="seo">SEO 優化</TabsTrigger>
            <TabsTrigger value="marketing">行銷自動化</TabsTrigger>
            <TabsTrigger value="tracking">追蹤碼</TabsTrigger>
            <TabsTrigger value="partner">夥伴後台</TabsTrigger>
          </TabsList>

          {/* Bookings Management */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  顧客入住資料管理
                </CardTitle>
                <CardDescription>查詢與管理所有訂房記錄</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label htmlFor="date-filter">入住日期篩選</Label>
                    <Input
                      id="date-filter"
                      type="date"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="room-filter">房型篩選</Label>
                    <Select value={roomTypeFilter} onValueChange={setRoomTypeFilter}>
                      <SelectTrigger id="room-filter">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">全部房型</SelectItem>
                        <SelectItem value="豪華雙人房">豪華雙人房</SelectItem>
                        <SelectItem value="標準單人房">標準單人房</SelectItem>
                        <SelectItem value="家庭房">家庭房</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="amount-filter">最低金額篩選</Label>
                    <Input
                      id="amount-filter"
                      type="number"
                      placeholder="輸入最低金額"
                      value={amountFilter}
                      onChange={(e) => setAmountFilter(e.target.value)}
                    />
                  </div>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>訂單編號</TableHead>
                        <TableHead>客人姓名</TableHead>
                        <TableHead>房型</TableHead>
                        <TableHead>入住日期</TableHead>
                        <TableHead>退房日期</TableHead>
                        <TableHead>金額</TableHead>
                        <TableHead>狀態</TableHead>
                        <TableHead>聯絡方式</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>{booking.guestName}</TableCell>
                          <TableCell>{booking.roomType}</TableCell>
                          <TableCell>{booking.checkIn}</TableCell>
                          <TableCell>{booking.checkOut}</TableCell>
                          <TableCell>NT$ {booking.amount.toLocaleString()}</TableCell>
                          <TableCell>{getStatusBadge(booking.status)}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{booking.email}</div>
                              <div className="text-muted-foreground">{booking.phone}</div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">統計摘要</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">總訂單數</p>
                      <p className="text-2xl font-bold">{filteredBookings.length}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">總營業額</p>
                      <p className="text-2xl font-bold">
                        NT$ {filteredBookings.reduce((sum, b) => sum + b.amount, 0).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">平均訂單金額</p>
                      <p className="text-2xl font-bold">
                        NT$ {Math.round(filteredBookings.reduce((sum, b) => sum + b.amount, 0) / filteredBookings.length).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Members Management */}
          <TabsContent value="members">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  會員系統管理
                </CardTitle>
                <CardDescription>管理會員資料、點數與優惠</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>會員編號</TableHead>
                        <TableHead>姓名</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>會員等級</TableHead>
                        <TableHead>累積點數</TableHead>
                        <TableHead>累積消費</TableHead>
                        <TableHead>加入日期</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {members.map((member) => (
                        <TableRow key={member.id}>
                          <TableCell className="font-medium">{member.id}</TableCell>
                          <TableCell>{member.name}</TableCell>
                          <TableCell>{member.email}</TableCell>
                          <TableCell>{getTierBadge(member.tier)}</TableCell>
                          <TableCell>{member.points} 點</TableCell>
                          <TableCell>NT$ {member.totalSpent.toLocaleString()}</TableCell>
                          <TableCell>{member.joinDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">會員等級說明</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>🥉 Bronze</span>
                        <span>累積消費 NT$ 0+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🥈 Silver</span>
                        <span>累積消費 NT$ 15,000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🥇 Gold</span>
                        <span>累積消費 NT$ 30,000+</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">點數規則</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>• 每消費 NT$ 100 = 1 點</p>
                      <p>• Bronze: 1倍點數</p>
                      <p>• Silver: 1.5倍點數</p>
                      <p>• Gold: 2倍點數</p>
                      <p>• 100點 = NT$ 100 折抵</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">會員優惠</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>• Bronze: 生日當月 9折</p>
                      <p>• Silver: 生日當月 85折</p>
                      <p>• Gold: 生日當月 8折</p>
                      <p>• 免費延遲退房至 13:00</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Optimization */}
          <TabsContent value="seo">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    結構化資料設定 (Schema Markup)
                  </CardTitle>
                  <CardDescription>提升搜尋引擎能見度</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="meta-desc">Meta Description</Label>
                    <Textarea
                      id="meta-desc"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="網站描述（建議 150-160 字元）"
                      className="h-20"
                    />
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">當前 Schema 設定</h4>
                    <pre className="text-xs overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "溫馨民宿",
  "description": "${metaDescription}",
  "image": "https://example.com/hotel.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "台北市",
    "addressCountry": "TW"
  },
  "priceRange": "NT$ 2,000 - NT$ 8,000",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    內容行銷模組
                  </CardTitle>
                  <CardDescription>發布在地旅遊攻略與活動資訊</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="blog-title">文章標題</Label>
                    <Input
                      id="blog-title"
                      value={blogTitle}
                      onChange={(e) => setBlogTitle(e.target.value)}
                      placeholder="例：2024 台北春季賞櫻完整攻略"
                    />
                  </div>

                  <div>
                    <Label htmlFor="blog-content">文章內容</Label>
                    <Textarea
                      id="blog-content"
                      value={blogContent}
                      onChange={(e) => setBlogContent(e.target.value)}
                      placeholder="撰寫吸引人的旅遊內容..."
                      className="h-40"
                    />
                  </div>

                  <Button>發布文章</Button>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">已發布文章</h4>
                    <div className="space-y-2">
                      <div className="p-3 border rounded-lg flex justify-between items-center">
                        <div>
                          <p className="font-medium">台北冬季限定景點推薦</p>
                          <p className="text-sm text-muted-foreground">發布於 2024-01-10</p>
                        </div>
                        <Badge>已發布</Badge>
                      </div>
                      <div className="p-3 border rounded-lg flex justify-between items-center">
                        <div>
                          <p className="font-medium">周邊美食餐廳精選</p>
                          <p className="text-sm text-muted-foreground">發布於 2024-01-05</p>
                        </div>
                        <Badge>已發布</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Marketing Automation */}
          <TabsContent value="marketing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  自動化行銷設定
                </CardTitle>
                <CardDescription>設定自動化的優惠與溝通機制</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">生日優惠</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="birthday-discount">折扣百分比</Label>
                        <Input
                          id="birthday-discount"
                          type="number"
                          value={birthdayDiscount}
                          onChange={(e) => setBirthdayDiscount(e.target.value)}
                          placeholder="20"
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          會員生日當月自動寄送優惠碼
                        </p>
                      </div>
                      <Button className="w-full">儲存設定</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">評價邀請</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="review-incentive">回購折扣百分比</Label>
                        <Input
                          id="review-incentive"
                          type="number"
                          value={reviewIncentive}
                          onChange={(e) => setReviewIncentive(e.target.value)}
                          placeholder="15"
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          退房後 3 天自動寄送評價邀請信
                        </p>
                      </div>
                      <Button className="w-full">儲存設定</Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">自動化流程清單</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-green-500">啟用</Badge>
                          <span>訂房確認信</span>
                        </div>
                        <span className="text-sm text-muted-foreground">訂房後立即發送</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-green-500">啟用</Badge>
                          <span>入住提醒信</span>
                        </div>
                        <span className="text-sm text-muted-foreground">入住前 1 天發送</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-green-500">啟用</Badge>
                          <span>退房感謝信</span>
                        </div>
                        <span className="text-sm text-muted-foreground">退房當天發送</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-green-500">啟用</Badge>
                          <span>評價邀請信</span>
                        </div>
                        <span className="text-sm text-muted-foreground">退房後 3 天發送</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tracking Codes */}
          <TabsContent value="tracking">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  追蹤碼埋設
                </CardTitle>
                <CardDescription>設定 Facebook Pixel 與 Google Analytics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="fb-pixel">Facebook Pixel ID</Label>
                  <Input
                    id="fb-pixel"
                    value={fbPixel}
                    onChange={(e) => setFbPixel(e.target.value)}
                    placeholder="輸入您的 Facebook Pixel ID"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    用於追蹤訪客行為並建立再行銷受眾
                  </p>
                </div>

                <div>
                  <Label htmlFor="ga-code">Google Analytics 追蹤代碼</Label>
                  <Input
                    id="ga-code"
                    value={gaCode}
                    onChange={(e) => setGaCode(e.target.value)}
                    placeholder="G-XXXXXXXXXX"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    追蹤網站流量與使用者行為
                  </p>
                </div>

                <Button>儲存追蹤碼設定</Button>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-3">追蹤事件設定</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>頁面瀏覽 (PageView)</span>
                      <Badge className="bg-green-500">已啟用</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>查看房間詳情 (ViewContent)</span>
                      <Badge className="bg-green-500">已啟用</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>開始訂房流程 (InitiateCheckout)</span>
                      <Badge className="bg-green-500">已啟用</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>完成訂房 (Purchase)</span>
                      <Badge className="bg-green-500">已啟用</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-yellow-500 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    行銷建議
                  </h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>設定「看過房間但未下單」的再行銷受眾</li>
                    <li>針對完成訂房的客戶建立類似受眾</li>
                    <li>追蹤不同流量來源的轉換率</li>
                    <li>定期檢視 GA 報表優化網站體驗</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partner Dashboard Link */}
          <TabsContent value="partner">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  夥伴後台連結
                </CardTitle>
                <CardDescription>查看現場管理狀態與客人資訊</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    夥伴後台提供房間清潔狀態管理與客人備註記錄功能，方便現場人員即時更新資訊。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">12</div>
                          <p className="text-sm text-muted-foreground mt-1">總房間數</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-500">8</div>
                          <p className="text-sm text-muted-foreground mt-1">已入住</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-yellow-500">2</div>
                          <p className="text-sm text-muted-foreground mt-1">待清理</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.location.href = '/partner-dashboard'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    前往夥伴後台
                  </Button>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">夥伴後台功能</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                      <li>即時查看房間入住狀態</li>
                      <li>標記房間清潔完成</li>
                      <li>記錄客人特殊需求與備註</li>
                      <li>查看待清理房間列表</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
