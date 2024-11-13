import { NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

// Mock external modules
jest.mock("@clerk/nextjs", () => ({
  RedirectToSignIn: jest.fn(),
  clerkMiddleware: jest.fn(),
}));

jest.mock("next/server", () => ({
  NextResponse: {
    next: jest.fn(),
  },
}));

describe("Clerk Middleware", () => {
  let mockRequest;

  beforeEach(() => {
    // Set up a mock request
    mockRequest = {
      url: "http://localhost/api/test",
      // You can add more properties to simulate request behavior if needed
    };

    // Mock Reset
    jest.clearAllMocks();
  });

  it("should redirect to sign in when user is not authenticated", async () => {
    // Mock the middleware behavior (when no user is authenticated)
    clerkMiddleware.mockImplementationOnce(async (req) => {
      const auth = { userId: null }; // No user authenticated
      if (!auth.userId) {
        return RedirectToSignIn({ redirectUrl: req.url });
      }
      return NextResponse.next();
    });

    const response = await clerkMiddleware()(mockRequest);

    expect(RedirectToSignIn).toHaveBeenCalledWith({ redirectUrl: mockRequest.url });
    expect(response).toEqual(RedirectToSignIn({ redirectUrl: mockRequest.url }));
  });

  it("should proceed to next response if user is authenticated", async () => {
    // Mock the middleware behavior (when user is authenticated)
    clerkMiddleware.mockImplementationOnce(async (req) => {
      const auth = { userId: "valid-user-id" }; // User is authenticated
      if (!auth.userId) {
        return RedirectToSignIn({ redirectUrl: req.url });
      }
      return NextResponse.next();
    });

    const response = await clerkMiddleware()(mockRequest);

    expect(NextResponse.next).toHaveBeenCalled();
    expect(response).toEqual(NextResponse.next());
  });

  it("should match the correct routes in config", () => {
    const expectedMatcher = [
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      '/(api|trpc)(.*)',
    ];

    expect(config.matcher).toEqual(expectedMatcher);
  });
});
