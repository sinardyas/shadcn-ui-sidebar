import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
    return <div className="flex justify-center items-center h-screen">
        <Card className="mb-40">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Login to dashboard</CardTitle>
                <CardDescription>
                    Enter your email and password below to access dashboard
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="default" asChild className="w-full">
                    <Link href="/dashboard">
                        Login
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
}