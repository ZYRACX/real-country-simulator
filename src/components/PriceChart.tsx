'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';

// Define the type for each price data point
interface PriceData {
  timestamp: string;
  price: number;
}

// Props interface: expects itemId as a string
interface PriceChartProps {
  itemId: string;
}

export default function PriceChart({ itemId }: PriceChartProps) {
  // State to store the formatted chart data
  const [data, setData] = useState<Array<{ time: string; price: number }>>([]);

  useEffect(() => {
    // Fetch price history data from the API
    const fetchPrices = async () => {
      try {
        const res = await axios.get(`/api/item/${itemId}/prices`);

        // Format the timestamp for display and keep the price
        const formatted = res.data.map((entry: PriceData) => ({
          time: new Date(entry.timestamp).toLocaleTimeString(),
          price: entry.price,
        }));

        setData(formatted);
      } catch (error) {
        console.error('Failed to fetch price data:', error);
      }
    };

    fetchPrices();
  }, [itemId]); // Refetch when itemId changes

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        {/* X-axis shows time */}
        <XAxis dataKey="time" />

        {/* Y-axis auto-scales based on price values */}
        <YAxis />

        {/* Tooltip shows price and timestamp on hover */}
        <Tooltip />

        {/* Line represents price over time */}
        <Line
          type="monotone"
          dataKey="price"
          stroke="#10b981" // Green color line
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
