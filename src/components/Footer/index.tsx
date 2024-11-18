"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for the latest news and updates.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto "
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="mr-2 w-full md:w-auto"
              aria-label="Email for newsletter"
            />
            <Button type="submit">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
