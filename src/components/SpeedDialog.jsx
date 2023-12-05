import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
  QuestionMarkCircleIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/router";
import { useState } from "react";
import { HelpModal } from "@/components/HelpModal";
import { FeedbackModal } from "@/components/FeedbackModal";

export function SpeedDialog() {
  const [openHelp, setOpenHelp] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);

  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="absolute bottom-0 right-0">
          <SpeedDial placement="top">
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full bg-[#ffa500] shadow-xl">
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction onClick={handleHome}>
                <HomeIcon className="h-5 w-5" />
                <Typography {...labelProps}>
                  <label className="bg-white p-2 rounded-full shadow-xl">
                    Ir al inicio
                  </label>
                </Typography>
              </SpeedDialAction>
              <SpeedDialAction onClick={() => setOpenFeedback(true)}>
                <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                <Typography {...labelProps}>
                  <label className="bg-white p-2 rounded-full shadow-xl">
                    Feedback
                  </label>
                </Typography>
              </SpeedDialAction>
              <SpeedDialAction
                onClick={() => setOpenHelp(true)}
                className="ml-2"
              >
                <QuestionMarkCircleIcon className="h-5 w-5" />
                <Typography {...labelProps}>
                  <label className="bg-white p-2 rounded-full shadow-xl">Ayuda</label>
                </Typography>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
      <HelpModal open={openHelp} setOpen={setOpenHelp} />
      <FeedbackModal open={openFeedback} setOpen={setOpenFeedback} />
    </>
  );
}
