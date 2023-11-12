import React from "react";
import Link from "next/link";

export default function user() {
  return (
    <div>
      user
      <Link href="/booking/room/room">go to room</Link>
    </div>
  );
}
