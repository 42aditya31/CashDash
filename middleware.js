import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"; 

// 'clerkMiddleware' is used to manage authentication in Next.js with Clerk
// 'createRouteMatcher' helps define routes that need protection

const isProtectedRoutes = createRouteMatcher([
  "/dashboard(.*)",  // Protects all dashboard-related routes
  "/account(.*)",    // Protects all account-related routes
  "/transaction(.*)", // Protects all transaction-related routes
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // Fetch the authenticated user's ID

  // If user is NOT logged in AND trying to access a protected route
  if (!userId && isProtectedRoutes(req)) {
    const { redirectToSignIn } = await auth(); // Get function to redirect user

    return redirectToSignIn(); // Redirect user to the sign-in page
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};