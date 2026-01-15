# Website Editing Guide

## 1. Changing Contact Details
To update the Phone Number, WhatsApp, Email, or Service Area, open the file:
`lib/siteDetails.ts`

You will see simple settings like this:
```typescript
export const siteDetails = {
    businessName: "Breakdown Recovery Near Me",
    phone: "07520643644", 
    email: "help@breakdownrecovery.com",
    // ...
}
```
Simply change the text inside the quotes to your new details. The changes will automatically update across the entire website (Navbar, Buttons, Footer, etc.).

## 2. Deploying the Website
This website is built with Next.js and is "Export Ready".

### Option A: Vercel (Recommended)
1. Push this code to GitHub.
2. Go to Vercel.com and "Add New Project".
3. Select your repository.
4. Vercel will detect Next.js. Click "Deploy".
5. Done!

### Option B: Netlify
1. Drag and drop the `out` folder (generated after running `npm run build`) to Netlify Drop.
   OR
2. Connect GitHub to Netlify and it will auto-build.

## 3. Editing Content
- **Services**: Edit `components/Services.tsx`
- **Why Choose Us**: Edit `components/WhyUs.tsx`
- **Map**: Update the `googleMapsUrl` in `lib/siteDetails.ts`

## 4. Running Locally
1. Install Node.js.
2. Open terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.
