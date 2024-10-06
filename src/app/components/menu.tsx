import React from "react";
import { Button } from "@/app/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Tooltip, TooltipContent } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Home from '../page';
import { House } from "lucide-react";

const Menu = () => {
    return(
        

        <header className="sm:hidden">
            <Sheet>
            <SheetTrigger asChild>
                <Button>Abrir</Button>
            </SheetTrigger>

            <SheetContent side={"left"}>
                <div>
                    <div>
                        <Link href={"#"} className="rounded-lg" >
                        <Button>
                            <House></House>
                        </Button>

                        </Link>
                    </div>
                
                    <div>

                    </div>
                    <div>

                    </div>

                    <div>

                    </div>
                </div>
            </SheetContent>
            </Sheet>


        </header>
      

    )
}

export default Menu;