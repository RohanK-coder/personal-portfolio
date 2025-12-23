import posthog from 'posthog-js'

// Initialize PostHog
export const initPostHog = () => {
  // You'll need to replace this with your actual PostHog project API key
  // Get it from your PostHog dashboard: https://app.posthog.com/project/settings
  const POSTHOG_KEY = process.env.REACT_APP_POSTHOG_KEY || 'phc-your-key-here'
  const POSTHOG_HOST = process.env.REACT_APP_POSTHOG_HOST || 'https://app.posthog.com'

  if (POSTHOG_KEY && POSTHOG_KEY !== 'phc-your-key-here') {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      // Enable automatic page view tracking
      capture_pageview: false, // We'll handle this manually for better control
      capture_pageleave: true,
      // Privacy settings
      respect_dnt: true,
      // Development settings
      debug: process.env.NODE_ENV === 'development',
      // Advanced settings
      autocapture: true,
      capture_heatmaps: true,
      capture_performance: true,
    })
  }
}

// Utility functions for tracking events
export const trackEvent = (eventName, properties = {}) => {
  if (posthog.__loaded) {
    posthog.capture(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
    })
  }
}

// Track page views
export const trackPageView = (pageName, properties = {}) => {
  if (posthog.__loaded) {
    posthog.capture('$pageview', {
      page: pageName,
      ...properties,
    })
  }
}

// Track user interactions
export const trackUserInteraction = (interactionType, element, properties = {}) => {
  trackEvent('user_interaction', {
    interaction_type: interactionType,
    element: element,
    ...properties,
  })
}

// Track project interactions
export const trackProjectClick = (projectTitle, linkType, url) => {
  trackEvent('project_click', {
    project_title: projectTitle,
    link_type: linkType, // 'github' or 'demo'
    project_url: url,
  })
}

// Track contact interactions
export const trackContactAction = (actionType, properties = {}) => {
  trackEvent('contact_action', {
    action_type: actionType,
    ...properties,
  })
}

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
  })
}

// Track section views
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section: sectionName,
  })
}

export default posthog

