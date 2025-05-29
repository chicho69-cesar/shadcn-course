'use client'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-col justify-center items-center h-[250px]">
      <InputOTP
        maxLength={10}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        
        <InputOTPSeparator />

        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>

        <InputOTPSeparator />

        <InputOTPGroup>
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
          <InputOTPSlot index={8} />
          <InputOTPSlot index={9} />
        </InputOTPGroup>
      </InputOTP>

      <div className="mt-2">{value}</div>
    </div>
  )
}
