import Image from 'next/image'
import Navbar from '@/app/navbar/page'
import HyperText from '@/components/ui/hyper-text'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <main className="flex justify-center pb-10 ">
        <div
          key="main-container"
          className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 mt-10 "
        >
          <div className="justify-center">
            <Navbar key="navbar" />
            {/* <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              
              </h1> */}
            <HyperText
              key="hypertext"
              className="text-4xl font-bold text-black dark:text-white"
              text="Yusuf Karakaya"
            />
            <p className=" text-sm md:text-base">
              Experienced Web Developer with over 5 years of specialization in
              frontend development, focusing on building modern, user-friendly,
              responsive web applications. Proficient in JavaScript, React.js,
              Redux, RTK Query, HTML, CSS, and Next.js, with hands-on experience
              in backend technologies like Node.js and MongoDB. Skilled at
              translating design into seamless, interactive user interfaces, and
              having a solid background in CMS platforms like WordPress and
              Webflow for content-driven projects.
            </p>

            <div className="mt-5 text-sm md:text-base">
              <strong className="block  ">Skills:</strong>
              <section className="flex flex-wrap gap-1">
                <Button key="js">JavaScript</Button>
                <Button key="react">Reactjs</Button>
                <Button key="node">Node.js</Button>
                <Button key="mongo">MongoDB</Button>
                <Button key="redux">Redux Toolkit</Button>
                <Button key="tailwind">TailwindCSS</Button>
                <Button key="html">HTML</Button>
                <Button key="css">CSS</Button>
                <Button key="wp">WordPress</Button>
                <Button key="webflow">Webflow</Button>
              </section>
              {/* New Experience Section */}
              <div className="mt-5">
                <h2 className="text-lg md:text-xl font-bold">Experience</h2>
                <p className="text-sm md:text-base">
                  <strong>
                    RooneyPartners LLC, Senior Associate – Web Development
                  </strong>{' '}
                  (Oct 2019 - Oct 2024)
                </p>
                <ul className="list-disc ml-5">
                  <li>
                    Designed and managed websites using HTML, CSS, JavaScript,
                    WordPress, and Webflow, integrating updates and implementing
                    new features.
                  </li>
                  <li>
                    Regularly maintained and secured customer websites to ensure
                    optimal performance.
                  </li>
                  <li>
                    Set up and managed Google Ads campaigns, focusing on
                    optimizing productivity and reach.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-lg md:text-xl font-bold">Education</h2>
              <p className="mb-1 text-sm md:text-base">
                Coding Dojo - Software Development - 2023 - Los Angeles, CA -{' '}
                <a
                  href="https://app.diplomasafe.com/en-US/diploma/dbe6d0954f986cbe000af70fcc6fdb901a11b2280/"
                  target="_blank"
                  className="text-blue-500 underline underline-offset-2"
                >
                  Certificate
                </a>
              </p>
              <p className="mb-1 text-sm md:text-base">
                GFN & Bahçeşehir Üniversitesi Wissen Akademie Microsoft Software
                and Database Expertise Training | 2016
              </p>
              <p className="text-sm md:text-base">
                Beykent University - Computer Programming - 2010, 2012 -
                Istanbul, Turkiye
              </p>
            </div>
            <br />
            <div className="flex  gap-2 items-center">
              <div className="">
                <h2 className="text-lg md:text-xl font-bold">
                  Social Profiles
                </h2>
                <div className="flex gap-3">
                  <span className="flex mt-1">
                    <a
                      className="flex transform transition-transform duration-300 hover:scale-110 hover:brightness-125"
                      href="https://www.linkedin.com/in/ykarakaya/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/linkedin.png"
                        alt="Yusuf Karakaya linkedin"
                        width={25}
                        height={25}
                      />
                    </a>
                  </span>
                  <span className="flex mt-1">
                    <a
                      className="flex transform transition-transform duration-300 hover:scale-110 hover:brightness-125"
                      href="https://github.com/yusufkarakaya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/github.png"
                        alt="Yusuf Karakaya github"
                        width={25}
                        height={25}
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-lg md:text-xl font-bold">
                Contact Information
              </h2>
              <p className="text-sm md:text-base">
                Email:{' '}
                <a
                  href="mailto:yusufkarakaya92@gmail.com"
                  className="text-blue-500"
                >
                  yusufkarakaya92@gmail.com
                </a>
              </p>
              <p className="text-sm md:text-base">
                Phone: +1 646-371-6927 | Location: Temecula, California, USA
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
