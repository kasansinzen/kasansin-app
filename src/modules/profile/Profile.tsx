import React, { FC, Fragment } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Section from '@/components/bases/Section';

export const Profile: FC = () => {
  const sections: FC[] = [About, Experience];
  const getBgThemeByIndex = (index: number): string => {
    return index%2 === 0 ? 'bg-dark-3' : 'bg-dark-4';
  }

  return (
    <Fragment>
      <div className="w-full pt-32 pb-20 sm:pb-28 bg-dark-2">
        <div className="flex flex-col items-center">
          <img className="h-80 mb-10 rounded-full shadow-lg" src="/img/profile.jpg"/>
          <h5 className="mb-1 text-2xl sm:text-6xl font-medium text-gray-900 dark:text-white">I'M KASANSIN KHAMSAT</h5>
          <span className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400">Software Engineer</span>
        </div>
      </div>


      {sections.map((Component, index) => (
        <Section className={getBgThemeByIndex(index)}>
          <Component />
        </Section>
      ))}
    </Fragment>
  )
};

export default Profile;