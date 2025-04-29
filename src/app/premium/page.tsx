"use client";
import Tebex from "@tebexio/tebex.js";
import { useEffect } from "react";

export default function Premium() {
  useEffect(() => {
    Tebex.checkout.init({
      ident: "checkout request ident",
    });
  }, []);
  return (
    <div>
      <p>Premium</p>
    </div>
  );
}
