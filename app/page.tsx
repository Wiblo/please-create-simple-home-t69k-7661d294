import { WeddingInvite } from "@/components/sections/wedding/WeddingInvite"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anne & John's Wedding",
  description:
    "Join us as we celebrate the marriage of Anne and John on June 14th, 2026 at The Rosewood Gardens.",
}

export default function HomePage() {
  return <WeddingInvite />
}
