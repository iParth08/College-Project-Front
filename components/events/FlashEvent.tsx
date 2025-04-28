import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const FlashEvent = () => {
  return (
    <div>
      <div>Club Logo</div>
      <h1>Title</h1>
      <span>Participant Count 99</span>
      <div>
        <Link href="/events/eventId">
          <Button>Register</Button>
        </Link>
      </div>
      it will have animated bgpicture or video bg
    </div>
  );
};

export default FlashEvent;
