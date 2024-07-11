'use client';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { PiHouseLineBold } from 'react-icons/pi';
import { Title, Text } from 'rizzui';
import { Button } from 'rizzui';
import SocialItems from '../common/social-shares';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-gray-50">
      <div className="sticky top-0 z-40 px-6 py-5 backdrop-blur-lg lg:backdrop-blur-none xl:px-10 xl:py-8">
        <div className={cn('mx-auto flex max-w-[1520px] items-center', 'justify-between')}>
          <Link to={'/'}>
            <img
              style={{ width: 70 }}
              src={require('../assets/images/logo.png')}
              alt="ds"
              className="dark:invert"
            />
          </Link>
          {/* <Button
            label="Go to home"
            variant="outline"
            size="sm"
            className="md:h-10 md:px-4 md:text-base"
            onClick={() => navigate('/')}
          /> */}
          <Button variant="outline" onClick={() => navigate('/')} className="md:h-10 md:px-4 md:text-base text-white bg-blue-600" size="sm">Go to home</Button>
        </div>
      </div>
      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto text-center">
          <img
            src={require('../assets/images/not-found.png')}
            alt="not found"
            className="mx-auto mb-8 aspect-[360/326] max-w-[256px] xs:max-w-[370px] lg:mb-12 2xl:mb-16"
          />
          <Title
            as="h1"
            className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
            Sorry, the page not found
          </Title>
          <Text className="mt-3 text-sm leading-loose text-gray-500 lg:mt-6 lg:text-base lg:leading-loose">
            We have been spending long hours in order to launch our new website. Join our
            <br className="hidden sm:inline-block" />
            mailing list or follow us on Facebook for get latest update.
          </Text>
          <Button
            label={
              <>
                <PiHouseLineBold className="mr-1.5 text-lg" />
                Back to home
              </>
            }
            color="primary"
            size="xl"
            className="mt-8 h-12 px-4 xl:h-14 xl:px-6"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
      <SocialItems />
    </div>
  );
}
