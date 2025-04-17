import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Work from "@/components/Home/Work";
import Table from "@/components/Home/Table";
import Features from "@/components/Home/Features";
import Trade from "@/components/Home/Trade";
import Simple from "@/components/Home/Simple";
import Faq from "@/components/Home/Faq";
import { Metadata } from "next";
import ContactUs from "@/components/Home/Contact";
export const metadata: Metadata = {
  title: "Chainguard",
};

export default function Home() {
  return (
    <main>
      <Hero />

      <Work />
      <Table />
      <Features />
      <Simple />
      <Trade />
      <Faq />
      <ContactUs />
    </main>
  );
}
