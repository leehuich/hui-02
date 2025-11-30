import { useState } from "react";
import { ArrowLeft, User, Phone, Mail, Calendar, CreditCard, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

// 模擬會員資料
const mockMemberData = {
  id: "a01",
  name: "張小明",
  email: "a01@example.com",
  phone: "0912-345-678",
  memberSince: "2023-01-15",
};

// 模擬交易紀錄
const mockTransactions = [
  {
    id: "T001",
    date: "2024-11-15",
    roomType: "海景雙人房",
    checkIn: "2024-11-15",
    checkOut: "2024-11-17",
    nights: 2,
    amount: 6800,
    status: "已完成",
  },
  {
    id: "T002",
    date: "2024-09-20",
    roomType: "山景四人房",
    checkIn: "2024-09-20",
    checkOut: "2024-09-22",
    nights: 2,
    amount: 8600,
    status: "已完成",
  },
  {
    id: "T003",
    date: "2024-07-10",
    roomType: "豪華套房",
    checkIn: "2024-07-10",
    checkOut: "2024-07-13",
    nights: 3,
    amount: 15900,
    status: "已完成",
  },
  {
    id: "T004",
    date: "2024-05-05",
    roomType: "海景雙人房",
    checkIn: "2024-05-05",
    checkOut: "2024-05-07",
    nights: 2,
    amount: 6800,
    status: "已完成",
  },
];

const MemberTransactions = () => {
  const navigate = useNavigate();
  const [member] = useState(mockMemberData);
  const [transactions] = useState(mockTransactions);

  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const bonusPoints = Math.floor(totalAmount / 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首頁
          </Button>
          <h1 className="text-3xl font-light tracking-wide text-foreground">會員交易紀錄</h1>
        </div>

        {/* Member Info Card */}
        <Card className="mb-6 border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              會員基本資料
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">會員姓名</p>
                    <p className="text-lg font-medium text-foreground">{member.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">會員編號</p>
                    <p className="text-lg font-medium text-foreground">{member.id}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">電子郵件</p>
                    <p className="text-lg font-medium text-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">聯絡電話</p>
                    <p className="text-lg font-medium text-foreground">{member.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">加入日期</p>
                <p className="text-foreground">{member.memberSince}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Card */}
        <Card className="mb-6 border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle>消費明細</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>訂單編號</TableHead>
                    <TableHead>訂購日期</TableHead>
                    <TableHead>房型</TableHead>
                    <TableHead>入住日期</TableHead>
                    <TableHead>退房日期</TableHead>
                    <TableHead className="text-center">晚數</TableHead>
                    <TableHead className="text-right">金額</TableHead>
                    <TableHead className="text-center">狀態</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.roomType}</TableCell>
                      <TableCell>{transaction.checkIn}</TableCell>
                      <TableCell>{transaction.checkOut}</TableCell>
                      <TableCell className="text-center">{transaction.nights}</TableCell>
                      <TableCell className="text-right font-medium">
                        NT$ {transaction.amount.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">{transaction.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Total Amount Card */}
        <Card className="border-primary/20 bg-primary/5 shadow-lg">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">累計消費總額</p>
                <p className="text-3xl font-bold text-primary">
                  NT$ {totalAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">總訂單數</p>
                <p className="text-2xl font-semibold text-foreground">
                  {transactions.length} 筆
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-accent" />
                  <p className="text-sm text-muted-foreground">紅利點數</p>
                </div>
                <p className="text-2xl font-semibold text-accent">
                  {bonusPoints.toLocaleString()} 點
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  每消費 NT$ 100 = 1 點
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MemberTransactions;
