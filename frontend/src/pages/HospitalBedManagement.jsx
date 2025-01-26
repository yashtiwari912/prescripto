"use client"

import { useState } from "react"
import { Card } from "../components/ui/Card.jsx"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs.jsx"
import { BedIcon } from "../components/Bed-icon.jsx"

const ROWS = 7
const COLS = 12
const TOTAL_BEDS = ROWS * COLS

const hospitalBeds = Array.from({ length: TOTAL_BEDS }, (_, i) => ({
  id: i + 1,
  occupied: Math.random() > 0.5,
}))

export default function HospitalBedManagement() {
  const [beds, setBeds] = useState(hospitalBeds)

  const toggleBedStatus = (id) => {
    setBeds(beds.map((bed) => (bed.id === id ? { ...bed, occupied: !bed.occupied } : bed)))
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="beds" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="beds">Beds Availability</TabsTrigger>
          <TabsTrigger value="opd">OPD's Availability</TabsTrigger>
        </TabsList>
        <TabsContent value="beds">
          <Card>
            <Card.Header>
              <Card.Title>Beds Availability</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="grid grid-cols-12 gap-2">
                {beds.map((bed) => (
                  <button
                    key={bed.id}
                    className={`aspect-square p-0 flex items-center justify-center border ${bed.occupied ? "bg-gray-200" : "bg-white hover:bg-gray-100"
                      }`}
                    onClick={() => toggleBedStatus(bed.id)}
                  >
                    <BedIcon occupied={bed.occupied} adjustable={bed.id % 2 === 0} />
                  </button>
                ))}
              </div>
            </Card.Content>
          </Card>
        </TabsContent>
        <TabsContent value="opd">
          <Card>
            <Card.Header>
              <Card.Title>OPD's Availability</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="grid grid-cols-12 gap-1 bg-blue-100 p-4">
                {Array.from({ length: 96 }, (_, i) => (
                  <div key={i} className={`aspect-square ${Math.random() > 0.5 ? "bg-gray-200" : "bg-gray-800"}`} />
                ))}
              </div>
            </Card.Content>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
