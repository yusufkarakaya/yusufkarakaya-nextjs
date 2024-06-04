import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex justify-center">
        <div className="w-5/12">
          <div className="justify-center mt-20">
            <h1 className="text-2xl "><strong>Yusuf Karakaya</strong></h1>
            <p className="mt-5">
              I&apos;m working as a Senior Associate at RooneyPartners. At the firm, I execute website development and
              search engine optimization and search marketing for a wide range of clients.
            </p>
            <br />
            <strong>Skills:</strong> <span>HTML, CSS, JavaScript, React, Node.js, Express.js, Next.js, SEO, SEM</span>
            <div className="mt-5">
              <h2><strong>Experience</strong></h2>
              <h4>Senior Associate at RooneyPartners - Oct 2019 - Present</h4>
              <p>Developed and maintained websites for a wide range of clients.</p>
            </div>
            <div>
              <div className="mt-5">
                <h2><strong>Education</strong></h2>
                <p>GFN &amp; Bahçeşehir Üniversitesi Wissen Akademie Microsoft Software and Database Expertise Training | 2014 - 2015</p>
                <p>Beykent University - Computer Programming | 2012 - 2014</p>
              </div>
            </div>
            <br />
            <div className="flex gap-2">
              <span className="flex">
                Linkedin Profile: <a className="text-blue-500" href="https://www.linkedin.com/in/ykarakaya/" target="_blank" rel="noopener noreferrer"><Image src='/assets/linkedin.png' alt="Yusuf Karakaya linkedin" width={25} height={25} /></a>
              </span>
              <br />
              <span className="flex">
                Github Profile: <a className="text-blue-500" href="https://github.com/yusufkarakaya" target="_blank" rel="noopener noreferrer"><Image src='/assets/github.png' alt="Yusuf Karakaya github" width={25} height={25} /></a>
              </span>
            </div>
            <div>
              <h2 className="mt-5"><strong>Blog</strong></h2>
              <p>A Personal Journey: <a className="text-blue-500" href="https://www.rooneypartners.com/embracing-the-power-of-learning-a-personal-journey/" target="_blank" rel="noopener noreferrer">link</a></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
