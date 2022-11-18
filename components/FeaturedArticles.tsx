import React, { ReactNode } from 'react';

const FeaturedArticles = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default FeaturedArticles;
