import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Briefcase,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useUser } from "@/components/Context/UserContext";

export function Profile() {
  const { user: contextUser, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  
  // Extended user data with additional fields
  const [profileData, setProfileData] = useState({
    name: contextUser?.name || "John Doe",
    email: contextUser?.email || "john.doe@example.com",
    phone: contextUser?.phone || "",
    address: contextUser?.address || "",
    occupation: contextUser?.occupation || "",
    income: contextUser?.income ? String(contextUser.income) : "",
    bio: contextUser?.bio || "",
  });

  const verifications = [
    { label: "Email Verified", verified: true },
    { label: "Phone Verified", verified: true },
    { label: "Identity Verified", verified: true },
    { label: "Income Verified", verified: false },
  ];
  
  const handleSave = () => {
    // Save updated profile data to context
    setUser({
      name: profileData.name,
      email: profileData.email,
      avatar: contextUser?.avatar || "/avatars/default-avatar.jpg",
      address: profileData.address,
      income: profileData.income,
      phone: profileData.phone,
      occupation: profileData.occupation,
      bio: profileData.bio,
    });
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

 return (
   <div>
     <div className="mb-3">
       <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
         Profile
       </h1>
       <p className="text-gray-600">
         Manage your account information and preferences
       </p>
     </div>

     {/* Profile Header */}
     <Card className="mb-6">
       <CardContent className="pt-6">
         <div className="flex flex-col md:flex-row items-center gap-6">
           <Avatar className="h-24 w-24">
             <AvatarFallback className="text-2xl bg-blue-600 text-white">
               {profileData.name
                 .split(" ")
                 .map((n) => n[0])
                 .join("")}
             </AvatarFallback>
           </Avatar>
           <div className="flex-1 text-center md:text-left">
             <h2 className="text-2xl mb-1">{profileData.name}</h2>
             <p className="text-gray-600 mb-3">{profileData.email}</p>
             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
               {verifications.map((item, index) => (
                 <Badge
                   key={index}
                   variant={item.verified ? "default" : "outline"}
                   className="flex items-center gap-1"
                 >
                   {item.verified && <CheckCircle className="h-3 w-3" />}
                   {item.label}
                 </Badge>
               ))}
             </div>
           </div>
           <Button
             onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
           >
             {isEditing ? "Save Changes" : "Edit Profile"}
           </Button>
         </div>
       </CardContent>
     </Card>

     <div className="grid lg:grid-cols-2 gap-6">
       {/* Personal Information */}
       <Card>
         <CardHeader>
           <CardTitle>Personal Information</CardTitle>
           <CardDescription>Your basic account details</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
           <div className="space-y-2">
             <Label htmlFor="name">Full Name</Label>
             <div className="flex items-center gap-2">
               <User className="h-4 w-4 text-gray-600" />
               <Input
                 id="name"
                 value={profileData.name}
                 onChange={(e) =>
                   setProfileData({
                     ...profileData,
                     name: e.target.value,
                   })
                 }
                 disabled={!isEditing}
               />
             </div>
           </div>

           <div className="space-y-2">
             <Label htmlFor="email">Email Address</Label>
             <div className="flex items-center gap-2">
               <Mail className="h-4 w-4 text-gray-600" />
               <Input
                 id="email"
                 type="email"
                 value={profileData.email}
                 onChange={(e) =>
                   setProfileData({
                     ...profileData,
                     email: e.target.value,
                   })
                 }
                 disabled={!isEditing}
               />
             </div>
           </div>

           <div className="space-y-2">
             <Label htmlFor="phone">Phone Number</Label>
             <div className="flex items-center gap-2">
               <Phone className="h-4 w-4 text-gray-600" />
               <Input
                 id="phone"
                 type="tel"
                 value={profileData.phone}
                 placeholder="+1 (555) 123-4567"
                 onChange={(e) =>
                   setProfileData({
                     ...profileData,
                     phone: e.target.value,
                   })
                 }
                 disabled={!isEditing}
               />
             </div>
           </div>

           <div className="space-y-2">
             <Label htmlFor="address">Address</Label>
             <div className="flex items-center gap-2">
               <MapPin className="h-4 w-4 text-gray-600" />
               <Input
                 id="address"
                 value={profileData.address}
                 onChange={(e) =>
                   setProfileData({
                     ...profileData,
                     address: e.target.value,
                   })
                 }
                 disabled={!isEditing}
               />
             </div>
           </div>
         </CardContent>
       </Card>

       {/* Financial Information */}
       <Card>
         <CardHeader>
           <CardTitle>Financial Information</CardTitle>
           <CardDescription>Employment and income details</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
           <div className="space-y-2">
             <Label htmlFor="occupation">Occupation</Label>
             <div className="flex items-center gap-2">
               <Briefcase className="h-4 w-4 text-gray-600" />
               <Input
                 id="occupation"
                 value={profileData.occupation}
                 placeholder="e.g., Small Business Owner"
                 onChange={(e) =>
                   setProfileData({
                     ...profileData,
                     occupation: e.target.value,
                   })
                 }
                 disabled={!isEditing}
               />
             </div>
           </div>

           <div className="space-y-2">
             <Label htmlFor="income">Annual Income</Label>
             <div className="flex items-center gap-2">
               <span className="text-gray-600">$</span>
               <Input
                 id="income"
                 type="text"
                 value={profileData.income || ""}
                 placeholder="e.g., 50000 or 50,001–100,000"
                 onChange={(e) =>
                   setProfileData({
                     ...profileData,
                     income: e.target.value,
                   })
                 }
                 disabled={!isEditing}
               />
             </div>
           </div>

           <div className="space-y-2">
             <Label htmlFor="bio">Bio</Label>
             <Textarea
               id="bio"
               value={profileData.bio}
               placeholder="Tell us about yourself..."
               onChange={(e) =>
                 setProfileData({
                   ...profileData,
                   bio: e.target.value,
                 })
               }
               disabled={!isEditing}
               rows={4}
             />
           </div>
         </CardContent>
       </Card>
     </div>

     {/* Account Stats */}
     <Card className="mt-6">
       <CardHeader>
         <CardTitle>Account Statistics</CardTitle>
         <CardDescription>Your activity summary</CardDescription>
       </CardHeader>
       <CardContent>
         <div className="grid md:grid-cols-4 gap-4">
           <div className="p-4 bg-blue-50 rounded-lg">
             <div className="text-2xl mb-1">4</div>
             <div className="text-gray-600">Loans Compared</div>
           </div>
           <div className="p-4 bg-green-50 rounded-lg">
             <div className="text-2xl mb-1">3</div>
             <div className="text-gray-600">Eligible Options</div>
           </div>
           <div className="p-4 bg-yellow-50 rounded-lg">
             <div className="text-2xl mb-1">95%</div>
             <div className="text-gray-600">Best Match Score</div>
           </div>
           <div className="p-4 bg-purple-50 rounded-lg">
             <div className="text-2xl mb-1">2</div>
             <div className="text-gray-600">Eligibility Checks</div>
           </div>
         </div>
       </CardContent>
     </Card>

     {/* Security Section */}
     <Card className="mt-6">
       <CardHeader>
         <CardTitle>Security Settings</CardTitle>
         <CardDescription>Manage your account security</CardDescription>
       </CardHeader>
       <CardContent>
         <div className="space-y-4">
           <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
             <div>
               <h4>Change Password</h4>
               <p className="text-gray-600">
                 Update your password regularly for better security
               </p>
             </div>
             <Button variant="outline">Change</Button>
           </div>
           <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
             <div>
               <h4>Two-Factor Authentication</h4>
               <p className="text-gray-600">
                 Add an extra layer of security to your account
               </p>
             </div>
             <Button variant="outline">Enable</Button>
           </div>
         </div>
       </CardContent>
     </Card>
   </div>
 );
}

