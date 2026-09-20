# Add the product gallery and randomized backgrounds

## What will change
- Add a prominent **View Gallery** button to the landing page so clients can open the collection quickly.
- Create a dedicated `/gallery` page with the five category controls: Clothing, Shoes, Watches, Native Caps, and Shadda.
- Move category browsing and product photos off the landing page and into the gallery.
- Let clients switch categories and select any photo to view it larger, with a direct WhatsApp enquiry action.
- Change the landing-page background to rotate automatically through a shuffled mix of all product photos, independent of category controls.

## Visual direction
- Keep the existing premium dark-and-gold style, typography, and smooth image crossfades.
- Make the Gallery button visually prominent without adding cards or clutter.
- Keep all five category controls visible on mobile, matching the compact two-column layout in the reference.

## Technical details
- Add the `/gallery` route with unique page metadata.
- Reuse the current hosted product images and category descriptions.
- Build a non-repeating randomized slideshow order and preserve reduced-motion support.
- Use normal page navigation between the landing page and gallery, while external enquiry links continue to open WhatsApp.

## Validation
- Check mobile and desktop layouts.
- Confirm the Gallery button opens `/gallery`, all five categories work, photo selection works, and the landing background changes without client input.
