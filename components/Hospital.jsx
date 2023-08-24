import React from "react";
import Image from "next/image";

export default function Hospital({name}) {
  return (
    <div
      style={{
        backgroundColor: "#D7CBCB",
        padding: "40px",
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        boxShadow: "10px 15px 30px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Image
        src="/assets/blue-cross.png"
        width="100"
        height="100"
        alt="Picture of the author"
        style={{ marginRight: 10 }}
      />
      <div
        style={{
          flex: 1,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: 25 }}>
          {name}
        </p>
        <p style={{ fontWeight: "bold" }}>
          Price Range:${Math.floor(Math.random() * (3314 - 2298 + 1)) + 2293} -
          ${Math.floor(Math.random() * (7314 - 4298 + 1)) + 4293}
        </p>
        <p>Location: 1000 Honors</p>
        <p>+1 949 696 6969</p>
      </div>
    </div>
  );
}