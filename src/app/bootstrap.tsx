import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CatalogPage } from '@/pages/catalog';
import './styles.css';

export function bootstrap() {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('Root element missing');
  }

  createRoot(root).render(
    <StrictMode>
      <CatalogPage />
    </StrictMode>,
  );
}
