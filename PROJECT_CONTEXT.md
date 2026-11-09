# ShopSpace — Project Context & Development Guidelines

## 1. Project Overview

ShopSpace is a full-stack e-commerce web application.

The project originally started with React + Vite. The objective is to migrate the existing application to Next.js App Router, not build a separate application from scratch.

This is both a portfolio project and a serious learning exercise.

The goal is to understand how a professional full-stack application is structured and implemented, rather than simply generating code.

## 2. Technology Stack

- Next.js App Router
- React
- TypeScript
- Redux Toolkit
- RTK Query (planned)
- Tailwind CSS
- Material UI (MUI)
- REST API using Next.js Route Handlers
- Database and authentication provider: to be decided after architecture review
- Git and GitHub
- Testing and production deployment

## 3. Development Philosophy

The user is learning and implementing the application.

The AI assistant should act as a senior developer and mentor, not take over implementation.

The preferred workflow:

1. Explain the feature and relevant concepts.
2. Define its architecture and responsibilities.
3. Establish the appropriate folder and component structure.
4. Break implementation into small sequential tasks.
5. Let the user implement the important logic.
6. Review the implementation, explain mistakes, and suggest improvements.
7. Proceed only after the current task is understood and verified.

Do not generate entire features or large amounts of code without being asked.

Explain unfamiliar TypeScript concepts and distinguish client-side, server-side, and database responsibilities.

Prioritize maintainability, production practices, security, and understanding.

## 4. AI Assistant Responsibilities

There are two distinct responsibilities:

### UI styling assistant (Antigravity)

Antigravity is primarily used to reproduce the supplied Stitch designs.

It should:
- Inspect existing components and corresponding Stitch references.
- Reproduce the visual design accurately.
- Modify Tailwind classes, MUI styling, typography, spacing, colors, borders, shadows, and responsive presentation.
- Preserve existing functionality and business logic.
- Work on one component at a time.
- Inspect and report before making changes when requested.

It must NOT independently:
- Rewrite business logic.
- Change Redux actions, reducers, selectors, or thunks.
- Change authentication or cart functionality.
- Redesign the architecture.
- Add features.
- Replace existing components unnecessarily.

### Development mentor (ChatGPT or another assistant)

Responsible for:
- Architecture and technical decisions.
- Explaining concepts.
- Planning implementation tasks.
- Reviewing code and debugging.
- Guiding the user through actual feature development.
- Evaluating code quality and production readiness.

## 5. Design Source of Truth

The original Stitch HTML/CSS references are the visual source of truth.

Design direction:
- Japandi / editorial / craft-centered aesthetic.
- Warm ivory background: #fbfaf0.
- Forest green primary: #233120.
- Muted olive secondary: #58623e.
- Light sage: #dce8ba.
- EB Garamond for display headings.
- Plus Jakarta Sans for body and UI.
- Material Symbols Outlined icons.
- Generous whitespace.
- Subtle borders and diffused shadows.
- Modest radii, primarily 4px and 8px.
- Avoid generic AI-generated styling and excessive decoration.
- No purple styling.

Preserve EGP currency formatting for now, even if a design reference uses USD.

Do not invent product information such as ingredients, origin, volume, or extraction methods.

## 6. Planned Features

- Homepage
- Product catalogue
- Product search, filtering, sorting, and pagination
- Product details
- Product quick-view modal
- Shopping cart and cart drawer
- Cart persistence
- Authentication and authorization
- Checkout
- Orders and order history
- User account
- Admin dashboard
- Product CRUD
- Responsive design
- Testing and production deployment

## 7. Migration Decisions

- Migrate the existing React + Vite project into Next.js App Router.
- Preserve existing business logic and reusable features where appropriate.
- Use Server Components by default.
- Use Client Components only where browser-side interactivity or client state is needed.
- Keep components organized by feature and responsibility.
- Use Next.js Route Handlers for the planned REST API.
- Decide database and authentication providers after reviewing the architecture.

## 8. Working Rules

- Never assume a reported implementation is correct without inspecting the actual code.
- Run build, lint, and relevant tests after meaningful changes.
- Do not suppress TypeScript or ESLint errors just to achieve a successful build.
- Avoid unnecessary dependencies.
- Avoid oversized components and monolithic implementations.
- Keep changes small and reviewable.
- Do not proceed to the next phase until the current phase is reviewed and approved.

## 9. Current Project Status

The storefront UI migration from React + Vite to Next.js App Router has been completed across all primary views.

Completed:
- Next.js foundation and root layout (`layout.tsx`, `providers.tsx`).
- Redux provider integration and AppRouterCacheProvider for MUI.
- Tailwind CSS v4 design tokens and global typography foundation (`globals.css`).
- Global layout: Navbar (Server Component) and NavbarActions (Client Component).
- Global layout: 4-column Footer and colophon bar (Server Component).
- Shopping cart drawer (`CartDrawer.tsx` & `CartItemRow.tsx`) with subtotal and checkout action bar.
- Homepage (`/`): 6 presentational Server Component sections (`HeroSection`, `CategoriesSection`, `FeaturedArchiveSection`, `SeasonalBannerSection`, `DailyRitualsSection`, `WhyShopSpaceSection`).
- Product Catalogue (`/products`): Editorial header, search bar, category & sort controls, responsive `ProductCard` grid, and `ProductQuickView` modal.
- Product Details (`/products/[id]`): Statically prerendered routes (`generateStaticParams`), showcase gallery, specs table, minimal Client Component for purchase actions (`ProductPurchaseActions`), and related products grid.
- Authentication: Sign-in modal (`LoginDialog.tsx`) and demo credentials popover (`TestAccountsPopover.tsx`).
- Order Confirmation (`/order-confirmation`): Success badge, dispatch timeline, order summary breakdown, and delivery address presentation.

Current stage:
- Storefront UI presentation is complete. All visual templates from `DESIGN.md` are accurately reproduced with Tailwind v4, MUI, and Next.js App Router conventions.
- Ready for developer engineering exercises: server-side data fetching, caching/revalidation, Route Handlers, checkout flow, and state persistence.

Next planned stages:
1. Developer implementation of data fetching and caching for the storefront.
2. Checkout workflow and order placement logic.
3. User account & order history views.
4. Backend Route Handlers and database/auth provider selection.

Update this section whenever significant work is completed.

---

**Important:** This document describes project intentions and decisions. Always inspect the actual repository before assuming a feature or implementation exists.