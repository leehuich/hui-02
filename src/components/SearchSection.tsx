import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Users, Search } from "lucide-react";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { cn } from "@/lib/utils";

const SearchSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<string>("2");

  const handleSearch = () => {
    // 此處可以加入搜尋邏輯
    console.log({ checkIn, checkOut, guests });
  };

  return (
    <section id="search-section" className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-wide mb-4">
            開始您的旅程
          </h2>
          <p className="text-muted-foreground">選擇入住日期與人數，探索最適合的房型</p>
        </div>

        {/* Search Form */}
        <div className="bg-background rounded-2xl shadow-elegant p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Check-in Date */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">入住日期</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP", { locale: zhTW }) : "選擇日期"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">退房日期</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP", { locale: zhTW }) : "選擇日期"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                    disabled={(date) => date < (checkIn || new Date())}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Number of Guests */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">入住人數</label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 位客人</SelectItem>
                  <SelectItem value="2">2 位客人</SelectItem>
                  <SelectItem value="3">3 位客人</SelectItem>
                  <SelectItem value="4">4 位客人</SelectItem>
                  <SelectItem value="5">5 位客人</SelectItem>
                  <SelectItem value="6">6 位客人</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button
                onClick={handleSearch}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Search className="mr-2 h-4 w-4" />
                搜尋房型
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Button variant="outline" className="rounded-full">
            雙人房
          </Button>
          <Button variant="outline" className="rounded-full">
            家庭房
          </Button>
          <Button variant="outline" className="rounded-full">
            海景房
          </Button>
          <Button variant="outline" className="rounded-full">
            山景房
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;