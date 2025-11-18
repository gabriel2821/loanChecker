import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, CircleCheckBig, CheckCircle, DollarSign, FileText } from "lucide-react";

export default function Dashboard() {
    const loanComparisons = [
      {
        id: "1",
        lender: "QuickFund Microloans",
        amount: 5000,
        rate: "8.5%",
        term: "12 months",
        eligible: true,
        matchScore: 95,
      },
      {
        id: "2",
        lender: "SmallBiz Capital",
        amount: 3000,
        rate: "10.2%",
        term: "24 months",
        eligible: true,
        matchScore: 82,
      },
      {
        id: "3",
        lender: "Community Lenders",
        amount: 7500,
        rate: "7.8%",
        term: "18 months",
        eligible: false,
        matchScore: 68,
      },
    ];

    const eligibilityChecks = [
      { category: "Credit Score", status: "verified", result: "Good (680)" },
      {
        category: "Income Verification",
        status: "verified",
        result: "Verified",
      },
      { category: "Debt-to-Income", status: "pending", result: "Processing" },
    ];

    const getMatchScoreColor = (score: number) => {
      if (score >= 80) return "text-green-600";
      if (score >= 60) return "text-yellow-600";
      return "text-red-600";
    };
      const getStatusBadge = (status: string) => {
        const variants: Record<
          string,
          "default" | "secondary" | "destructive" | "outline"
        > = {
          verified: "default",
          pending: "secondary",
        };
        return (
          <Badge variant={variants[status] || "outline"}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
        Dashboard
      </h1>
      {/* Top summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Eligible Loans</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">2</div>
            <p className="text-xs text-gray-600 mt-1">Out of 3 compared</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Best Rate Found</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">7.8%</div>
            <p className="text-xs text-gray-600 mt-1">
              APR from Community Lenders
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>AI Match Score</CardTitle>
            <Sparkles className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">95%</div>
            <p className="text-xs text-gray-600 mt-1">Top recommendation</p>
          </CardContent>
        </Card>
      </div>

      {/* Loan Comparisons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Loan Comparisons</CardTitle>
                <CardDescription>
                  Microloans matching your profile
                </CardDescription>
              </div>
              <Button>View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {loanComparisons.map((loan) => (
              <div key={loan.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span>{loan.lender}</span>
                      {loan.eligible && (
                        <Badge variant="default">Eligible</Badge>
                      )}
                    </div>
                    <div className="text-gray-600">
                      ${loan.amount.toLocaleString()} · {loan.rate} APR ·{" "}
                      {loan.term}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-600">AI Match</div>
                    <div className={`${getMatchScoreColor(loan.matchScore)}`}>
                      {loan.matchScore}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Eligibility Checks */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Eligibility Checks</CardTitle>
                <CardDescription>Your qualification status</CardDescription>
              </div>
              <Button variant="outline">Update Info</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {eligibilityChecks.map((check, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <div>{check.category}</div>
                    <div className="text-gray-600">{check.result}</div>
                  </div>
                </div>
                {getStatusBadge(check.status)}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              AI Recommendations
            </CardTitle>
            <CardDescription>
              Personalized insights based on your profile
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <Item className="bg-purple-100">
              <ItemContent>
                <ItemTitle>
                  <TrendingUp className="text-purple-500" />
                  Best Match: QuickFund Microloans
                </ItemTitle>
                <ItemDescription>
                  Based on your credit score and income, this lender offers the
                  best combination of low rates and high approval likelihood.
                  Your AI match score is 95%.
                </ItemDescription>
              </ItemContent>
            </Item>

            <Item className="bg-blue-100">
              <ItemContent>
                <ItemTitle>
                  <CircleCheckBig className="text-blue-500" />
                  Improve Your Eligibility
                </ItemTitle>
                <ItemDescription>
                  Complete your debt-to-income verification to unlock 2
                  additional loan options with rates as low as 6.9%.
                </ItemDescription>
              </ItemContent>
            </Item>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
