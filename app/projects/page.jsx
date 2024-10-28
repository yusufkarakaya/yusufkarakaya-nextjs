import React from 'react'
import Navbar from '../navbar/page'
import HyperText from '@/components/ui/hyper-text'

const Page = () => {
  return (
    <main className="flex justify-center pb-10">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 mt-10">
        <div className="justify-center">
          <Navbar />
          <div className="">
            <HyperText
              className="text-4xl font-bold text-black dark:text-white"
              text="Projects"
            />

            {/* TechNotes MERN Stack App */}
            <div className="">
              <h3 className="text-md md:text-lg font-semibold">
                ThreadCraft E-Commerce App
              </h3>
              <p className="text-sm md:text-base">
                I built this project to learn and understand how full-stack
                development works for e-commerce projects. My goal was to cover
                topics like JWT, state management, cloud image uploads,
                endpoints, caching, routing, and more.. Deployed on Render.{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://threadcraft-ecommerce.onrender.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>{' '}
                |{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://github.com/yusufkarakaya/ThreadCraft-eCommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend GitHub Repo
                </a>{' '}
                |{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://github.com/yusufkarakaya/e-commerce-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend GitHub Repo
                </a>
              </p>
            </div>

            <div className="mt-3">
              <h3 className="text-md md:text-lg font-semibold">
                NASA React App
              </h3>
              <p className="text-sm md:text-base">
                A simple NASA Astronomy Picture of the Day (APOD) app built with
                React. It fetches daily APOD data from NASA&apos;s API and
                caches the data in local storage. Deployed on Vercel.{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://nasa-react-app-taupe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>{' '}
                |{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://github.com/yusufkarakaya/nasa-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>

            <div className="mt-3">
              <h3 className="text-md md:text-lg font-semibold">
                E-Procurement Connect: Shopping Platform for Academic
                Institutions
              </h3>
              <p className="text-sm md:text-base">
                Designing and developing the entire website using Next.js,
                Tailwind CSS, and ShadCN. Created a user-friendly landing page
                and additional components to enhance user interaction.
                <strong> (Currently working) </strong>{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://esatys-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </p>
            </div>

            <div className="mt-3">
              <h3 className="text-md md:text-lg font-semibold">
                StreamWave Innovations: Digital Agency Website
              </h3>
              <p className="text-sm md:text-base">
                Built a modern, responsive website using Next.js and Tailwind
                CSS, and connected it to Formspree for easy communication. Used
                GitHub to track changes and Vercel to host the site.{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://agency-website-nextjs-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>{' '}
                |{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://github.com/yusufkarakaya/agency-website-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>

            <div className="mt-3">
              <h3 className="text-md md:text-lg font-semibold">
                Temecula Food Truck: Website
              </h3>
              <p className="text-sm md:text-base">
                The website is built with Next.js and Tailwind CSS and uses
                Swiper for the slider.{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://foodtruck-roan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>{' '}
                |{' '}
                <a
                  className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                  href="https://github.com/yusufkarakaya/foodtruck"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-lg md:text-xl font-bold">CMS Projects</h2>

              <div className="mt-3">
                <h3 className="text-md md:text-lg font-semibold">Germitec</h3>
                <p className="text-sm md:text-base">
                  Built and maintained a responsive Webflow site for a
                  healthcare tech company, focusing on making it easy to use and
                  fast.
                  <strong> (Webflow) </strong>{' '}
                  <a
                    className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                    href="https://www.germitec.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site
                  </a>
                </p>
              </div>

              <div className="mt-3">
                <h3 className="text-md md:text-lg font-semibold">
                  RooneyPartners
                </h3>
                <p className="text-sm md:text-base">
                  Created a clean, professional WordPress site for a PR firm,
                  ensuring it works well on all devices.
                  <strong> (WordPress) </strong>{' '}
                  <a
                    className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                    href="https://www.rooneypartners.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site
                  </a>
                </p>
              </div>

              <div className="mt-3">
                <h3 className="text-md md:text-lg font-semibold">ICTBio</h3>
                <p className="text-sm md:text-base">
                  Designed and set up a custom WordPress site for a biotech
                  company, adding features to manage complex content.
                  <strong> (WordPress) </strong>{' '}
                  <a
                    className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                    href="https://www.ictbio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site
                  </a>
                </p>
              </div>

              <div className="mt-3">
                <h3 className="text-md md:text-lg font-semibold">Novele</h3>
                <p className="text-sm md:text-base">
                  Built a sleek and modern Webflow site for a tech startup,
                  focusing on seamless user experience and responsive design.
                  <strong> (Webflow) </strong>{' '}
                  <a
                    className="font-semibold underline underline-offset-2 inline-block transform transition-transform duration-300 hover:scale-105"
                    href="https://www.novele.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
