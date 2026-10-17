# TECH STANDARDS

These are Book Moar defaults unless a client project requires something different.

## General
- Prefer simple, maintainable architecture.
- Avoid unnecessary dependencies.
- Use semantic HTML.
- Use TypeScript when applicable.
- Keep components reusable without forcing every client into the same visual system.
- Mobile-first responsive behavior is required.
- No horizontal overflow.
- Optimize images.
- Lazy-load below-the-fold media where appropriate.
- Avoid layout shift.
- Keep JavaScript weight reasonable.

## Accessibility
- Proper heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus states.
- Meaningful alt text.
- Labels for form fields.
- Sufficient contrast.
- Do not rely on color alone to communicate state.

## Performance
- Optimize fonts and images.
- Avoid autoplay-heavy media.
- Avoid decorative animation that harms usability.
- Prefer static rendering where appropriate.
- Monitor Core Web Vitals.

## Deployment
Default hosting: Netlify unless the project has a specific reason to use something else.

## Secrets
- Never commit secrets.
- Document required variables in .env.example only.
- Client credentials belong in secure environment settings.
