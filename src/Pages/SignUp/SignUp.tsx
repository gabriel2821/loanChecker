import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Field } from "@/components/ui/field";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    income: "",
    location: "",
  });

  const sabahAreas = [
    "Kota Kinabalu",
    "Penampang",
    "Putatan",
    "Tuaran",
    "Sandakan",
    "Tawau",
    "Lahad Datu",
    "Keningau",
    "Beaufort",
    "Ranau",
    "Semporna",
  ];

  const handleChange = (
    field: keyof typeof formData,
    value: string | number
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field>
              <Label>Username</Label>
              <Input
                placeholder="Enter username"
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
              />
            </Field>

            <Field>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </Field>

            <Field>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </Field>

            <Field>
              <Label>Monthly Income (RM)</Label>
              <Input
                type="number"
                placeholder="Example: 3000"
                value={formData.income}
                onChange={(e) => handleChange("income", e.target.value)}
              />
            </Field>

            <Field>
              <Label>Location (Sabah)</Label>
              <Select
                onValueChange={(value) => handleChange("location", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select area" />
                </SelectTrigger>
                <SelectContent>
                  {sabahAreas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Button type="submit" className="text-lg p-6 rounded-xl">
                Create Account
              </Button>
            </Field>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
