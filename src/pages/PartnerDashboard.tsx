import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Home, CheckCircle2, Clock, XCircle, FileText } from "lucide-react";

type RoomStatus = "occupied" | "checked_out_dirty" | "checked_out_clean" | "available";

interface Room {
  id: string;
  number: string;
  status: RoomStatus;
  guestName?: string;
  checkOutTime?: string;
  notes?: string;
}

const PartnerDashboard = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", number: "101", status: "occupied", guestName: "王小明", notes: "10點前不要打擾" },
    { id: "2", number: "102", status: "checked_out_dirty", checkOutTime: "10:30" },
    { id: "3", number: "103", status: "available" },
    { id: "4", number: "201", status: "occupied", guestName: "李大華", notes: "客人有嬰兒，需要嬰兒床" },
    { id: "5", number: "202", status: "checked_out_dirty", checkOutTime: "11:00" },
    { id: "6", number: "203", status: "checked_out_clean" },
    { id: "7", number: "301", status: "checked_out_dirty", checkOutTime: "09:45" },
    { id: "8", number: "302", status: "available" },
  ]);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [noteText, setNoteText] = useState("");

  const handleCleaningComplete = (roomId: string) => {
    setRooms(rooms.map(room => 
      room.id === roomId 
        ? { ...room, status: "checked_out_clean" as RoomStatus }
        : room
    ));
  };

  const handleSaveNote = () => {
    if (editingRoom) {
      setRooms(rooms.map(room => 
        room.id === editingRoom.id 
          ? { ...room, notes: noteText }
          : room
      ));
      setEditingRoom(null);
      setNoteText("");
    }
  };

  const openNoteDialog = (room: Room) => {
    setEditingRoom(room);
    setNoteText(room.notes || "");
  };

  const getStatusInfo = (status: RoomStatus) => {
    switch (status) {
      case "occupied":
        return { label: "有人入住", color: "bg-blue-500", icon: Home };
      case "checked_out_dirty":
        return { label: "待清理", color: "bg-orange-500", icon: Clock };
      case "checked_out_clean":
        return { label: "已清理", color: "bg-green-500", icon: CheckCircle2 };
      case "available":
        return { label: "可入住", color: "bg-emerald-500", icon: CheckCircle2 };
      default:
        return { label: "未知", color: "bg-gray-500", icon: XCircle };
    }
  };

  const statusGroups = {
    occupied: rooms.filter(r => r.status === "occupied"),
    checked_out_dirty: rooms.filter(r => r.status === "checked_out_dirty"),
    checked_out_clean: rooms.filter(r => r.status === "checked_out_clean"),
    available: rooms.filter(r => r.status === "available"),
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">夥伴後台</h1>
          <p className="text-muted-foreground">房間清潔管理系統</p>
        </div>

        <div className="grid gap-6 mb-8">
          {/* 統計卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">有人入住</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-500">{statusGroups.occupied.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">待清理</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-500">{statusGroups.checked_out_dirty.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">已清理</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-500">{statusGroups.checked_out_clean.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">可入住</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-500">{statusGroups.available.length}</div>
              </CardContent>
            </Card>
          </div>

          {/* 待清理房間區域 */}
          {statusGroups.checked_out_dirty.length > 0 && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  待清理房間
                </CardTitle>
                <CardDescription>請完成清理後勾選確認</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {statusGroups.checked_out_dirty.map(room => (
                    <div key={room.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={`clean-${room.id}`}
                            onCheckedChange={() => handleCleaningComplete(room.id)}
                          />
                          <label
                            htmlFor={`clean-${room.id}`}
                            className="text-sm font-medium cursor-pointer"
                          >
                            已完成清潔
                          </label>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-lg">房間 {room.number}</div>
                          {room.checkOutTime && (
                            <div className="text-sm text-muted-foreground">退房時間: {room.checkOutTime}</div>
                          )}
                          {room.notes && (
                            <div className="text-sm text-muted-foreground mt-1">
                              <FileText className="inline h-3 w-3 mr-1" />
                              備註: {room.notes}
                            </div>
                          )}
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                        待清理
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 所有房間列表 */}
          <Card>
            <CardHeader>
              <CardTitle>所有房間狀態</CardTitle>
              <CardDescription>目前所有房間的即時狀態</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {rooms.map(room => {
                  const statusInfo = getStatusInfo(room.status);
                  const StatusIcon = statusInfo.icon;
                  
                  return (
                    <Card key={room.id} className="overflow-hidden">
                      <div className={`h-2 ${statusInfo.color}`} />
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">房間 {room.number}</CardTitle>
                          <StatusIcon className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Badge className={statusInfo.color}>
                          {statusInfo.label}
                        </Badge>
                        {room.guestName && (
                          <p className="text-sm text-muted-foreground">住客: {room.guestName}</p>
                        )}
                        {room.checkOutTime && (
                          <p className="text-sm text-muted-foreground">退房: {room.checkOutTime}</p>
                        )}
                        {room.notes && (
                          <div className="text-sm text-muted-foreground pt-2 border-t">
                            <FileText className="inline h-3 w-3 mr-1" />
                            {room.notes}
                          </div>
                        )}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full mt-2"
                              onClick={() => openNoteDialog(room)}
                            >
                              <FileText className="h-4 w-4 mr-2" />
                              {room.notes ? "編輯備註" : "新增備註"}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>房間 {room.number} 備註</DialogTitle>
                              <DialogDescription>
                                記錄客人的特殊需求或注意事項
                              </DialogDescription>
                            </DialogHeader>
                            <Textarea
                              placeholder="例如：10點前不要打擾、客人有嬰兒、需要額外毛巾等"
                              value={noteText}
                              onChange={(e) => setNoteText(e.target.value)}
                              className="min-h-[120px]"
                            />
                            <DialogFooter>
                              <Button onClick={handleSaveNote}>儲存備註</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            返回首頁
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
