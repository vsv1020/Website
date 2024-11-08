import { Img, Heading, Separator, Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "components/ui";
import React from "react";

export default function Header({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center p-[26px] sm:p-5 bg-gray-50 shadow-xs`}>
      <div className="mx-auto flex w-full max-w-[1352px] items-start justify-between gap-5 self-end md:flex-col">
        <Img
          src="images/img_header_logo.png"
          alt="Header Logo"
          className="h-[24px] w-[86px] self-center object-contain"
        />
        <Menubar className="flex items-start gap-[38px] border-none md:flex-col">
          <MenubarMenu>
            <MenubarTrigger className="flex flex-col items-center">
              <Heading as="p" className="text-[12px] font-medium text-black-900_02">
                YouTube Video Downloader
              </Heading>
              <Separator orientation="horizontal" className="h-[2px] w-full bg-deep_purple-a200" />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Heading as="p" className="text-[12px] font-medium text-black-900_02">
                4K Video Downloader
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Heading as="p" className="text-[12px] font-medium text-black-900_02">
                YouTube to MP3
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Heading as="p" className="text-[12px] font-medium text-black-900_02">
                YouTube Playlist Downloader
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Heading as="p" className="text-[12px] font-medium text-black-900_02">
                YouTube to WAV
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Heading as="p" className="text-[12px] font-medium text-black-900_02">
                YouTube 1080p Downloader
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <a href="#">
          <Img src="images/img_frame_6.png" alt="Promo Image" className="h-[18px] object-cover md:w-full" />
        </a>
      </div>
    </div>
  );
}
