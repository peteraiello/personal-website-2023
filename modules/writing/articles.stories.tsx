import React from 'react';
import { BlogArticle } from './article';
import { Articles } from './articles';
import SustainableArticle from '../../public/images/articles/sustainable-article.jpg';

export default {
  title: 'Modules/Articles',
  component: Articles,
};

const exampleArticleData = [
    {
      title: 'Is your website Sustainable',
      featured: true,
      excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ex eu erat mollis sodales sed sit amet dui. Mauris quis tempus mi, non rutrum arcu. Sed vitae maximus eros.`,
      external: true,
      buttonLink: `https://www.dusted.com/insights/is-your-website-sustainable`,
      articleImage: {src: SustainableArticle.src, alt: 'Sustainability Article'}
    },
    {
      title: 'Understanding the benefits of Headless CMS',
      external: false,
      date: new Date(2023, 9, 22),
      excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ex eu erat mollis sodales sed sit amet dui. Mauris quis tempus mi, non rutrum arcu. Sed vitae maximus eros.`,
      tags: ['React', 'Tailwind', 'Next'],
      buttonLink: `/blogs/understanding-the-benefits-of-headless-cms`
    }
];

export const LightExample = () => {
  return(
    <div>
        <div className='bg-white'>
            <Articles 
                title={'Writing'}
                subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ex eu erat mollis sodales sed sit amet dui. Mauris quis tempus mi, non rutrum arcu. Sed vitae maximus eros. Proin dolor leo, rutrum aliquet lacus a, dictum sagittis enim.'}
                Articles={exampleArticleData}
            />
        </div>
    </div>
  )
}

export const DarkExample = () => {
    return(
      <div>
          <div className='dark bg-black'>
              <Articles 
                    title='Writing'
                    subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ex eu erat mollis sodales sed sit amet dui. Mauris quis tempus mi, non rutrum arcu. Sed vitae maximus eros. Proin dolor leo, rutrum aliquet lacus a, dictum sagittis enim.'}
                    Articles={exampleArticleData}              
              />
          </div>
      </div>
    )
  }