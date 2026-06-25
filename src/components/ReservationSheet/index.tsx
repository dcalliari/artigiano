'use client'

import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  SheetTrigger,
  SheetTitle,
  SheetClose,
  SheetFooter,
  SheetContent,
  Sheet,
} from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select'
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { useToast } from '@/components/ui/use-toast'

const GOOGLE_BOOKING_URL = 'https://maps.app.goo.gl/fnNPvmhLtxyhdAs58'

export function ReservationSheet() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedPeople, setSelectedPeople] = useState('')
  const { toast } = useToast()

  const handleReservation = () => {
    if (!selectedPeople) {
      toast({
        description: 'Por favor, selecione a quantidade de pessoas.',
        variant: 'destructive',
      })
      return
    }
    if (!selectedDate) {
      toast({
        description: 'Por favor, selecione uma data.',
        variant: 'destructive',
      })
      return
    }
    window.open(GOOGLE_BOOKING_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="red" size="lg">
          RESERVAS
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full max-w-md flex-col gap-6 bg-zinc-900 p-6 dark:bg-gray-950">
        <div className="flex items-center justify-between text-white">
          <div>
            <SheetTitle>Faça sua Reserva</SheetTitle>
          </div>
        </div>
        <div className="grid gap-4 text-white">
          <div className="grid gap-2">
            <Label htmlFor="pessoas">Quantidade de Pessoas</Label>
            <Select onValueChange={setSelectedPeople}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione a quantidade de pessoas" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-700 text-white">
                <SelectItem value="1">1 pessoa</SelectItem>
                <SelectItem value="2">2 pessoas</SelectItem>
                <SelectItem value="3">3 pessoas</SelectItem>
                <SelectItem value="4">4 pessoas</SelectItem>
                <SelectItem value="5">5 pessoas</SelectItem>
                <SelectItem value="6">6 pessoas</SelectItem>
                <SelectItem value="7">7 pessoas</SelectItem>
                <SelectItem value="8">8+ pessoas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 text-white">
            <Label htmlFor="data">Data</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full" variant="outline" size="lg">
                  <CalendarDays className="mr-2 size-4 opacity-50" />
                  {selectedDate
                    ? selectedDate.toLocaleDateString('pt-BR')
                    : 'Escolha uma Data'}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-auto bg-zinc-700 p-0 text-white"
              >
                <Calendar
                  onSelectDate={(date: Date) => {
                    setSelectedDate(date)
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <SheetFooter>
          <Button
            className="w-full"
            variant="red"
            size="lg"
            onClick={handleReservation}
          >
            Reservar pelo Google
          </Button>
          <SheetClose asChild>
            <Button className="w-full" variant="gray" size="lg">
              Cancelar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
