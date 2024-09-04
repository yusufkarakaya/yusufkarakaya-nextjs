import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex justify-center">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 mt-10 md:mt-20">
          <div className="justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Yusuf Karakaya
            </h1>
            <p className="mt-5 text-sm md:text-base">
              Experienced Web Developer with over 4 years of expertise in
              full-stack development, specializing in CMS projects like
              WordPress and Webflow. Proficient in modern web technologies,
              including JavaScript, Next.js, React, and Node.js, with a strong
              focus on building user-friendly and responsive websites.
            </p>
            <br />
            <strong className="block text-sm md:text-base">Skills:</strong>
            <div className="mt-2 text-sm md:text-base">
              <p>
                <strong>Language:</strong> JavaScript, TypeScript
              </p>
              <p>
                <strong>Backend:</strong> Node.js, Express.js
              </p>
              <p>
                <strong>Databases:</strong> MongoDB
              </p>
              <p>
                <strong>Frontend:</strong> HTML5, CSS3, Next, React, Bootstrap,
                Material UI, Tailwind CSS, Shadcn/UI
              </p>
              <p>
                <strong>DevOps:</strong> Vercel
              </p>
              <p>
                <strong>Tools:</strong> Git, GitHub, Visual Studio Code, npm,
                Google Analytics, Google Tag Manager, Google Ads
              </p>
              <p>
                <strong>CMS:</strong> WordPress, Webflow
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-lg md:text-xl font-bold">Experience</h2>
              <h4 className="text-sm md:text-base">
                Senior Associate at RooneyPartners - Oct 2019 - Present
              </h4>
              <p className="text-sm md:text-base">
                Developed and maintained websites for a wide range of clients.
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-lg md:text-xl font-bold">Education</h2>
              <p className="text-sm md:text-base">
                GFN &amp; Bahçeşehir Üniversitesi Wissen Akademie Microsoft
                Software and Database Expertise Training | 2014 - 2015
              </p>
              <p className="text-sm md:text-base">
                Beykent University - Computer Programming | 2012 - 2014
              </p>
            </div>
            <br />
            <div className="flex gap-2 items-center">
              <span className="flex">
                Linkedin Profile:{" "}
                <a
                  className="text-blue-500"
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
              <span className="flex">
                Github Profile:{" "}
                <a
                  className="text-blue-500"
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
            <div className="mt-5">
              <h2 className="text-lg md:text-xl font-bold">
                Contact Information
              </h2>
              <p className="text-sm md:text-base">
                Email:{" "}
                <a
                  href="mailto:yusufkarakaya92@gmail.com"
                  className="text-blue-500"
                >
                  yusufkarakaya92@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-lg md:text-xl font-bold">Blog</h2>
              <p className="text-sm md:text-base">
                A Personal Journey:{" "}
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
  );
}
