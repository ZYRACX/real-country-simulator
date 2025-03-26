'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React from 'react';

const itemList = ['Iron', 'Coal', 'Silver', 'Gold', 'Copper', 'Platinum', 'Zinc', 'Nickel', 'Lead', 'Tin', 'Mercury'];

export default function Page({ params }: { params: { item: string } }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedItem, setSelectedItem] = useState('');
  const [filteredItems, setFilteredItems] = useState(itemList);
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const frameworks = [
    { value: "Iron", label: "Iron" },
    { value: "Coal", label: "Coal" },
    { value: "Silver", label: "Silver" },
    { value: "Gold", label: "Gold" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      selectedItem,
      amount: Number(amount),
      price: Number(price),
    });
  };

  const handleItemSearch = (value: string) => {
    setSelectedItem(value);
    setFilteredItems(itemList.filter((item) => item.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <div className="p-4 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Listing: {params.item}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="itemName">Item Name:</Label>
          </div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)?.label
                  : "Select item..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search items..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No item found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="amount">Amount:</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="1"
                placeholder="Enter amount"
                disabled={!selectedItem}
              />
            </div>

            <div>
              <Label htmlFor="price">Price:</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                step="0.01"
                required
                min="0.01"
                placeholder="Enter price"
                disabled={!selectedItem}
              />
            </div>

            <Button type="submit" className="w-full" disabled={!selectedItem}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}