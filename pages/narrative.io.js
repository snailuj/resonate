import '../styles/narrative.io.css'
import React from 'react'
import Meta from '../components/meta'

const Resume = () => {
  return <>
    <Meta title="Julian Suggate | narrative.io"/>
    <div className="container">
    <div className="headers">
      <header className="name">
        <h1>Julian Suggate</h1>
        <h3>B.Sc. Comp Sci, Philosophy</h3>
      </header>
      <header className="contact-online">
        <p><a href="mailto:julian.suggate@gmail.com">Email</a><br/></p>
        <p><a href="//linkedin.com/in/juliansuggate/">Linked In</a><br/></p>
      </header>
      <header className="contact-irl">
        <p>
          44a Aratoro Pl <br />
          Mt Pleasant <br />
          Christchurch 8081 <br />
          New Zealand <br />
        </p>
        <p>021 157 8562<br/></p>
      </header>
    </div>
    <article>
      <section className="splash ml-16">
        <h2 className="mt-10 mb-6">Senior Coder, Product Fanatic and Occasional <br /> Salesperson</h2>
        <section>
            <ul>
              <li>REST API Design</li>
              <li>Elixir, Phoenix 1.4, LiveView, and Ecto</li>
              <li>ReasonML (OCaml dialect) and ReasonReact</li>
              <li>Training, peering and code review</li>
              <li>Data design and tuning</li>
              <li>In-house framework design and build</li>
            </ul>
            <ul>
              <li>Product design</li>
              <li>Internationalization and localization DX and UX</li>
              <li>Planning, estimates, contract negotiations</li>
              <li>Interface / UX design and review</li>
              <li>Sales, client visits and training</li>
            </ul>
            <ul>
              <li>Server maintenance and admin</li>
              <li>Cloud service providers (AWS, Linode, Vultr, DigitalOcean)</li>
            </ul>
          </section>
      </section>
    </article>
    <article className="proficiencies">
      <section className="proficiencies ml-16">
        <section className="prof1 md:w-1/2">
          <h2 className="mt-10 mb-6">Leadership</h2>
          <div className="row">
            <div className="column">
              <table>
                <tbody>
                  <tr title="Support creativity">
                    <td>Support Creativity</td>
                  </tr>
                  <tr title="Specialized in HTML">
                    <td>Remove Obstacles</td>
                  </tr>
                  <tr title="Specialized in CSS">
                    <td>Clarify Expectations</td>
                  </tr>
                  <tr title="Proficient in Python">
                    <td>Encourage Pushback</td>
                  </tr>
                  <tr title="Proficient in PHP">
                    <td>Have Fun</td>
                  </tr>
                  <tr title="Proficient in SQL">
                    <td>Own Mistakes</td>
                  </tr>
                  <tr title="Proficient in C">
                    <td>Defer to Expertise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="prof2">
          <h2 className="mb-6">Product</h2>
          <div className="row">
            <div className="column">
              <table>
                <tbody>
                  <tr title="Specialised with OOP">
                    <td>Eat Your Dogfood</td>
                  </tr>
                  <tr title="Proficient with REST APIs">
                    <td>Learn from Customers</td>
                  </tr>
                  <tr title="Proficient with Responsive UI">
                    <td>1 Hundred Hours &lt; 1 Good Sketch</td>
                  </tr>
                  <tr title="Confident with Cloud Admin">
                    <td>Performance is UX</td>
                  </tr>
                  <tr title="Confident with Cloud Admin">
                    <td>Don't Make Me Think</td>
                  </tr>
                  <tr title="Proficient with Agile Development">
                    <td>
                      Ideas are Easy <br />
                      <span className="nudge-right">... choosing one isn't</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
      <section className="proficiencies ml-16">
        <section className="prof2 md:w-1/2">
          <h2 className="mb-6 mt-10">Teamwork</h2>
          <div className="row">
            <div className="column">
              <table>
                <tbody>
                  <tr title="Specialised with OOP">
                    <td>Team Credit, Personal Responsibility</td>
                  </tr>
                  <tr title="Proficient with REST APIs">
                    <td>Our Dev Team Will Not Scale</td>
                  </tr>
                  <tr title="Proficient with Responsive UI">
                    <td>Meaningful Commit Messages</td>
                  </tr>
                  <tr title="Proficient with Agile Development">
                    <td>Collaboration === Hive Mind</td>
                  </tr>
                  <tr title="Proficient with Mentoring">
                    <td>Know Your Colleagues' Limits</td>
                  </tr>
                  <tr title="Confident with Cloud Admin">
                    <td>Know Your Own Limits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="prof2">
          <h2 className="mb-6">Tech</h2>
          <div className="row">
            <div className="column">
              <table>
                <tbody>
                  <tr title="Specialised with OOP">
                    <td>Do the Work Right</td>
                  </tr>
                  <tr title="Specialised with Technical Architecture">
                    <td>Do the Right Work</td>
                  </tr>                  
                  <tr title="Proficient with REST APIs">
                    <td>Fix Broken Windows</td>
                  </tr>
                  <tr title="Proficient with Responsive UI">
                    <td>Fail Fast and Iterate</td>
                  </tr>
                  <tr title="Proficient with Agile Development">
                    <td>Over-engineering &lt; Under-engineering</td>
                  </tr>
                  <tr title="Confident with Cloud Admin">
                    <td>
                      Spaces Not Tabs <br />
                      <span className="nudge-right">... but pick your battles</span>
                    </td>
                  </tr>
                  <tr title="Confident with Cloud Admin">
                    <td>Lint All The Things</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
      <section className="proficiencies ml-16">
        <section className="prof1 w-full">
          <h2 className="mb-6">Remote Work</h2>
          <div className="row">
            <div className="column">
              <table>
                <tbody>
                  <tr title="Specialized in JS">
                    <td>Zoom can be a Commons</td>
                  </tr>
                  <tr title="Specialized in HTML">
                    <td>Ask for Code Reviews</td>
                  </tr>
                  <tr title="Specialized in CSS">
                    <td>Chatroom is Everything<br/>
                    <span className="nudge-right">... but pick up the phone now and then</span>
                    </td>
                  </tr>
                  <tr title="Proficient in Python">
                    <td>Get to Know Your Team</td>
                  </tr>
                  <tr title="Proficient in Python">
                    <td>Relentlessly share the little things ... lols, cat gifs, gardening tips</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </article>
    <article>
      <section className="employment">
          <h2 className="mb-6 mt-10">Relevant Experience (not exhaustive)</h2>
          <section className="position after-heading">
            <header className="role">
              <h4>Code Scrutineer and Yoga SME</h4>
              <h4>GymMaster/Treshna Enterprises Ltd. <br />  ("Fast 500" Startup)</h4>
              <h4>2015, 2018 &ndash; Present</h4>
            </header>
            <p>In-browser, cloud-hosted business management webapp for the global fitness industry (Gyms, Yoga Studios etc)</p>
            <p>Team of approx 20 developers and 15 support, admin and sales</p>
            <ul className="mt-2">
              <li>Created frameworks for a partial rewrite of JS into ReasonML (a statically typed, functional OCaml
              variant that compiles to Javascript). Intentions initially were:</li>
                <li>Reduce time to first byte for page loads</li>
                <li>Evolution not revolution! Use Bucklescript FFI to interop with JS so that pages could be heterogeneous</li>
              <li>The framework met these goals by rendering pages inside a UI server (Express hosting Nextjs). URLs were 
                prefixed by the framework and Apache configured as a reverse-proxy to resolve between Flask and Nextjs.</li>
              <li>
                  Despite its success, the prototype was shelved due to budget concerns around training
                  and recruiting developers for FP languages.
              </li>
              <li>Harnessed python3 and node scripts into a CI pipeline that reads Flask decorators on every push and outputs
              Typescript classes that are compiled, type-checked and bundled into the build. As well as type-safety, these 
              classes also provide an intuitive API for devs, including auto-generated AJAX helpers for communicating with the
              backend</li>
              <li>Wrote a very simple Phoenix 1.4 / LiveView app, using Ecto to do CRUD on a legacy Postgres database for internal staff time tracking.</li>
              <li>I and another peer ported the React Context API to standard Web Components using Babel polyfill for IE compat</li>
              <li>Oversaw and helped with research, prototyping and deployment of new i18n tooling and dev workflow that integrates legacy gettext .po 
              files, and introduces Mozilla Fluent</li>
              <li>Oversaw implementation of REST API using Flask Restplus</li>
              <li>Introduced app-wide error codes for consistent, single-source-of-truth user messages and better crash reports</li>
              <li>Agitated for modern Typescript / ES dev instead of legacy inlined ES5. A long game of patience and education.</li>
              <li>Delegated the successful implementation of Typescript, ES Next, Webpack and Babel. We retained support for IE and
              Safari 9+</li>
              <li>Built subsystem for users to create and administer custom role-based access rights to other facility
              staff at arbitrary levels of detail</li>
              <li>Remote vs on-site work ratio of roughly 3:2 days per week</li>
              <li>Reporting issues, assigning them, tracking, testing and closing in our tracker</li>
              <li>Fixing bugs, taking support calls, speaking to future customers</li>
              <li>Server maintenance and admin (Apache, UWSGI, postgresql)</li>
              <li>Cloud services providers (AWS, Linode, Vultr, DigitalOcean) AWS EC2, Load Balancers, DNS, S3</li>
            </ul>
          </section>
          <section className="position">
            <header className="role">
              <h4>Freelance Full-Stack Developer</h4>
              <h4>2011 &ndash; 2018</h4>
            </header>
          <p>Delivering custom software to various clients</p>
            <ul>
              <li>100% remote contracts</li>
              <li>Negotiations, timelines and costs for contracts</li>
              <li>C# on ASP.NET, SQL Server, Microsoft IIS</li>
              <li>AWS, DigitalOcean, Ubuntu admin</li>
              <li>WordPress, PHP, MySQL</li>
              <li>Adobe Flex / Flash, jQuery, HTML, CSS etc</li>
            </ul>
          </section>
          <section className="position">
            <header className="role">
              <h4>Full-Stack Developer</h4>
              <h4>Sungard Systems Ltd.</h4>
              <h4>2012</h4>
            </header>
            <p className="mb-4">6 month contract. Introduced new Javascript libraries and techniques (IIFEs, knockout.js, JSUnit)</p>
          </section>
          <section className="position">
            <header className="role">
              <h4>Full-Stack Games Developer</h4>
              <h4>Cerebral Fix Ltd</h4>
              <h4>2009 &ndash; 2011</h4>
            </header>
            <p className="mb-4">Created frameworks for strongly-typed data transfer between server (ASP.NET, C#, SQL Server) and
            games (Flash, Unity). Built game features in Flash and Objective C</p>
          </section>
          <section className="position">
            <header className="role">
              <h4>Senior Actionscript Developer</h4>
              <h4>mFlow</h4>
              <h4>2008 &ndash; 2009</h4>
            </header>
            <p>A VC funded social music streaming service.</p>
            <ul>
              <li>Remote contract with travel between NZ and London for deadlines</li>
              <li>Design and code bespoke MVC framework in Actionscript 3 and Flex running on Adobe AIR</li>
            </ul>
          </section>
          <section className="position">
            <header className="role">
              <h4>Senior C#, PL/SQL Developer</h4>
              <h4>Commonwealth Bank of Australia</h4>
              <h4>2006 &ndash; 2007</h4>
            </header>
            <p></p>
            <ul>
              <li>A gigantic C# / WinForms project</li>
              <li>Technical lead on a few smaller projects for the bank</li>
            </ul>
          </section>         
          <section className="position">
            <header className="role">
              <h4>Full-Stack Developer</h4>
              <h4>MSO New York</h4>
              <h4>2004 &ndash; 2006</h4>
            </header>
            <p>Agile team creating Hedge Fund analytics platforms for Manhattan clients</p>
            <ul>
              <li>Business travel between Manhattan and NZ</li>
              <li>C#, .NET, Javascript, Actionscript, SQL, and HTML</li>
              <li>Algorithms and data structures for financial analytics</li>
            </ul>
          </section>
        </section>
      <section className="education">
        <h2 className="mt-10 mb-6">Education</h2>
        
        <section className="course">
          <header className="location">
            <h4>Christchurch, NZ</h4>
          </header>
          <header className="institute">
            <h4>NZ Institute of Sport</h4>
          </header>
          <header className="years">
            <h4>2014</h4>
          </header>
          <ul>
            <li><strong>Certificate in Massage Therapy</strong></li>
          </ul>
        </section>

        <section className="course">
          <header className="location">
            <h4>Christchurch, NZ</h4>
          </header>
          <header className="institute">
            <h4>Grassroots Yoga</h4>
          </header>
          <header className="years">
            <h4>2013 &ndash; 2014</h4>
          </header>
          <ul>
            <li><strong>200 Hour Certificate in Yoga Teaching</strong></li>
          </ul>
        </section>
               
        <section className="course after-heading">
          <header className="location">
            <h4>Christchurch, NZ</h4>
          </header>
          <header className="institute">
            <h4>Canterbury University</h4>
          </header>
          <header className="years">
            <h4>1998 &ndash; 2001</h4>
          </header>
          <ul>
            <li><strong>B.Sc. Computer Science, Philosophy</strong></li>
          </ul>
        </section>
      </section>
    </article>
  </div>
  </>
}

export default Resume;
