import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  X,
  DollarSign,
  Calendar,
  TrendingUp,
  Sparkles,
  AlertCircle,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function CompareLoan() {
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);

  const loanOptions = [
    {
      id: "LOAN-001",
      lender: "QuickFund Microloans",
      amount: 5000,
      rate: "8.5%",
      term: "12 months",
      monthlyPayment: 434,
      eligible: true,
      matchScore: 95,
      features: [
        "No prepayment penalty",
        "Same-day approval",
        "Flexible repayment",
      ],
      requirements: ["Credit score 620+", "Annual income $30,000+", "Valid ID"],
      pros: [
        "Lowest monthly payment",
        "Fast approval process",
        "No hidden fees",
      ],
      cons: ["Shorter repayment term"],
    },
    {
      id: "LOAN-002",
      lender: "SmallBiz Capital",
      amount: 3000,
      rate: "10.2%",
      term: "24 months",
      monthlyPayment: 138,
      eligible: true,
      matchScore: 82,
      features: ["Business focus", "Financial coaching", "Extended terms"],
      requirements: ["Credit score 600+", "Business plan required", "Valid ID"],
      pros: [
        "Longer repayment period",
        "Business support included",
        "Lower monthly payment",
      ],
      cons: ["Higher interest rate", "Longer approval time"],
    },
    {
      id: "LOAN-003",
      lender: "Community Lenders",
      amount: 7500,
      rate: "7.8%",
      term: "18 months",
      monthlyPayment: 439,
      eligible: false,
      matchScore: 68,
      features: ["Community focused", "Local support", "Flexible terms"],
      requirements: ["Credit score 680+", "Annual income $50,000+", "Valid ID"],
      pros: ["Best interest rate", "Community support", "Mid-term length"],
      cons: ["Higher credit score required", "Income requirement not met"],
    },
    {
      id: "LOAN-004",
      lender: "FastCash Micro",
      amount: 2500,
      rate: "12.5%",
      term: "12 months",
      monthlyPayment: 223,
      eligible: true,
      matchScore: 75,
      features: ["Quick approval", "Minimal documentation", "Online only"],
      requirements: ["Credit score 580+", "Valid bank account", "Valid ID"],
      pros: ["Fastest approval", "Minimal paperwork", "Low eligibility bar"],
      cons: ["Highest interest rate", "Limited support"],
    },
  ];

  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (score >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getStatusBadge = (eligible: boolean) => {
    return (
      <Badge variant={eligible ? "default" : "secondary"}>
        {eligible ? "Eligible" : "Not Eligible"}
      </Badge>
    );
  };
  return (
    <div>
      <div className="mb-3">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Compare Loan
        </h1>
        <p className="text-gray-600">
          Compare microloan options side-by-side to find your best match
        </p>
      </div>

      <Card className="border-purple-200 bg-purple-50 mb-6">
        <CardContent>
          <div className="flex items-start gap-3">
            <Sparkles className="h-6 w-6 text-purple-600 mt-0.5" />
            <div>
              <h3 className="mb-2 text-purple-900">AI Recommendation</h3>
              <p className="text-purple-800">
                Based on your profile, <strong>QuickFund Microloans</strong> is
                your best match with a 95% compatibility score. You're eligible
                for 3 out of 4 loans. Consider improving your credit score to
                unlock Community Lenders' 7.8% rate.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-6">
        {loanOptions.map((loan) => (
          <Card
            key={loan.id}
            className={loan.matchScore >= 90 ? "border-purple-300" : ""}
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{loan.lender}</CardTitle>
                    {loan.matchScore >= 90 && (
                      <Badge
                        variant="outline"
                        className="bg-purple-50 text-purple-600 border-purple-300"
                      >
                        <Sparkles className="h-3 w-3 mr-1" />
                        Top Pick
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(loan.eligible)}
                    <div
                      className={`px-2 py-1 rounded-md border text-sm ${getMatchScoreColor(
                        loan.matchScore
                      )}`}
                    >
                      {loan.matchScore}% Match
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl text-blue-600">
                    ${loan.amount.toLocaleString()}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Loan Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-gray-600 text-sm mb-1">
                    Interest Rate
                  </div>
                  <div>{loan.rate} APR</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm mb-1">Term Length</div>
                  <div>{loan.term}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-gray-600 text-sm mb-1">
                    Monthly Payment
                  </div>
                  <div className="text-xl">${loan.monthlyPayment}/mo</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm mb-2 text-gray-600">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {loan.features.map((feature, index) => (
                    <Badge key={index} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pros and Cons */}
              <Tabs defaultValue="pros" className="mb-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="pros">Pros</TabsTrigger>
                  <TabsTrigger value="cons">Cons</TabsTrigger>
                </TabsList>
                <TabsContent value="pros" className="space-y-2 mt-3">
                  {loan.pros.map((pro, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="cons" className="space-y-2 mt-3">
                  {loan.cons.map((con, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>

              {/* Requirements */}
              <div className="mb-4">
                <h4 className="text-sm mb-2 text-gray-600">Requirements</h4>
                <div className="space-y-1">
                  {loan.requirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/*<Button
                className="w-full"
                variant={loan.eligible ? "default" : "outline"}
                disabled={!loan.eligible}
                onClick={() => setSelectedLoan(loan.id)}
              >
                {loan.eligible ? "Apply with Lender" : "Not Eligible"}
              </Button>*/}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Need Help Choosing?</CardTitle>
          <CardDescription>
            Talk to our AI assistant or contact support
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <h4>AI Loan Assistant</h4>
              </div>
              <p className="text-gray-600 mb-3">
                Get personalized recommendations based on your unique situation
              </p>
              <Button variant="outline" className="w-full">
                Chat with AI
              </Button>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-5 w-5 text-blue-600" />
                <h4>Expert Support</h4>
              </div>
              <p className="text-gray-600 mb-3">
                Questions? Our team can help you compare options
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CompareLoan;
