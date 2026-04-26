"use client";

import { useState } from "react";

export default function Upload() {
  const [isCard, setIsCard] = useState<
    { image: string; title: string; content: string }[]
  >([]);
  const [isText, setIsText] = useState({ title: "", content: "" });

  async function HandleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return null;
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
    );
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    console.log(data);

    setIsCard([
      ...isCard,
      { image: data.secure_url, title: isText.title, content: isText.content },
    ]);
    setIsText({ title: "", content: "" });
  }

  return (
    <>
      <div className=" flex flex-col items-center pt-9">
        <h1 className="text-2xl">this is a card </h1>
        <div className="border border-blue-500 flex flex-col gap-5 p-6 mt-5 w-1/3 rounded-xl">
          <input type="file" accept="image/*" onChange={HandleUpload} />
          <input
            className="p-3 border border-black rounded-xl"
            placeholder="enter title"
            type="text"
            value={isText.title}
            onChange={(e) => setIsText({ ...isText, title: e.target.value })}
          />
          <input
            className="p-3 border border-black rounded-xl"
            placeholder="enter content"
            type="text"
            value={isText.content}
            onChange={(e) => setIsText({ ...isText, content: e.target.value })}
          />
        </div>
      </div>
      <div className="w-auto h-auto mt-14 px-9">
        <div className="w-80 flex gap-4">
          {isCard.map((cards, idx) => (
            <div className="" key={idx}>
              <img src={cards.image} alt="img" />
              <div className="text-center mt-2">
              <h1 className="font-medium text-xs">{cards.title}</h1>
              <p className="font-medium text-xs">{cards.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


 