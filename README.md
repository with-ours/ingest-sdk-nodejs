# Ours Privacy Ingest API - Node.js TypeScript Client

Welcome to the TypeScript client for the OursPrivacy Ingest API. This client library simplifies your integration with our API, enabling seamless communication with our endpoints both on the server and in the browser.

## Installation

To install the client, you can use either Yarn or npm:

```bash
# Using Yarn
yarn add ours-ingest-sdk

# Using npm
npm install ours-ingest-sdk
```

## Usage

Once installed, you can start using the client in your application. For example:

```javascript
import { OursPrivacyApi } from 'ours-ingest-sdk';
const api = new OursPrivacyApi();

// Track an event
api.track('eventName', { property: 'value' });

// Identify a user
api.identify('userId', { email: 'user@example.com' });
```

## Browser Integration

If you are tracking events from the browser, please use our Web SDK. For detailed installation and usage instructions, refer to our installation guide.

## Contributing

For information on how to contribute to this project, including how to build and publish releases, see [PUBLISHING.md](PUBLISHING.md).

## Support

- **Documentation**: https://docs.oursprivacy.com/docs/nodejs#/
- **npm Package**: https://www.npmjs.com/package/ours-ingest-sdk
- **Issues**: https://github.com/with-ours/ingest-sdk-nodejs/issues
- **Repository**: https://github.com/with-ours/ingest-sdk-nodejs

## Related Links

- [Ours Privacy](https://oursprivacy.com)
