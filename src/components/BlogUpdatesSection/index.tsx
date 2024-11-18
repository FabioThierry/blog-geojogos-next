import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Sample data
const latestUpdates = [
  {
    title: "New Feature Launch",
    date: "2024-03-15",
    description: "We've just launched our new AI-powered search feature!",
  },
  {
    title: "Website Redesign",
    date: "2024-03-10",
    description: "Check out our fresh new look and improved user experience.",
  },
  {
    title: "Community Milestone",
    date: "2024-03-05",
    description:
      "We've reached 100,000 active users! Thank you for your support.",
  },
];

export default function BlogUpdatesSection() {
  return (
    <section id="updates" className="my-12 container mx-auto px-4">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {latestUpdates.map((update, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{update.title}</CardTitle>
                <CardDescription>{update.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
