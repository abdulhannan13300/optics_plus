import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <main className="flex ">
      <div className="w-[50%]">
        <Tabs defaultValue="new_customer" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger className="text-xs" value="new_customer">
              Add New Customer
            </TabsTrigger>
            <TabsTrigger className="text-xs" value="new_prescription">
              Add New Prescription
            </TabsTrigger>
          </TabsList>
          <TabsContent value="new_customer">
            <Card className="px-4 py-2 flex">
              {/* <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader> */}
              <div>
                <div className="space-y-1 flex pt-3">
                  <Label htmlFor="name" className="m-1.5">
                    Name
                  </Label>
                  <Input
                    className="h-5 p-1 text-xs"
                    id="name"
                    placeholder="Enter name"
                    // defaultValue="Pedro Duarte"
                  />
                </div>
                <div className="space-y-1 flex pt-3">
                  <Label htmlFor="contact_number" className="m-1.5">
                    Contact No.
                  </Label>
                  <Input
                    className="h-5 p-1 text-xs"
                    id="name"
                    placeholder="Enter Contact Number"
                    // defaultValue="Pedro Duarte"
                  />
                </div>
                <div className="space-y-1 flex pt-3">
                  <Label htmlFor="dob" className="m-1.5">
                    DOB
                  </Label>
                  <Input
                    type="date"
                    className="h-5 p-1 text-xs"
                    id="dob"
                    placeholder="Enter Contact Number"
                    // defaultValue="Pedro Duarte"
                  />
                </div>
                <div className="space-y-1 flex pt-3">
                  <Label htmlFor="dob" className="m-1.5">
                    DOB
                  </Label>
                  <Input
                    type="date"
                    className="h-5 p-1 text-xs"
                    id="dob"
                    placeholder="Enter Contact Number"
                    // defaultValue="Pedro Duarte"
                  />
                </div>
                <div className="space-y-1 flex pt-3">
                  <Label htmlFor="dob" className="m-1.5">
                    DOB
                  </Label>
                  <Input
                    type="date"
                    className="h-5 p-1 text-xs"
                    id="dob"
                    placeholder="Enter Contact Number"
                    // defaultValue="Pedro Duarte"
                  />
                </div>
                <div className="space-y-1 flex pt-3">
                  <Label htmlFor="dob" className="m-1.5">
                    DOB
                  </Label>
                  <Input
                    type="date"
                    className="h-5 p-1 text-xs"
                    id="dob"
                    placeholder="Enter Contact Number"
                    // defaultValue="Pedro Duarte"
                  />
                </div>
              </div>
              <div>
                <CardFooter className=" w-full flex flex-col text-center justify-center ">
                  <Button>Save changes</Button>
                  <Button>Save changes</Button>
                  <Button>Save changes</Button>
                  <Button>Save changes</Button>
                </CardFooter>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="new_prescription">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="w-[50%]">left dv</div>
    </main>
  );
};

export default Page;
