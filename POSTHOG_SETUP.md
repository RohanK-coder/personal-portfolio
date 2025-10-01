# PostHog Analytics Setup

This portfolio now includes PostHog analytics tracking. Follow these steps to complete the setup:

## 1. Create PostHog Account

1. Go to [PostHog](https://app.posthog.com) and create a free account
2. Create a new project for your portfolio
3. Get your Project API Key from the project settings

## 2. Configure Environment Variables

Create a `.env` file in your project root with:

```bash
# PostHog Analytics Configuration
REACT_APP_POSTHOG_KEY=phc-your-actual-key-here
REACT_APP_POSTHOG_HOST=https://app.posthog.com
```

Replace `phc-your-actual-key-here` with your actual PostHog project API key.

## 3. What's Being Tracked

The following events are automatically tracked:

### Page Views
- Initial portfolio page load
- Section views (Hero, Projects, About, Contact)

### User Interactions
- Header dropdown menu toggle
- Hero scroll down button clicks
- Project GitHub/Demo link clicks
- Contact email copy and send actions

### Scroll Behavior
- Scroll depth tracking (25%, 50%, 75%, 90%)
- Section visibility tracking

### Custom Events
- `$pageview` - Page views with metadata
- `section_view` - When users view different sections
- `user_interaction` - General user interactions
- `project_click` - Project link clicks with project details
- `contact_action` - Contact form interactions
- `scroll_depth` - Scroll depth milestones

## 4. Privacy & GDPR Compliance

PostHog is configured with privacy-first settings:
- Respects Do Not Track (DNT) headers
- GDPR compliant
- No personal data collection
- Anonymous user tracking

## 5. Development vs Production

- **Development**: Debug mode enabled for testing
- **Production**: Optimized settings for performance

## 6. Analytics Dashboard

Once configured, you can view analytics in your PostHog dashboard:
- User behavior flows
- Event tracking
- Funnel analysis
- Heatmaps (if enabled)
- Performance metrics

## 7. Testing

To test the integration:
1. Start your development server: `npm start`
2. Open browser dev tools and check for PostHog events
3. Navigate through your portfolio
4. Check your PostHog dashboard for incoming events

## 8. Customization

You can modify tracking in `src/utils/posthog.js`:
- Add new event types
- Customize event properties
- Modify tracking logic
- Add user identification (if needed)

## 9. Deployment

Make sure to set the environment variables in your deployment platform:
- Netlify: Site settings > Environment variables
- Vercel: Project settings > Environment variables
- GitHub Pages: Repository secrets (if using GitHub Actions)

## 10. Troubleshooting

If events aren't appearing:
1. Check browser console for errors
2. Verify API key is correct
3. Ensure environment variables are loaded
4. Check PostHog project settings
5. Verify network connectivity to PostHog servers
