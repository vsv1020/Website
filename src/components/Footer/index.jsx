import { Img, Select, SelectTrigger, SelectContent, SelectValue, SelectItem, SelectItems, Text } from "components/ui";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Footer({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex self-stretch items-end mt-[98px] p-[30px] sm:p-5 bg-deep_purple-a200_33 shadow-sm`}
    >
      <div className="mx-auto mt-2.5 flex w-full max-w-[1352px] items-center justify-between gap-5 md:flex-col">
        <div className="flex w-[84%] justify-between gap-5 md:w-full md:flex-col">
          <Text as="p" className="text-[20px] font-normal text-black-900_02">
            Copyright © 2024 All Rights Reserved.
          </Text>
          <ul className="flex flex-wrap gap-2.5">
            <li>
              <a href="Contact" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[20px] font-normal text-black-900_02">
                  Contact
                </Text>
              </a>
            </li>
            <li>
              <a href="us" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[20px] font-normal text-black-900_02">
                  us
                </Text>
              </a>
            </li>
            <li>
              <a href="Privacy" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[20px] font-normal text-black-900_02">
                  Privacy
                </Text>
              </a>
            </li>
            <li>
              <a href="Policy" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[20px] font-normal text-black-900_02">
                  Policy
                </Text>
              </a>
            </li>
            <li>
              <a href="Terms" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[20px] font-normal text-black-900_02">
                  Terms
                </Text>
              </a>
            </li>
            <li>
              <a href="of" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[20px] font-normal text-black-900_02">
                  of
                </Text>
              </a>
            </li>
            <li>
              <a href="service" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[20px] font-normal text-black-900_02">
                  service
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <Select name="Language Selector">
          <SelectTrigger shape="round" className="w-[8%] gap-0.5 rounded-[5px] md:w-full">
            <SelectValue placeholder={`English`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItems
              options={dropDownOptions}
              labelIcon={<Img src="images/img_united_kingdom.png" alt="United Kingdom" className="h-[20px] w-[20px]" />}
            />
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
