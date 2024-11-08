import { Text, Heading, Img, Avatar, AvatarImage } from "components/ui";
import React from "react";

export default function UserProfile({
  userLockIcon = "images/img_lock_white_a700_01.svg",
  userHeadingText = "Easy to Use",
  userDescriptionText = "Lorem ipsum dolor sit amet consectetur. Gravida non lacus tempus dictumst molestie ultrices et.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[32%] md:w-full p-[26px] sm:p-5 bg-white-a700_01 shadow-md rounded-[14px]`}
    >
      <div className="relative h-[58px] content-center self-stretch">
        <Avatar className="h-[58px] w-[58px] rounded-[50%]">
          <AvatarImage src="images/img_ellipse_3_deep_purple_a200.svg" alt="Circle Image" />
        </Avatar>
        <Img src={userLockIcon} alt="Lock Image" className="absolute bottom-0 left-4 top-0 my-auto h-[22px]" />
      </div>
      <Heading size="headingxs" as="h6" className="mt-[22px] text-[16px] font-semibold text-black-900_01">
        {userHeadingText}
      </Heading>
      <Text size="texts" as="p" className="mb-1.5 mt-2 w-full text-[15px] font-normal leading-[30px] text-black-900_02">
        {userDescriptionText}
      </Text>
    </div>
  );
}
