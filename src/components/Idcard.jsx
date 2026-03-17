import React from "react";

export const Idcard = ({name, email, gender , studentCode}) => {
  return (
    <div className="w-107.5 h-67.5 rounded-[20px] bg-[#88d8e3] flex items-center justify-center">
      <div className="w-90 h-60  flex flex-col">
        <div className="w-full h-17.5 flex flex-col">
          <p className="h-10 flex items-center text-[30px] text-[#00756f] font-semibold ml-2.5">
            STUDENT
          </p>
          <div className="w-full h-1 bg-[#00756f]"></div>
          <p className="h-6.5 flex items-center text-white text-[16px] font-semibold ml-2.5">
            IDENTITY CARD
          </p>
        </div>
        <div className="w-full h-42.5 flex">
          <div className="h-full w-60 flex flex-col justify-center items-start gap-2.5">
            <div className="h-6.25 flex flex-col items-start gap-1.25 ml-2.5">
              <p className="h-2.5 flex items-center text-[#00756f] font-semibold">Studies at</p>
              <p className="h-2.5 flex items-center text-black font-medium">PINECONE</p>
            </div>
            <div className="h-6.25 flex flex-col items-start gap-1.25 ml-2.5">
              <p className="h-2.5 flex items-center text-[#00756f] font-semibold">Name</p>
              <p className="h-2.5 flex items-center text-black font-medium">{name}</p>
            </div>
            <div className="h-6.25 flex flex-col items-start gap-1.25 ml-2.5">
              <p className="h-2.5 flex items-center text-[#00756f] font-semibold">Gender</p>
              <p className="h-2.5 flex items-center text-black font-medium">{gender}</p>
            </div>
            <div className="h-6.25 flex flex-col items-start gap-1.25 ml-2.5">
              <p className="h-2.5 flex items-center text-[#00756f] font-semibold">E-mail</p>
              <p className="h-2.5 flex items-center text-black font-medium">{email}</p>
            </div>
          </div>
          <div className="h-full w-30 flex flex-col">
            <img
              className="w-full h-35 object-cover"
              src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
              alt=""
            />
            <p className="mt-1.5 text-[15px] text-black font-light flex justify-center">
              {studentCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
