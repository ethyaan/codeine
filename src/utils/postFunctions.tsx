export const sharingAction = (action: string, urlToShare?: string): void => {
  const url = urlToShare || window.location.href;
  const URLS: any = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    twitter: "https://twitter.com/intent/tweet?url=",
    reddit: "https://www.reddit.com/submit?url=",
  };
  window.open(`${URLS[action]}${url}`, "_blank");
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
