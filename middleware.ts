/**
 * Optional: enable Clerk route protection by uncommenting and configuring.
 *
 * import { authMiddleware } from "@clerk/nextjs";
 * export default authMiddleware({
 *   publicRoutes: ["/", "/api/stripe/checkout", "/api/stripe/webhook"],
 * });
 * export const config = { matcher: ["/((?!.+\.[\w]+$|_next).*)","/","/(api)(.*)"] };
 */
export const config = {};
