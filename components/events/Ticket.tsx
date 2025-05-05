import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

type EventTicketProps = {
  ticket: {
    ticketToken: string;
    hasPaid: boolean;
    createdAt: string;
    event: {
      _id: string;
      title: string;
      date: string;
      time: string;
      venue: string;
      imageUrl: string;
    };
    user: {
      _id: string;
      name: string;
      email: string;
    };
  };
};

export const EventTicket = ({ ticket }: EventTicketProps) => {
  const { event, user, ticketToken, hasPaid } = ticket;

  const qrValue = JSON.stringify({
    ticketToken,
    userId: user._id,
    eventId: event._id,
    hasPaid,
  });

  return (
    <div className="flex w-lg h-48 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Left Ticket Image */}
      <div className="w-1/3 relative">
        <Image
          src={"/icon/ticket.jpg"}
          alt="Event"
          layout="fill"
          objectFit="cover"
          className="rounded-l-xl"
        />
      </div>

      {/* Center Info */}
      <div className="w-2/3 p-4 flex flex-col justify-between relative">
        <div>
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500">{event.venue}</p>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>
            📅 <span className="font-medium">{event.date}</span>
          </p>
          <p>
            ⏰ <span className="font-medium">{event.time}</span>
          </p>
          <p>
            🎟️{" "}
            <span className={hasPaid ? "text-green-600" : "text-red-500"}>
              {hasPaid ? "Paid" : "Unpaid"}
            </span>
          </p>
        </div>

        {/* QR Code */}
        <div className="absolute bottom-4 right-4">
          <QRCodeCanvas value={qrValue} size={64} />
        </div>
      </div>
    </div>
  );
};
