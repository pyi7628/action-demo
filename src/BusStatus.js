import React from "react";
import {minus} from "./utils/calculate";

// 버스 잔여 좌석이 음수가 나오면 안됨!
function BusStatus({seatCount, passengerCount}) {
  return <div aria-label="잔여 좌석">{minus(seatCount, passengerCount)}</div>;
}

export default BusStatus;
