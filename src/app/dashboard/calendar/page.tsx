'use client';

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row justify-between gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date > new Date()}
      />

      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border shadow"
      />

      <div className="w-full p-4 bg-white rounded-md border border-gray-200">
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>
          {multipleDates?.map((date) => date.toLocaleDateString()).join(", ")}
        </p>
      </div>
    </div>
  )
}
