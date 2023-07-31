"use client";
import ButtonIcon from "./ButtonIcon";
import { sharingAction, copyToClipboard } from "@/utils/postFunctions";

export function Sharing({ postURL }: { postURL: string }) {
  return (
    <>
      <ButtonIcon
        icon="facebook"
        tooltip="Share on Facebook"
        onClick={() => {
          sharingAction("facebook", postURL);
        }}
      />
      <ButtonIcon
        icon="twitter"
        tooltip="Share on Twitter"
        onClick={() => {
          sharingAction("twitter", postURL);
        }}
      />
      <ButtonIcon
        icon="reddit"
        tooltip="Post on Reddit"
        onClick={() => {
          sharingAction("reddit", postURL);
        }}
      />
      <ButtonIcon
        icon="link"
        tooltip="Copy URL"
        onClick={() => {
          copyToClipboard(postURL);
        }}
      />
    </>
  );
}
