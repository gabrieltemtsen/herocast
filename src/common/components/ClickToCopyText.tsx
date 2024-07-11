import React, { useState } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

type ClickToCopyTextProps = {
  buttonText?: string;
  text: string;
};

const ClickToCopyText = ({ buttonText, text }: ClickToCopyTextProps) => {
  const [didClickCopyShare, setDidClickCopyShare] = useState(false);

  const getButtonText = () => {
    if (didClickCopyShare) return "Copied";
    if (buttonText) return buttonText;
    return "Copy";
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="flex gap-x-2 px-4"
      disabled={didClickCopyShare}
      onClick={() => {
        setDidClickCopyShare(true);
        navigator.clipboard.writeText(text);
        setTimeout(() => {
          setDidClickCopyShare(false);
        }, 2000);
      }}
    >
      <ClipboardDocumentIcon
        className={clsx(
          "h-5 w-5 mt-0.5",
          didClickCopyShare ? "text-muted-foreground" : "text-foreground"
        )}
      />
      {getButtonText()}
    </Button>
  );
};

export default ClickToCopyText;
