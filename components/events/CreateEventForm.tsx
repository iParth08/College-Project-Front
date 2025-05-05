"use client";

import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CalendarIcon,
  ImageIcon,
  MapPinIcon,
  TagIcon,
  TextCursorInputIcon,
  UsersIcon,
  WalletIcon,
  BadgeIndianRupeeIcon,
} from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Button } from "../ui/button";

const CreateEventForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isPaid, setIsPaid] = useState("free");
  const [mapLink, setMapLink] = useState("");

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 text-center">
        Create New Event / Workshop
      </h1>

      <form className="space-y-8">
        {/* Event Name */}
        <div className="space-y-2">
          <Label htmlFor="eventName" className="flex items-center gap-2">
            <TextCursorInputIcon className="w-4 h-4" />
            Event Name
          </Label>
          <Input id="eventName" placeholder="Hackathon 2025" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="flex items-center gap-2">
            <TagIcon className="w-4 h-4" />
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Event description..."
            rows={4}
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <Label htmlFor="banner" className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            Banner Image
          </Label>
          <Input id="banner" type="file" accept="image/*" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Max Participants */}
          <div className="space-y-2">
            <Label
              htmlFor="maxParticipants"
              className="flex items-center gap-2"
            >
              <UsersIcon className="w-4 h-4" />
              Max Participants
            </Label>
            <Input id="maxParticipants" type="number" min={1} />
          </div>

          {/* Venue */}
          <div className="space-y-2">
            <Label htmlFor="venue" className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              Venue
            </Label>
            <Input id="venue" placeholder="Auditorium, Block C" />
          </div>

          {/* Date Picker */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              Date & Time
            </Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow"
            />
          </div>

          {/* Type */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <TagIcon className="w-4 h-4" />
              Type
            </Label>
            <Select defaultValue="event">
              <SelectTrigger>
                <span>Choose Type</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="event">Event</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Payment Type */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <WalletIcon className="w-4 h-4" />
              Payment Type
            </Label>
            <Select value={isPaid} onValueChange={setIsPaid}>
              <SelectTrigger>
                <span>{isPaid === "paid" ? "Paid" : "Free"}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amount */}
          {isPaid === "paid" && (
            <div className="space-y-2">
              <Label htmlFor="amount" className="flex items-center gap-2">
                <BadgeIndianRupeeIcon className="w-4 h-4" />
                Amount (₹)
              </Label>
              <Input
                id="amount"
                type="number"
                min={1}
                placeholder="Enter fee"
              />
            </div>
          )}

          {/* Embedded Map URL */}
          <div className="col-span-full space-y-2">
            <Label htmlFor="map" className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              Google Maps Embed Link
            </Label>
            <Input
              id="map"
              placeholder="Paste embed link here"
              value={mapLink}
              onChange={(e) => setMapLink(e.target.value)}
            />
            {mapLink && (
              <div className="mt-4 rounded-lg overflow-hidden border shadow">
                <iframe
                  src={mapLink}
                  className="w-full h-64"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <Button type="submit" className="w-full text-lg">
            Create Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
