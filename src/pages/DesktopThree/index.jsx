import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import { Text, Heading, Img, Avatar, AvatarImage, Button, Progress, Input } from "components/ui";
import React, { Suspense } from "react";

const easeOfUseFeaturesList = [
  {
    userLockIcon: "images/img_lock_white_a700_01.svg",
    userHeadingText: "Easy to Use",
    userDescriptionText:
      "Lorem ipsum dolor sit amet consectetur. Gravida non lacus tempus dictumst molestie ultrices et.",
  },
  {
    userLockIcon: "images/img_download_white_a700_01_28x28.svg",
    userHeadingText: "No Need For Apps",
    userDescriptionText:
      "Lorem ipsum dolor sit amet consectetur. Gravida non lacus tempus dictumst molestie ultrices et. ",
  },
  {
    userLockIcon: "images/img_vector.svg",
    userHeadingText: "Well Secured",
    userDescriptionText:
      "Lorem ipsum dolor sit amet consectetur. Gravida non lacus tempus dictumst molestie ultrices et. ",
  },
];

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>Best YouTube Video Downloader - Download 4K and 1080p Videos</title>
        <meta
          name="description"
          content="Experience the ultimate YouTube Video Downloader for quick, hassle-free downloads. Download 4K, 1080p videos, and playlists without buffering. No download limits, easy to use, and completely free."
        />
      </Helmet>
      <div className="w-full border-2 border-solid border-black-900_33 bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="relative h-[806px] self-stretch">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
              <Header />
              <div className="relative mt-[-80px] flex h-[794px] items-start justify-center bg-[url(/public/images/img_group_100.png)] bg-cover bg-no-repeat py-[162px] md:h-auto md:py-5">
                <div className="mx-auto mb-[146px] flex w-full max-w-[1140px] justify-center px-14 md:px-5">
                  <div className="flex w-[82%] flex-col gap-16 md:w-full sm:gap-8">
                    <div className="mx-16 flex flex-col items-center gap-7 md:mx-0">
                      <Heading
                        size="headinglg"
                        as="h1"
                        className="text-[50px] font-bold text-black-900_02 md:text-[46px] sm:text-[40px]"
                      >
                        <span>All-in-One Video&nbsp;</span>
                        <span>Downloader</span>
                      </Heading>
                      <Text size="textxl" as="p" className="text-[22px] font-normal text-black-900_02">
                        Use this unique tool for quick, hassle-free downloads from any site.
                      </Text>
                      <Button
                        size="xs"
                        leftIcon={
                          <Img src="images/img_mdi_idea.svg" alt="Mdi:idea" className="mb-0.5 h-[24px] w-[24px]" />
                        }
                        className="w-full max-w-[714px] gap-1.5 self-stretch rounded-[5px]"
                      >
                        Note: WE DO NOT ALLOW/SUPPORT THE DOWNLOAD OF COPYRIGHTED MATERIAL!
                      </Button>
                    </div>
                    <div className="mr-1.5 flex justify-center gap-[22px] md:mr-0 md:flex-col">
                      <Input
                        shape="round"
                        placeholder={`https://youtu.be/LeL7Q3I91Rc?si`}
                        className="rounded-[5px] px-[22px]"
                      />
                      <Button
                        size="md"
                        className="w-full min-w-[140px] max-w-[140px] rounded-br-[5px] rounded-tr-[5px] font-semibold"
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-px left-0 right-0 m-auto flex w-[58%] items-center justify-center gap-5 rounded-[10px] bg-white-a700 px-4 py-7 shadow-lg md:relative md:flex-col sm:py-5">
              <Img
                src="images/img_web_capture_7_1.png"
                alt="Capture Image"
                className="h-[226px] w-[50%] rounded-[10px] object-contain md:w-full"
              />
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                <Heading
                  size="textmd"
                  as="h2"
                  className="w-full text-[18px] font-medium leading-[25px] text-black-900_02"
                >
                  Lorem ipsum dolor sit amet consectetur. Sit aenean nunc mi sit lacus vehicula morbi non. Morbi enim
                  nibh r etiam.
                </Heading>
                <Heading size="textmd" as="h3" className="mt-[22px] text-[18px] font-normal text-black-900_7f">
                  Duration: 2:01:07
                </Heading>
                <div className="relative mt-[46px] h-[44px] content-center self-stretch md:h-auto">
                  <Progress
                    value={99}
                    className="absolute left-0 right-0 top-[3.36px] m-auto h-[30px] flex-1 rounded-[14px] bg-gradient"
                    progressClassName="bg-gray-200 rounded-[14px]"
                  />
                  <Img
                    src="images/img_vector_44x64.png"
                    alt="Vector Image"
                    className="ml-[78px] h-[44px] w-[20%] object-contain md:ml-0"
                  />
                  <div className="absolute left-[24%] top-[9.63px] m-auto flex h-[18px] w-[12%] items-center justify-center bg-[url(/public/images/img_group_109.png)] bg-cover bg-no-repeat md:h-auto">
                    <div className="flex h-[16px] w-full items-center justify-center bg-[url(/public/images/img_group_109.png)] bg-cover bg-no-repeat px-0.5 md:h-auto">
                      <Heading as="h4" className="text-[12px] font-normal text-white-a700_01">
                        34%
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[68px] flex h-[1016px] items-center justify-center self-stretch bg-[url(/public/images/img_group_101.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="mx-auto mt-6 flex w-full max-w-[1140px] justify-center md:px-5">
              <div className="w-full">
                <div className="flex flex-col items-center gap-[108px] md:gap-[81px] sm:gap-[54px]">
                  <div className="self-stretch">
                    <div className="flex flex-col items-center gap-7 rounded-[10px] bg-white-a700_01 p-11 shadow-bs2 md:p-5">
                      <Heading
                        size="headings"
                        as="h2"
                        className="text-[36px] font-semibold text-black-900_02 md:text-[34px] sm:text-[32px]"
                      >
                        Best Youtube Video Downloader
                      </Heading>
                      <Text
                        as="p"
                        className="mb-14 self-stretch text-center text-[20px] font-normal leading-10 text-black-900_02"
                      >
                        The YouTube Video Downloader promises uninterrupted entertainment and a buffer-free experience
                        for your favorite YouTube content. This user-friendly tool helps you to download videos
                        effortlessly, eliminating the frustration of buffering. With a simple interface, the downloader
                        makes video downloads a breeze. One of the key features of this tool is its versatility. You get
                        to choose from a variety of quality options to customize your downloads according to your
                        preferences. Users can watch videos in high resolution without worrying about buffering
                        disruptions.{" "}
                      </Text>
                    </div>
                  </div>
                  <Heading
                    size="headingmd"
                    as="h3"
                    className="text-[48px] font-semibold text-black-900 md:text-[44px] sm:text-[38px]"
                  >
                    <span className="text-black-900">What Makes Us&nbsp;</span>
                    <span className="text-deep_purple-a200">Special</span>
                  </Heading>
                  <div className="flex gap-[22px] self-stretch md:flex-col">
                    <div className="flex w-[32%] cursor-pointer flex-col items-start justify-center gap-4 rounded-[14px] bg-white-a700_01 p-[26px] shadow-md hover:shadow-bs3 md:w-full sm:p-5">
                      <Button
                        shape="round"
                        className="w-[58px] rounded-[28px] border-[1.66px] border-solid border-white-a700_01 px-4"
                      >
                        <Img src="images/img_download_white_a700_01.svg" />
                      </Button>
                      <Heading size="headingxs" as="h4" className="text-[16px] font-semibold text-black-900_01">
                        No Download Limit
                      </Heading>
                      <Text
                        size="texts"
                        as="p"
                        className="mb-1 w-full text-[15px] font-normal leading-[30px] text-black-900_02"
                      >
                        Lorem ipsum dolor sit amet consectetur. Gravida non lacus tempus dictumst molestie ultrices et.
                      </Text>
                    </div>
                    <div className="flex w-[32%] cursor-pointer flex-col items-start justify-center rounded-[14px] bg-white-a700_01 p-[26px] shadow-md hover:shadow-bs3 md:w-full sm:p-5">
                      <div className="relative h-[58px] content-center self-stretch md:h-auto">
                        <Avatar className="h-[58px] w-[58px] rounded-[50%]">
                          <AvatarImage src="images/img_ellipse_3_deep_purple_a200.svg" alt="Circleimage" />
                        </Avatar>
                        <Img
                          src="images/img_television.svg"
                          alt="Television"
                          className="absolute bottom-0 left-[19px] top-0 my-auto h-[24px]"
                        />
                      </div>
                      <Heading size="headingxs" as="h5" className="mt-5 text-[16px] font-semibold text-black-900_01">
                        Downloads At No Cost
                      </Heading>
                      <Text
                        size="texts"
                        as="p"
                        className="mb-1 mt-3 w-full text-[15px] font-normal leading-[30px] text-black-900_02"
                      >
                        Lorem ipsum dolor sit amet consectetur. Faucibus a imperdiet varius elit. Quam eget cursus{" "}
                      </Text>
                    </div>
                    <div className="flex w-[32%] cursor-pointer flex-col items-start justify-center rounded-[14px] bg-white-a700_01 p-[26px] shadow-md hover:shadow-bs3 md:w-full sm:p-5">
                      <div className="relative h-[58px] content-center self-stretch md:h-auto">
                        <Avatar className="h-[58px] w-[58px] rounded-[50%]">
                          <AvatarImage src="images/img_ellipse_3_deep_purple_a200.svg" alt="Circleimage" />
                        </Avatar>
                        <Img
                          src="images/img_settings.svg"
                          alt="Settings"
                          className="absolute bottom-0 left-[17px] top-0 my-auto h-[18px]"
                        />
                      </div>
                      <Heading
                        size="headingxs"
                        as="h6"
                        className="mt-[22px] text-[16px] font-semibold text-black-900_01"
                      >
                        The Best Speeds
                      </Heading>
                      <Text
                        size="texts"
                        as="p"
                        className="mb-1 mt-2.5 w-full text-[15px] font-normal leading-[30px] text-black-900_02"
                      >
                        Lorem ipsum dolor sit amet consectetur. Gravida non lacus tempus dictumst molestie ultrices et.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[26px] w-full max-w-[1140px] md:px-5">
            <div className="flex gap-[26px] md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {easeOfUseFeaturesList.map((d, index) => (
                  <UserProfile {...d} key={"featuresList" + index} />
                ))}
              </Suspense>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
