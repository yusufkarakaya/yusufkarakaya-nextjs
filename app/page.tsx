import Image from 'next/image'
import Navbar from '@/app/navbar/page'
export default function Home() {
  return (
    <>
      <main className="flex justify-center">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 mt-10 md:mt-20">
          <div className="justify-center">
            <Navbar />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Yusuf Karakaya
            </h1>
            <p className="mt-5 text-sm md:text-base">
              Experienced Web Developer with over 5 years of specialization in
              frontend development, focusing on building modern, user-friendly,
              responsive web applications. Proficient in JavaScript, React.js,
              Redux, RTK Query, HTML, CSS, and Next.js, with hands-on experience
              in backend technologies like Node.js and MongoDB. Skilled at
              translating design into seamless, interactive user interfaces, and
              having a solid background in CMS platforms like WordPress and
              Webflow for content-driven projects.
            </p>
            <br />

            <div className="mt-2 text-sm md:text-base">
              <strong className="block text-sm md:text-base">
                Skills & Experience:
              </strong>
              <p>
                <strong>Language:</strong> JavaScript
              </p>
              <p>
                <strong>Backend:</strong> Node.js, Express.js
              </p>
              <p>
                <strong>Databases:</strong> MongoDB
              </p>
              <p>
                <strong>Frontend:</strong> HTML5, CSS3, Next.js, React,
                Bootstrap, Material UI, Tailwind CSS, Shadcn/UI
              </p>
              <p>
                <strong>DevOps:</strong> Vercel, Render
              </p>
              <p>
                <strong>Tools:</strong> Git, GitHub, Visual Studio Code, npm,
                Google Analytics, Google Tag Manager, Google Ads
              </p>
              <p>
                <strong>CMS:</strong> WordPress, Webflow
              </p>
              <p>
                <strong>State Management:</strong> Redux, RTK Query
              </p>

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
              <p className="text-sm md:text-base">
                Coding Dojo - Software Development - 2023 - Los Angeles, CA
              </p>
              <br />
              <p className="text-sm md:text-base">
                GFN & Bahçeşehir Üniversitesi Wissen Akademie Microsoft Software
                and Database Expertise Training | 2016
              </p>
              <br />
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
                      className=" flex"
                      href="https://www.linkedin.com/in/ykarakaya/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin Profile:{'  '}
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
                      className=" flex"
                      href="https://github.com/yusufkarakaya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Profile:{' '}
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
            <div className="mt-5">
              <h2 className="text-lg md:text-xl font-bold">Blog</h2>
              <p className="text-sm md:text-base">
                A Personal Journey:{' '}
                <a
                  className="text-blue-500"
                  href="https://www.rooneypartners.com/embracing-the-power-of-learning-a-personal-journey/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
