'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AddItemPage() {
  const [form, setForm] = useState({ name: '', description: '', rarity: '', value: 0 });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'value' ? Number(value) : value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/items/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || 'Failed to add item');
    } else {
      alert('Item added!');
      setForm({ name: '', description: '', rarity: '', value: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-md mx-auto">
      <Input name="name" value={form.name} onChange={handleChange} placeholder="Item name" required />
      <Input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <Input name="rarity" value={form.rarity} onChange={handleChange} placeholder="Rarity" />
      <Input name="value" type="number" value={form.value} onChange={handleChange} placeholder="Value" />
      <Button type="submit">➕ Add Item</Button>
    </form>
  );
}
