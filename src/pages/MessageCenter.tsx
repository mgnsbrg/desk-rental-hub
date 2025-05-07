import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Search, Send, MapPin, Calendar, User, MessageSquare, Clock, Mail, Phone } from "lucide-react";

const MessageCenter = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // Simulate sending message
      toast({
        title: "Meddelande skickat!",
        description: "Ditt meddelande har skickats.",
      });
      setMessage("");
    } else {
      toast({
        title: "Fel!",
        description: "Meddelandet kan inte vara tomt.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-gray-50 py-8">
          <div className="container-custom">
            <h1 className="text-2xl md:text-3xl font-bold">Meddelandecentral</h1>
            <p className="text-gray-600 mt-2">
              Håll kontakten med värdar och andra användare
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-8">
          <Tabs defaultValue="inkorg" className="w-full">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="inkorg" className="flex-1">
                Inkorg
              </TabsTrigger>
              <TabsTrigger value="skickat" className="flex-1">
                Skickat
              </TabsTrigger>
            </TabsList>
            <TabsContent value="inkorg" className="mt-4">
              {/* Inbox Messages */}
              <Card className="mb-4">
                <CardContent className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline-block mr-1" />
                      1 timme sedan
                    </p>
                    <p className="text-gray-700">
                      Hej! Jag undrar om det finns parkering i närheten av
                      kontoret?
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-4">
                <CardContent className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Anna Smith</h3>
                    <p className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline-block mr-1" />
                      3 timmar sedan
                    </p>
                    <p className="text-gray-700">
                      Tack för din bokning! Vi ser fram emot att välkomna dig.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Add more inbox messages here */}
            </TabsContent>
            <TabsContent value="skickat" className="mt-4">
              {/* Sent Messages */}
              <Card className="mb-4">
                <CardContent className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/88.jpg" />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Tom Swift</h3>
                    <p className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline-block mr-1" />
                      2 timmar sedan
                    </p>
                    <p className="text-gray-700">
                      Ville bara kolla om det är möjligt att boka en extra dag?
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-4">
                <CardContent className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/women/76.jpg" />
                    <AvatarFallback>LS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Lisa Berg</h3>
                    <p className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline-block mr-1" />
                      5 timmar sedan
                    </p>
                    <p className="text-gray-700">
                      Har du några lediga tider nästa vecka?
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Add more sent messages here */}
            </TabsContent>
          </Tabs>

          {/* New Message Section */}
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Skriv ett nytt meddelande</h2>
              <div className="grid gap-4">
                <div>
                  <Input type="text" placeholder="Mottagare" />
                </div>
                <div>
                  <Textarea
                    placeholder="Ditt meddelande..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div>
                  <Button onClick={handleSendMessage}>
                    Skicka <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MessageCenter;
