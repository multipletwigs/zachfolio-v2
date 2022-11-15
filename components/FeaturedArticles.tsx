import React, { ReactNode } from 'react';
import { SerifHeader } from './SerifHeader';

const FeaturedArticles = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default FeaturedArticles;
