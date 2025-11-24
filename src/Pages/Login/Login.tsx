import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Field, FieldError } from "@/components/ui/field";
import { useUser } from "@/components/Context/UserContext";

function Login() {
  const { setUser, user: existingUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate login
    const loggedInUser = {
      name: email.split("@")[0], // use the part before @ as name
      email: email, // use the entered email
      avatar: "/avatars/default-avatar.jpg", // a default avatar
      address: existingUser?.address, // preserve address from existing user
      income: existingUser?.income, // preserve income from existing user
    };

    setUser(loggedInUser);

    alert(`Login successful! Welcome, ${loggedInUser.name}`);
    navigate("/"); // redirect to dashboard or home
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="p-6 w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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

          <div>
            <Field>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && <FieldError>{errors.password}</FieldError>}
            </Field>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-semibold">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
