import { FC } from 'react';
import InfinityLogoWhite from '../assets/InfinityLogoWhite.png';
import LinkedInLogoWhite from '../assets/LinkedInLogoWhite.png';
import '../stylesheets/FooterBorder.css';
import InstagramLogoWhite from '../assets/InstagramLogoWhite.png';
import { AnimatedTooltipComponent } from './AnimatedTooltipComponent';

const Footer: FC = () => {
  return (
    <>
      <div className="FooterBorder1">
        <div className="FooterBorder2">
          <div className="FooterBorder3">
            <div className="FooterBorder4">
            </div>

            <div className="text-white">
              <div className="mb-4 flex align-middle justify-center">
                {/* Logo */}
                <img src={InfinityLogoWhite} alt="Logo" className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 justify-center" />
              </div>
              {/* Name */}
              <div className="text-xl font-bold mb-2 pb-5">&copy; INFINITY 2K24</div>
              {/* Additional Text */}
              <p className="text-gray-400">Department of Computer Science and Engineering, University College of Engineering, Osmania University.</p>
            </div>
            {/* Second column */}
            <div className="text-white lg:flex lg:flex-row flex-col lg:justify-center lg:items-center pr-10 lg:justify-around">
              <div className="lg:w-1/2 lg:pr-8">
                <div>
                  <p className='mb-4 font-serif'>Made with love ❤️</p>
                  <AnimatedTooltipComponent/>
                </div>
              </div>
              <div className="lg:w-1/2 mt-4 lg:mt-0">
                <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 space-x-4 mt-4 lg:mt-0">
                  <div className="text-xl font-bold">Reach us: <p className='text-xl font-light'>infinity2k24.oucse@gmail.com</p></div>
                  <div className="text-xl font-bold">CONTACT US:</div>
                  <div className="text-xl font-light">V. Sujeeth Reddy : 7799726725</div>
                  <div className="text-xl font-light mb-2 pb-2">A. Bhargav : 6281515462</div>
                </div>
                  <div className="text-xl font-bold">FOLLOW US:</div>
                  <div className='flex flex-row gap-4 justify-center align-middle'>
                    <div>
                      <a href="https://www.instagram.com/infinity2k24ou/" className="text-gray-400 opacity-50 hover:opacity-100">
                        <img src={InstagramLogoWhite} className="h-8 w-8 sm:h-6 sm:w-6" alt="Instagram Logo" />
                      </a>
                    </div>
                    <div>
                      <a href="https://in.linkedin.com/in/infinity2k23" className="text-gray-400 opacity-50 hover:opacity-100">
                        <img src={LinkedInLogoWhite} className="h-8 w-8 sm:h-6 sm:w-6" alt="LinkedIn Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="text-gray-300 text-center">&copy; Powered & Secured by CSE Dept.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;