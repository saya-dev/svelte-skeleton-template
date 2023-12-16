import './app.postcss';
import App from './App.svelte';

import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
import { storePopup } from '@skeletonlabs/skeleton';
storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

const app = new App({
   target: document.getElementById('app') as Element
});

export default app;
