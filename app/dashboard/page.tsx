'use client'

import { UserRound } from "lucide-react";
import { CardSummary } from "./components/CardSummary"


export default function Home() {
  return (
      <div>
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
          <CardSummary
          icon={UserRound}
          total="12,500"
          avarage={15}
          title="Apartado 1"
          tooltipText="Tool tips apartado 1"
          />
          <div>Card summary 2</div>
          <div>Card summary 3</div>
        </div>
      </div>
  );
}
