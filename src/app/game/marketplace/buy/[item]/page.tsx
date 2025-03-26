import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function Page({
  params,
}: {
  params: Promise<{ item: string }>
}) {
  const marketplaceItems = [
    {
      name: "wood",
      available: [
        { user: "John", price: 10, amount: 100 },
        { user: "Jane", price: 10, amount: 100 },
        { user: "Jim", price: 10, amount: 100 }
      ]
    },
    {
      name: "stone",
      available: [
        { user: "John", price: 12, amount: 100 },
        { user: "Jane", price: 10, amount: 100 },
        { user: "Jim", price: 10, amount: 100 }
      ]
    }
  ];

  const { item } = await params;

  // Filter the item from the list that matches the passed item parameter
  const selectedItem = marketplaceItems.find((marketItem) => marketItem.name === item.toLocaleLowerCase());

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Items for {item}</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedItem?.available.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.user}</TableCell>
              <TableCell>${entry.price}</TableCell>
              <TableCell>{entry.amount}</TableCell>
              <TableCell>
                <Button>Buy</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
