import {
  Button,
  Hyperlink,
  TabBar,
  TabBarItem,
  TabBody,
  TabController,
  TextField,
} from "@resetpower/rcs";
import { useState } from "react";
import {
  MdInfo,
  MdSettings,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { BsGithub } from "react-icons/bs";

export default function Entrance() {
  const [pwVisible, setPwVisible] = useState(false);

  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center text-white text-opacity-90 space-y-3">
        <div className="text-center text-4xl font-medium">Quatre</div>
        <div className="text-center">
          An extremely poor third-party QQ client.
          <br /> This software has no relationship with Tencent.
        </div>
      </div>
      <div className="w-1/2 p-3 flex flex-col">
        <div className="text-center text-xl font-medium my-6">
          Login to Quatre
        </div>
        <TabController className="flex-grow" orientation="horizontal">
          <TabBar>
            <TabBarItem value={0}>Password</TabBarItem>
            <TabBarItem value={1}>QR Code</TabBarItem>
          </TabBar>
          <TabBody>
            <div className="space-y-3">
              <TextField label="QQ Number" placeholder="QQ Number" />
              <TextField
                label="Password"
                placeholder="Password"
                type={pwVisible ? "text" : "password"}
                trailing={
                  <Hyperlink onClick={() => setPwVisible((v) => !v)}>
                    {pwVisible ? <MdVisibilityOff /> : <MdVisibility />}
                  </Hyperlink>
                }
              />
              <div className="flex">
                <Button variant="contained">Login</Button>
              </div>
            </div>
            <div>QR Code is coming soon</div>
          </TabBody>
        </TabController>
        <div className="flex justify-center">
          <Button>
            <MdInfo /> About
          </Button>
          <Button>
            <MdSettings /> Preferences
          </Button>
          <Button>
            <BsGithub /> GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
