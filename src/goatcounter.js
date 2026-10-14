const goatCounterScriptUrl = 'https://gc.zgo.at/count.js';

function getGoatCounterUrl(endpoint) {
  if (!endpoint || !endpoint.trim()) return null;

  try {
    const url = new URL(endpoint.trim());
    if (url.protocol === 'https:' && url.hostname) return url.href;
  } catch {
    console.error('Invalid REACT_APP_GOATCOUNTER_URL; expected an HTTPS GoatCounter count URL.');
    return null;
  }

  console.error('Invalid REACT_APP_GOATCOUNTER_URL; expected an HTTPS GoatCounter count URL.');
  return null;
}

export function loadGoatCounter(endpoint) {
  const goatCounterUrl = getGoatCounterUrl(endpoint);
  if (!goatCounterUrl) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = goatCounterScriptUrl;
  script.dataset.goatcounter = goatCounterUrl;
  script.onerror = () => console.error('Unable to load the GoatCounter tracking script.');
  document.head.appendChild(script);
}
