import React from 'react'
import { minus } from './utils/calculate'

function BusStatics({curPassengerCount, prevPassengerCount}) {
  return (
    <div aria-label="전일대비 승객추이">{minus(curPassengerCount, prevPassengerCount)}</div>
  )
}

export default BusStatics;