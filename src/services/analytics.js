const GA_SCRIPT_ID = "google-analytics-script";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

function hasMeasurementId() {
  return typeof measurementId === "string" && measurementId.trim().length > 0;
}

function loadGoogleAnalyticsScript() {
  if (document.getElementById(GA_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  document.head.appendChild(script);
}

export function isAnalyticsEnabled() {
  return hasMeasurementId();
}

export function initializeAnalytics() {
  if (initialized || !isAnalyticsEnabled()) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  loadGoogleAnalyticsScript();
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  initialized = true;
}

export function trackPageView(path = window.location.pathname + window.location.search) {
  if (!isAnalyticsEnabled()) return;

  initializeAnalytics();
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(eventName, parameters = {}) {
  if (!isAnalyticsEnabled() || !eventName) return;

  initializeAnalytics();
  window.gtag("event", eventName, parameters);
}

export function trackProjectLinkClick(projectTitle, linkType, url) {
  trackEvent("project_link_clicked", {
    project_title: projectTitle,
    link_type: linkType,
    link_url: url,
  });
}

export function trackSocialLinkClick(platform, url) {
  trackEvent("social_link_clicked", {
    platform,
    link_url: url,
  });
}

export function trackContactLinkClick(method, url) {
  trackEvent("contact_link_clicked", {
    method,
    link_url: url,
  });
}

export function trackResumeClick(url) {
  trackEvent("resume_clicked", {
    link_url: url,
  });
}

export function trackChatOpened(source) {
  trackEvent("chat_opened", {
    source,
  });
}

export function trackMediaLightboxOpened(itemTitle) {
  trackEvent("media_lightbox_opened", {
    item_title: itemTitle,
  });
}

export function trackVideoPlay(videoTitle, provider, videoId) {
  trackEvent("video_played", {
    video_title: videoTitle,
    provider,
    video_id: videoId,
  });
}
