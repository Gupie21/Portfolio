import { loadGoatCounter } from './goatcounter';

afterEach(() => {
  document.querySelectorAll('script[src="https://gc.zgo.at/count.js"]').forEach((script) => script.remove());
  jest.restoreAllMocks();
});

test('does not load GoatCounter without an endpoint', () => {
  loadGoatCounter('');

  expect(document.querySelector('script[src="https://gc.zgo.at/count.js"]')).not.toBeInTheDocument();
});

test('rejects non-HTTPS endpoints', () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

  loadGoatCounter('http://example.com/count');

  expect(document.querySelector('script[src="https://gc.zgo.at/count.js"]')).not.toBeInTheDocument();
  expect(consoleError).toHaveBeenCalledWith(
    'Invalid REACT_APP_GOATCOUNTER_URL; expected an HTTPS GoatCounter count URL.'
  );
});

test('loads GoatCounter with the configured endpoint', () => {
  loadGoatCounter('https://example.goatcounter.com/count');

  const script = document.querySelector('script[src="https://gc.zgo.at/count.js"]');
  expect(script.async).toBe(true);
  expect(script).toHaveAttribute('data-goatcounter', 'https://example.goatcounter.com/count');
});
