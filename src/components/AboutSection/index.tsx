import { Dices, Earth, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function AboutSection({ props }: { props: AboutSection }) {
  const { cards, previousHeading, heading } = props;
  return (
    <section id="sobre">
      <div>
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
              {previousHeading}
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              {heading}
            </h3>
          </div>
          {/* TODO: ADD ICON */}
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {cards.map((card) => (
              <Card key={card.id}>
                <CardHeader className="pb-4"> 
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {card.icon} 
                  </div>
                  <CardTitle className="text-xl font-semibold pt-3">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.content}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ">
                  <Gamepad2 />
                </div>
                <CardTitle className="text-xl font-semibold pt-3">
                  {cards[0].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cards[0].content}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ">
                  <Dices />
                </div>
                <CardTitle className="text-xl font-semibold pt-3">
                  {cards[1].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cards[1].content}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ">
                  <Earth />
                </div>
                <CardTitle className="text-xl font-semibold pt-3">
                  {cards[2].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cards[2].content}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}