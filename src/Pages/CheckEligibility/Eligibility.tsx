import { Sparkles } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useUser } from "@/components/Context/UserContext";
import { toast } from "sonner";

function Eligibility() {
  const { user } = useUser();
  const [annualIncome, setAnnualIncome] = useState(user?.income || "");
  const [status, setStatus] = useState("");
  const [loan, setLoan] = useState("");

  const employmentStatus = [
    { value: "fullTime", label: "Full Time Employment" },
    { value: "selfEmployed", label: "Self Employed" },
    { value: "partTime", label: "Part-Time Employment" },
    { value: "businessOwner", label: "Business Owner" },
  ];

  const loanPurpose = [
    { value: "expansion", label: "Business Expansion" },
    { value: "selfEmployed", label: "Equipment Purchase" },
    { value: "inventory", label: "Inventory" },
    { value: "workingCapital", label: "Working Capital" },
    { value: "persanalUse", label: "Porsanal Use" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application Submitted Successfully!");
  };

  return (
    <div className="space-y-3">
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Check Your Eligibility
        </h1>
        <p className="text-gray-600">
          Provide your information to see which microloans you qualify for
        </p>
      </div>
      {/*<Item>
        <ItemContent>
          <ItemTitle className="text-2xl md:text-4xl font-semibold tracking-tight">
            Check Your Eligibility
          </ItemTitle>
          <ItemDescription>
            Provide your information to see which microloans you qualify for
          </ItemDescription>
        </ItemContent>
      </Item>*/}
      <div className="grid grid-col space-y-3">
        <Card className="mb-6 bg-purple-50 border-purple-200">
          <CardContent>
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-purple-600 mt-0.5" />
              <div>
                <h4 className="mb-1 text-purple-900">
                  AI-Powered Eligibility Check
                </h4>
                <p className="text-purple-800 text-sm">
                  Our AI will analyze your information and instantly match you
                  with eligible microloans. The more information you provide,
                  the more accurate your matches will be.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <Card>
            <CardContent>
              <FieldSet>
                <FieldLegend>Financial Information</FieldLegend>
                <FieldDescription>
                  Help us find the best loan options for you
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="annualIncome">
                      Annual Income
                    </FieldLabel>
                    <Input
                      id="annualIncome"
                      type="text"
                      placeholder="e.g., 50000 or 50,001–100,000"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(e.target.value)}
                    />

                    <FieldLabel htmlFor="employementStatus">
                      Employement Status
                    </FieldLabel>
                    <Select onValueChange={setStatus} value={status}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {employmentStatus.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FieldLabel htmlFor="loanPurpose">Loan Purpose</FieldLabel>
                    <Select onValueChange={setLoan} value={loan}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose Purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        {loanPurpose.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </Card>

          {/*<Card>
            <CardContent>
              <FieldSet>
                <FieldLegend>Required Documents</FieldLegend>
                <FieldDescription>
                  Upload documents to verify your eligibility
                </FieldDescription>

                <FieldGroup className="bg-gray-100 p-4 rounded-md">
                  <Field orientation="responsive">
                    <FieldContent>
                      <FieldLabel className="flex items-center gap-2">
                        Government-issued ID
                        <Badge variant="destructive">Required</Badge>
                      </FieldLabel>
                      <FieldDescription>
                        Passport, Driver's License, or National ID
                      </FieldDescription>
                    </FieldContent>
                    <Input type="file" className="flex-1" />
                  </Field>
                </FieldGroup>

                <FieldGroup className="bg-gray-100 p-4 rounded-md">
                  <Field orientation="responsive">
                    <FieldContent>
                      <FieldLabel className="flex items-center gap-2">
                        Proof of Income
                        <Badge variant="destructive">Required</Badge>
                      </FieldLabel>
                      <FieldDescription>
                        Pay stubs, tax returns, or employment letter
                      </FieldDescription>
                    </FieldContent>
                    <Input type="file" className="flex-1" />
                  </Field>
                </FieldGroup>

                <FieldGroup className="bg-gray-100 p-4 rounded-md">
                  <Field orientation="responsive">
                    <FieldContent>
                      <FieldLabel className="flex items-center gap-2">
                        Bank Statements
                        <Badge variant="destructive">Required</Badge>
                      </FieldLabel>
                      <FieldDescription>
                        Utility bill or lease agreement
                      </FieldDescription>
                    </FieldContent>
                    <Input type="file" className="flex-1" />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </Card>*/}
          <div className="flex justify-end">
            <Button type="submit">Submit Application</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Eligibility;
