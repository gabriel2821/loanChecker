import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError } from "@/components/ui/field";
import { useUser } from "@/components/Context/UserContext";

function SignUp() {
  const { setUser } = useUser();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [income, setIncome] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Username validation
    if (!userName.trim()) {
      newErrors.userName = "Username is required";
    } else if (userName.trim().length < 3) {
      newErrors.userName = "Username must be at least 3 characters";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Income validation
    if (!income) {
      newErrors.income = "Please select an income range";
    }

    // Location validation
    if (!location) {
      newErrors.location = "Please select a location";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Store user data in context
    const newUser = {
      name: userName,
      email: email,
      avatar: "/avatars/default-avatar.jpg",
      address: location,
      income: income,
    };

    setUser(newUser);

    // Simulate signup logic
    alert(`Sign up successful!\n\nName: ${userName}\nEmail: ${email}\nIncome: ${income}\nLocation: ${location}`);
    navigate("/");
  };

   const incomeRanges = [
     "0–20,000",
     "20,001–50,000",
     "50,001–100,000",
     "100,001+",
   ];

  // Sabah districts
  const sabahDistricts = [
    "Beaufort",
    "Kota Belud",
    "Kota Kinabalu",
    "Kota Marudu",
    "Kota Sandakan",
    "Kota Tawau",
    "Kudat",
    "Kunak",
    "Labuan",
    "Lahad Datu",
    "Nabawan",
    "Papar",
    "Penampang",
    "Pitas",
    "Putatan",
    "Ranau",
    "Sandakan",
    "Semporna",
    "Sipitang",
    "Tambunan",
    "Tawau",
    "Tenom",
    "Tongod",
    "Tuaran",
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Name */}
            <div>
              <Field>
                <Label htmlFor="userName">Username</Label>
                <Input
                  id="userName"
                  type="text"
                  placeholder="Enter username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={errors.userName ? "border-red-500" : ""}
                />
                {errors.userName && <FieldError>{errors.userName}</FieldError>}
              </Field>
            </div>

            {/* Email */}
            <div>
              <Field>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>
            </div>

            {/* Password */}
            <div>
              <Field>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password (min. 8 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && <FieldError>{errors.password}</FieldError>}
              </Field>
            </div>

            {/* Confirm Password */}
            <div>
              <Field>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={errors.confirmPassword ? "border-red-500" : ""}
                />
                {errors.confirmPassword && <FieldError>{errors.confirmPassword}</FieldError>}
              </Field>
            </div>

            {/* Income */}
            <div>
              <Field>
                <Label htmlFor="income">Monthly Income</Label>
                <Select value={income} onValueChange={setIncome}>
                  <SelectTrigger id="income" className={errors.income ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    {incomeRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.income && <FieldError>{errors.income}</FieldError>}
              </Field>
            </div>

            {/* Location */}
            <div>
              <Field>
                <Label htmlFor="location">Location (Sabah District)</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger id="location" className={errors.location ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select your district" />
                  </SelectTrigger>
                  <SelectContent>
                    {sabahDistricts.map((district) => (
                      <SelectItem key={district} value={district}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.location && <FieldError>{errors.location}</FieldError>}
              </Field>
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
