import qs from "qs";

import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import getStrapiData from "@/lib/getStrapiData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
// import GameGallery from "@/components/GameGallery";

const gameQuery = qs.stringify({
  populate: "*",
});
export const dynamicParams = true;

export async function generateStaticParams(): Promise<
  { documentId: string }[]
> {
  const gameID: ResponseData<Games[]> = await getStrapiData(
    `/api/games`,
    gameQuery
  );
  //   console.dir(gameID.data, { depth: null });
  return gameID.data.map((game) => ({
    documentId: game.documentId,
  }));
}

export default async function GamePage({
  params,
}: {
  params: { documentId: string };
}): Promise<JSX.Element> {
  const gamePageStrapiData: ResponseData<Games> = await getStrapiData(
    `/api/games/${params.documentId}`,
    gameQuery
  );

  if (!gamePageStrapiData) {
    return notFound();
  }

  const { name, description, cover, main_information } =
    gamePageStrapiData.data;

  return (
    <div className="container mx-auto py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold">{name}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
            <Badge variant="secondary">categoria</Badge>
            {/* <p className="mt-4 text-lg text-muted-foreground">{description}</p> */}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={cover.url}
                alt={name}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </div>
            <div>
              <Tabs defaultValue="main-info" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="main-info">Main Information</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>
                <TabsContent value="main-info">
                  <Card>
                    <CardHeader>
                      <CardTitle>Main Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                        <ReactMarkdown>{main_information.body}</ReactMarkdown>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Game Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                        <article
                          className="prose max-w-none"
                          dangerouslySetInnerHTML={{ __html: main_information }}
                        />
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="gallery">
                  <Card>
                    <CardHeader>
                      <CardTitle>Game Gallery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* <GameGallery images={cover.url} /> */}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
// <div className="container mx-auto py-8">
//   <Card className="mb-8">
//     <CardHeader>
//       <div className="flex justify-between items-center">
//         <CardTitle className="text-3xl font-bold">{name}</CardTitle>
//         <Badge variant="secondary">categoria</Badge>
//       </div>
//     </CardHeader>
//     <CardContent>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <Image
//             src={cover.url}
//             alt={name}
//             width={600}
//             height={400}
//             className="rounded-lg object-cover w-full h-64 md:h-auto"
//           />
//           <p className="mt-4 text-lg text-muted-foreground">
//             {description}
//           </p>
//         </div>
//         <div>
//           <Tabs defaultValue="main-info" className="w-full">
//             <TabsList className="grid w-full grid-cols-3">
//               <TabsTrigger value="main-info">Main Information</TabsTrigger>
//               <TabsTrigger value="details">Details</TabsTrigger>
//               <TabsTrigger value="main-info">More</TabsTrigger>
//             </TabsList>
//             <TabsContent value="main-info">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Main Information</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ScrollArea className="h-[300px] w-full rounded-md border p-4">
//                     <ReactMarkdown>{main_information.body}</ReactMarkdown>
//                   </ScrollArea>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="details">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Game Details</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ScrollArea className="h-[300px] w-full rounded-md border p-4">
//                     <article
//                       className="prose max-w-none"
//                       dangerouslySetInnerHTML={{ __html: main_information }}
//                     />
//                   </ScrollArea>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </CardContent>
//   </Card>
// </div>

// <div>
//   <p>Teste {params.documentId}</p>
//   {/* <Header title={title} /> */}
//   <main className="container mx-auto mt-8">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       <div>
//         <Image
//           src={cover.url}
//           alt={name}
//           width={600}
//           height={400}
//           className="rounded-lg object-cover w-full h-64 md:h-auto"
//         />
//         <p className="mt-4 text-lg text-muted-foreground">{description}</p>
//         <h3>Informações principais</h3>
//         <ReactMarkdown>{main_information.body}</ReactMarkdown>
//       </div>
//       <div>
//         <article
//           className="prose max-w-none"
//           dangerouslySetInnerHTML={{ __html: main_information }}
//         />
//       </div>
//     </div>
//   </main>
// </div>
