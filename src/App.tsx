import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./index.css";
//import { Button } from "./components/ui/button";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@radix-ui/react-menubar";
//import { MenubarShortcut } from "./components/ui/menubar";

function ProfileHeader() {
  //const [count, setCount] = React.useState(0);

  return (
    <div className="bg-orange-50 p-6 rounded-2xl  shadow-lg flex flex-row justify-between items-center">
      <p className="font-bold text-orange-900 text-xl tracking-widest ">
        Sales Portal
      </p>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-end">
                <p className="text-sm font-semibold">Ayrton Lacerda</p>
                <p className="text-sm">ayrton@redsparl.io</p>
              </div>
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </MenubarTrigger>
          <MenubarContent className="bg-white py-3 rounded-xl space-y-4 border-2">
            <MenubarItem className="px-6">Perfil</MenubarItem>
            <MenubarItem className="px-6">Configurações</MenubarItem>
            <MenubarSeparator className="bg-gray-200 h-[1px]" />
            <MenubarItem className="px-6 text-red-700 font-semibold">
              Sair
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default ProfileHeader;
