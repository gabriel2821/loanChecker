import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import SelectLocation from "./SelectLocation";
import { Button } from "@/components/ui/button";

function SignUp() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-lg">
            Create an account
          </CardTitle>
          <CardDescription>
            {/*Enter your information below to create your account*/}
          </CardDescription>
        </CardHeader>
        <CardContent m-3>
          <form>
            <FieldTitle className="text-base mb-2">
              Personal Information
            </FieldTitle>
            <FieldSet>
              <FieldGroup className="grid grid-cols-2 gap-4 mb-2">
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input type="email" placeholder="user@gmail.com" />
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input type="password" />
                </Field>

                <Field>
                  <FieldLabel>Income(RM)</FieldLabel>
                  <Input type="number" />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel>Location</FieldLabel>
                  <SelectLocation />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <Button type="submit">Sign Up</Button>
                  <FieldDescription>
                    Don't have an account?
                    <Button variant="link">Click here</Button>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
