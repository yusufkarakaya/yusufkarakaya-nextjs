import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex justify-center">
        <div className="w-5/12">
          <div className="justify-center mt-20">
            <h1 className="text-2xl ">
              <strong>Yusuf Karakaya</strong>
            </h1>
            <p className="mt-5">
              Experienced Web Developer with over 4 years of expertise in
              full-stack development and web design, specializing in JavaScript,
              TypeScript, and modern web technologies. Proficient in building
              and maintaining websites using WordPress, Webflow, and Next.js.
              Adept at creating responsive, user-friendly interfaces with a
              focus on enhancing user interaction and engagement. Strong
              background in setting up and optimizing Google Ads campaigns to
              drive productivity and increase visibility.
            </p>
            <br />
            <strong>Skills:</strong>
            <div className="mt-2">
              <p>
                <strong>Language:</strong> JavaScript, TypeScript
              </p>
              <p>
                <strong>Backend:</strong> Node.js, Express.js
              </p>
              <p>
                <strong>Databases:</strong> MongoDB, PostgreSQL
              </p>
              <p>
                <strong>Frontend:</strong> HTML5, CSS3, Next, React, Bootstrap,
                Material UI, Tailwind CSS, Shadcn/UI
              </p>
              <p>
                <strong>DevOps:</strong> Heroku, Netlify
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
              <h2>
                <strong>Experience</strong>
              </h2>
              <h4>Senior Associate at RooneyPartners - Oct 2019 - Present</h4>
              <p>
                Developed and maintained websites for a wide range of clients.
              </p>
            </div>
            <div>
              <div className="mt-5">
                <h2>
                  <strong>Education</strong>
                </h2>
                <p>
                  GFN &amp; Bahçeşehir Üniversitesi Wissen Akademie Microsoft
                  Software and Database Expertise Training | 2014 - 2015
                </p>
                <p>Beykent University - Computer Programming | 2012 - 2014</p>
              </div>
            </div>
            <br />
            <div className="flex gap-2">
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
              <br />
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
            <div>
              <h2 className="mt-5">
                <strong>Contact Information</strong>
              </h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:yusufkarakaya92@gmail.com"
                  className="text-blue-500"
                >
                  yusufkarakaya92@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h2 className="mt-5">
                <strong>Blog</strong>
              </h2>
              <p>
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
