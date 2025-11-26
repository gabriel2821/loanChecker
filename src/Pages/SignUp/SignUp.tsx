import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { toast } from "sonner";

function SignUp() {
  const { setUser } = useUser();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [income, setIncome] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [existingDebts, setExistingDebts] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
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

    // Employment status validation
    if (!employmentStatus) {
      newErrors.employmentStatus = "Please select employment status";
    }

    // Loan purpose validation
    if (!loanPurpose) {
      newErrors.loanPurpose = "Please select loan purpose";
    }

    // Monthly expenses validation
    if (!monthlyExpenses) {
      newErrors.monthlyExpenses = "Please enter monthly expenses";
    }

    // Existing debts validation
    if (!existingDebts) {
      newErrors.existingDebts = "Please enter existing debts";
    }

    // Loan amount validation
    if (!loanAmount) {
      newErrors.loanAmount = "Please enter loan amount";
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
      age: age,
      income: income,
      employmentStatus: employmentStatus,
      loanPurpose: loanPurpose,
      monthlyExpenses: monthlyExpenses,
      existingDebts: existingDebts,
      loanAmount: loanAmount,
    };
    setUser(newUser);
    
    toast.message(`Welcome ${userName}!`, {
      className: "text-center",
    });
    navigate("/");
  };

  const incomeRanges = ["0–2,000", "2,001–5,000", "5,001–10,000", "10,001+"];

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
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
      <Card className="w-full max-w-4xl rounded-2xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
          <CardDescription className="text-gray-600 mt-1">
            Complete your profile to see which microloans you qualify for.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-6">
            {/* --- Personal Information --- */}
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    {errors.userName && (
                      <FieldError>{errors.userName}</FieldError>
                    )}
                  </Field>

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
                    {errors.email && (
                      <FieldError>{errors.email}</FieldError>
                    )}
                  </Field>

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
                    {errors.password && (
                      <FieldError>{errors.password}</FieldError>
                    )}
                  </Field>

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
                    {errors.confirmPassword && (
                      <FieldError>{errors.confirmPassword}</FieldError>
                    )}
                  </Field>

                  <Field>
                    <Label htmlFor="location">Location (Sabah District)</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger
                        id="location"
                        className={errors.location ? "border-red-500" : ""}
                      >
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
                    {errors.location && (
                      <FieldError>{errors.location}</FieldError>
                    )}
                  </Field>

                  <Field>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="e.g., 25"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Field>
                </div>
              </CardContent>
            </Card>

            {/* --- Financial Information --- */}
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Financial Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    {errors.income && (
                      <FieldError>{errors.income}</FieldError>
                    )}
                  </Field>

                  <Field>
                    <Label htmlFor="monthlyExpenses">Monthly Expenses</Label>
                    <Input
                      id="monthlyExpenses"
                      type="number"
                      placeholder="e.g., 1500"
                      value={monthlyExpenses}
                      onChange={(e) => setMonthlyExpenses(e.target.value)}
                      className={errors.monthlyExpenses ? "border-red-500" : ""}
                    />
                    {errors.monthlyExpenses && (
                      <FieldError>{errors.monthlyExpenses}</FieldError>
                    )}
                  </Field>

                  <Field>
                    <Label htmlFor="existingDebts">Existing Debts</Label>
                    <Input
                      id="existingDebts"
                      type="number"
                      placeholder="e.g., 2000"
                      value={existingDebts}
                      onChange={(e) => setExistingDebts(e.target.value)}
                      className={errors.existingDebts ? "border-red-500" : ""}
                    />
                    {errors.existingDebts && (
                      <FieldError>{errors.existingDebts}</FieldError>
                    )}
                  </Field>

                  <Field>
                    <Label htmlFor="loanAmount">Loan Amount Requested</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      placeholder="e.g., 5000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className={errors.loanAmount ? "border-red-500" : ""}
                    />
                    {errors.loanAmount && (
                      <FieldError>{errors.loanAmount}</FieldError>
                    )}
                  </Field>
                </div>
              </CardContent>
            </Card>

            {/* --- Employment Details --- */}
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Employment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field>
                    <Label htmlFor="employmentStatus">Employment Status</Label>
                    <Select
                      value={employmentStatus}
                      onValueChange={setEmploymentStatus}
                    >
                      <SelectTrigger id="employmentStatus" className={errors.employmentStatus ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullTime">
                          Full Time Employment
                        </SelectItem>
                        <SelectItem value="selfEmployed">
                          Self Employed
                        </SelectItem>
                        <SelectItem value="partTime">
                          Part-Time Employment
                        </SelectItem>
                        <SelectItem value="businessOwner">
                          Business Owner
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.employmentStatus && (
                      <FieldError>{errors.employmentStatus}</FieldError>
                    )}
                  </Field>

                  <Field>
                    <Label htmlFor="loanPurpose">Loan Purpose</Label>
                    <Select value={loanPurpose} onValueChange={setLoanPurpose}>
                      <SelectTrigger id="loanPurpose" className={errors.loanPurpose ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select loan purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="expansion">
                          Business Expansion
                        </SelectItem>
                        <SelectItem value="equipment">
                          Equipment Purchase
                        </SelectItem>
                        <SelectItem value="inventory">Inventory</SelectItem>
                        <SelectItem value="workingCapital">
                          Working Capital
                        </SelectItem>
                        <SelectItem value="personalUse">
                          Personal Use
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.loanPurpose && (
                      <FieldError>{errors.loanPurpose}</FieldError>
                    )}
                  </Field>
                </div>
              </CardContent>
            </Card>

            {/* --- Submit Button --- */}
            <div className="flex justify-center">
              <Button type="submit" className="w-full md:w-1/2">
                Sign Up
              </Button>
            </div>

            {/* --- Login Link --- */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
