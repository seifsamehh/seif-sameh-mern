"use client";

import { Tabs, Tab, Card, CardBody, Link, Chip } from "@nextui-org/react";
import { Parallax } from "react-scroll-parallax";

const Experience = () => {
  return (
    <>
      <Parallax translateY={[-40, 40]}>
        <div className="title">
          <h2 className="text-center min-[290px]:text-5xl md:text-8xl font-black">
            Experience
          </h2>
        </div>
      </Parallax>
      <section className="lg-experience min-[290px]:hidden md:block overflow-hidden py-6">
        <div className="content flex justify-center items-center gap-6">
          <div className="flex w-[50%] items-center flex-col">
            <Tabs aria-label="Options" variant="solid" size="lg">
              <Tab key="2021" title="2021">
                <Card className="bg-cyan-600">
                  <CardBody>
                    <div className="card-title flex justify-between items-center">
                      <h3 className="font-black text-xl">
                        Front End Web Developer
                      </h3>
                      <p>Exception Designs</p>
                    </div>
                    <div className="card-body my-6">
                      <p>
                        I assembled and addressed technical and design
                        requirements, integrating user-facing and front-end
                        elements to maintain web presence effectiveness. I also
                        collaborated with stakeholders during the development
                        processes to confirm creative proposals and design best
                        practices. Additionally, I followed SDLC best practices
                        within an Agile environment to produce rapid iterations
                        for clients. Finally, I integrated web applications for
                        mobile platforms into a front-end environment.
                      </p>
                    </div>
                    <div className="card-chips flex gap-2">
                      <Chip>Html</Chip>
                      <Chip>Css</Chip>
                      <Chip>Scss</Chip>
                      <Chip>JavaScript</Chip>
                      <Chip>React</Chip>
                      <Chip>Jest</Chip>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2022" title="2022">
                <Card className="bg-cyan-600">
                  <CardBody>
                    <div className="card-title flex justify-between items-center">
                      <h3 className="font-black text-xl">Head Web Team</h3>
                      <Link
                        isExternal
                        href="https://ieee-community.vercel.app/"
                        showAnchorIcon
                        color="foreground"
                      >
                        IEEE Community
                      </Link>
                    </div>
                    <div className="card-body my-6">
                      <p>
                        I was responsible for teaching students about web
                        development and mentoring them on their projects. I also
                        help to organize and plan events for the community. I am
                        passionate about teaching and mentoring others, and I
                        was excited to be a part of the IEEE community.
                      </p>
                    </div>
                    <div className="card-chips flex gap-2">
                      <Chip>Html</Chip>
                      <Chip>Css</Chip>
                      <Chip>Scss</Chip>
                      <Chip>Bootstrap</Chip>
                      <Chip>Teaching</Chip>
                      <Chip>Mentoring</Chip>
                      <Chip>Web Development</Chip>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="present" title="present">
                <Card className="bg-cyan-600">
                  <CardBody>
                    <div className="card-title flex justify-between items-center">
                      <h3 className="font-black text-xl">
                        Chief Technology Officer ( CTO )
                      </h3>
                      <Link
                        isExternal
                        href="https://golden-hornet-software.vercel.app/"
                        showAnchorIcon
                        color="foreground"
                      >
                        Golden Hornet
                      </Link>
                    </div>
                    <div className="card-body my-6">
                      <p>
                        The Chief Technology Officer (CTO) is a senior-level
                        executive who is responsible for the technical aspects
                        of a company. They oversee the development and
                        implementation of new technologies, ensure that the
                        company's IT infrastructure is secure and reliable,
                        manage the company's IT budget, hire and manage the
                        company's IT staff, align the company's technology
                        strategy with its business goals, and stay up-to-date on
                        the latest technological trends. They may also develop
                        and implement the company's cybersecurity strategy,
                        manage the company's data privacy program, evaluate and
                        select new software and hardware solutions, troubleshoot
                        technical problems, educate employees on new
                        technologies, and represent the company to the
                        technology community.
                      </p>
                    </div>
                    <div className="card-chips flex gap-2 flex-wrap">
                      <Chip>Html</Chip>
                      <Chip>Css</Chip>
                      <Chip>Scss</Chip>
                      <Chip>Bootstrap</Chip>
                      <Chip>TailwindCss</Chip>
                      <Chip>WebPack</Chip>
                      <Chip>Next.js</Chip>
                      <Chip>Node.js</Chip>
                      <Chip>JavaScript</Chip>
                      <Chip>TypeScript</Chip>
                      <Chip>Express.js</Chip>
                      <Chip>Nest.js</Chip>
                      <Chip>Technology</Chip>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
      {/* sm screen */}
      <section className="sm-experience min-[290px]:block md:hidden overflow-hidden py-12">
        <div className="content flex justify-center items-center gap-6">
          <div className="cards flex flex-col gap-6">
            <div className="card bg-cyan-600 p-4 m-4 rounded-md">
              <div className="card-title flex justify-center items-center gap-4 flex-wrap">
                <h3 className="font-black text-xl">Front End Web Developer</h3>
                <p className="text-[#f5f5fa]">Exception Designs</p>
              </div>
              <div className="card-body my-6">
                <p className="text-center">
                  I assembled and addressed technical and design requirements,
                  integrating user-facing and front-end elements to maintain web
                  presence effectiveness. I also collaborated with stakeholders
                  during the development processes to confirm creative proposals
                  and design best practices. Additionally, I followed SDLC best
                  practices within an Agile environment to produce rapid
                  iterations for clients. Finally, I integrated web applications
                  for mobile platforms into a front-end environment.
                </p>
              </div>
              <div className="card-chips flex flex-wrap justify-center gap-2">
                <Chip>Html</Chip>
                <Chip>Css</Chip>
                <Chip>Scss</Chip>
                <Chip>JavaScript</Chip>
                <Chip>React</Chip>
                <Chip>Jest</Chip>
              </div>
            </div>
            <Parallax opacity={[0.3, 2]}>
              <div className="card bg-cyan-600 p-4 m-4 rounded-md">
                <div className="card-title flex justify-center items-center gap-4 flex-wrap">
                  <h3 className="font-black text-xl">Head Web Team</h3>
                  <Link
                    isExternal
                    href="https://ieee-community.vercel.app/"
                    showAnchorIcon
                    color="foreground"
                  >
                    IEEE Community
                  </Link>
                </div>
                <div className="card-body my-6">
                  <p className="text-center">
                    I was responsible for teaching students about web
                    development and mentoring them on their projects. I also
                    help to organize and plan events for the community. I am
                    passionate about teaching and mentoring others, and I was
                    excited to be a part of the IEEE community.
                  </p>
                </div>
                <div className="card-chips flex flex-wrap justify-center gap-2">
                  <Chip>Html</Chip>
                  <Chip>Css</Chip>
                  <Chip>Scss</Chip>
                  <Chip>Bootstrap</Chip>
                  <Chip>Teaching</Chip>
                  <Chip>Mentoring</Chip>
                  <Chip>Web Development</Chip>
                </div>
              </div>
            </Parallax>
            <Parallax opacity={[0.3, 2]}>
              <div className="card bg-cyan-600 p-4 m-4 rounded-md">
                <div className="card-title flex justify-center items-center gap-4 flex-wrap">
                  <h3 className="font-black text-xl">
                    Chief Technology Officer
                  </h3>
                  <Link
                    isExternal
                    href="https://golden-hornet-software.vercel.app/"
                    showAnchorIcon
                    color="foreground"
                  >
                    Golden Hornet
                  </Link>
                </div>
                <div className="card-body my-6">
                  <p className="text-center">
                    The Chief Technology Officer (CTO) is a senior-level
                    executive who is responsible for the technical aspects of a
                    company. They oversee the development and implementation of
                    new technologies, ensure that the company's IT
                    infrastructure is secure and reliable, manage the company's
                    IT budget, hire and manage the company's IT staff, align the
                    company's technology strategy with its business goals, and
                    stay up-to-date on the latest technological trends.
                  </p>
                </div>
                <div className="card-chips flex flex-wrap justify-center gap-2">
                  <Chip>Html</Chip>
                  <Chip>Css</Chip>
                  <Chip>Scss</Chip>
                  <Chip>Bootstrap</Chip>
                  <Chip>TailwindCss</Chip>
                  <Chip>WebPack</Chip>
                  <Chip>Next.js</Chip>
                  <Chip>Node.js</Chip>
                  <Chip>JavaScript</Chip>
                  <Chip>TypeScript</Chip>
                  <Chip>Express.js</Chip>
                  <Chip>Nest.js</Chip>
                  <Chip>Technology</Chip>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
