import React from "react";
import { Button } from "../ui/button";

const SingleEvent = () => {
  return (
    <div className="">
      <section>Media Section / Image/ Video player</section>
      <section className="flex">
        <div>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            vitae nostrum enim similique, nulla repudiandae dolores ipsam totam
            officia odio impedit eius doloremque veritatis. Expedita sint
            ducimus voluptas assumenda. Iusto?
          </p>

          <div>Organizer Details</div>
        </div>
        <div>
          <div>Map for venue</div>
          <span>Venue</span>
          <span>Time</span>
          Other detail list
          <Button>Action Button</Button>
        </div>
      </section>
    </div>
  );
};

export default SingleEvent;
